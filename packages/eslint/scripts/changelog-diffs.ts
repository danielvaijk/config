#!/usr/bin/env bun

import { $ } from "bun";
import { readFileSync, writeFileSync } from "fs";

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

interface ReleaseListItem {
  tagName: string;
  publishedAt: string;
}

interface PackageConfig {
  name: string;
  repo: string;
}

async function getCurrentVersion(packageName: string): Promise<string | null> {
  const packageJson: PackageJson = JSON.parse(readFileSync("package.json", "utf-8"));

  const version =
    packageJson.dependencies?.[packageName] ||
    packageJson.devDependencies?.[packageName] ||
    packageJson.peerDependencies?.[packageName];

  if (!version) return null;

  // Strip ^ or ~ prefix
  return version.replace(/^[\^~]/, "");
}

async function getReleases(repo: string): Promise<ReleaseListItem[]> {
  const result =
    await $`gh release list --repo ${repo} --limit 100 --json tagName,publishedAt`.json();
  return result as ReleaseListItem[];
}

async function getReleaseBody(repo: string, tag: string): Promise<string> {
  const result = await $`gh release view ${tag} --repo ${repo} --json body`.json();
  return (result as { body: string }).body;
}

function compareVersions(v1: string, v2: string): number {
  const parts1 = v1.replace(/^v/, "").split(".").map(Number);
  const parts2 = v2.replace(/^v/, "").split(".").map(Number);

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const part1 = parts1[i] || 0;
    const part2 = parts2[i] || 0;

    if (part1 > part2) return 1;
    if (part1 < part2) return -1;
  }

  return 0;
}

function sanitizeFilename(packageName: string): string {
  // Replace @ and / with safe characters
  return packageName.replace(/@/g, "").replace(/\//g, "-");
}

async function processPackage(
  config: PackageConfig,
  allReleases: ReleaseListItem[],
  releaseBodyCache: Map<string, string>
) {
  const { name: packageName, repo } = config;
  const outputFile = `${sanitizeFilename(packageName)}-diff.md`;

  console.log(`\nChecking ${packageName}...`);

  const currentVersion = await getCurrentVersion(packageName);

  if (!currentVersion) {
    console.log(`  ⚠️  ${packageName} not found in package.json - skipping`);
    return;
  }

  console.log(`  Current version: ${currentVersion}`);

  // Filter releases newer than current version
  const newerReleases = allReleases.filter((release) => {
    const releaseVersion = release.tagName.replace(/^v/, "");
    return compareVersions(releaseVersion, currentVersion) > 0;
  });

  if (newerReleases.length === 0) {
    console.log(`  ✓ You're on the latest version!`);
    return;
  }

  console.log(`  Found ${newerReleases.length} newer release(s)`);

  // Sort by version (oldest first)
  newerReleases.sort((a, b) => compareVersions(a.tagName, b.tagName));

  // Build markdown content
  let markdown = `# ${packageName} Changelog\n\n`;
  markdown += `Current version: ${currentVersion}\n`;
  markdown += `Generated: ${new Date().toISOString()}\n\n`;
  markdown += `---\n\n`;

  // Fetch full release details for each
  for (const release of newerReleases) {
    const cacheKey = `${repo}:${release.tagName}`;

    let body: string;
    if (releaseBodyCache.has(cacheKey)) {
      body = releaseBodyCache.get(cacheKey)!;
    } else {
      console.log(`  Fetching changelog for ${release.tagName}...`);
      body = await getReleaseBody(repo, release.tagName);
      releaseBodyCache.set(cacheKey, body);
    }

    markdown += `## ${release.tagName}\n\n`;
    markdown += `**Published:** ${new Date(release.publishedAt).toLocaleDateString()}\n\n`;
    markdown += `${body}\n\n`;
    markdown += `---\n\n`;
  }

  // Write to file
  writeFileSync(outputFile, markdown);
  console.log(`  ✓ Changelog written to ${outputFile}`);
}

async function main() {
  const packages: PackageConfig[] = [
    { name: "eslint", repo: "eslint/eslint" },
    { name: "@typescript-eslint/eslint-plugin", repo: "typescript-eslint/typescript-eslint" },
    { name: "@typescript-eslint/parser", repo: "typescript-eslint/typescript-eslint" },
    {
      name: "eslint-import-resolver-typescript",
      repo: "import-js/eslint-import-resolver-typescript",
    },
    { name: "eslint-plugin-eslint-comments", repo: "mysticatea/eslint-plugin-eslint-comments" },
    { name: "eslint-plugin-import", repo: "import-js/eslint-plugin-import" },
    {
      name: "eslint-plugin-no-relative-import-paths",
      repo: "MelvinVermeer/eslint-plugin-no-relative-import-paths",
    },
    { name: "eslint-plugin-prettier", repo: "prettier/eslint-plugin-prettier" },
    { name: "eslint-plugin-qwik", repo: "QwikDev/qwik" },
    { name: "eslint-plugin-react", repo: "jsx-eslint/eslint-plugin-react" },
    { name: "eslint-plugin-react-hooks", repo: "facebook/react" },
    {
      name: "eslint-plugin-sort-destructure-keys",
      repo: "mthadley/eslint-plugin-sort-destructure-keys",
    },
    {
      name: "eslint-plugin-typescript-sort-keys",
      repo: "infctr/eslint-plugin-typescript-sort-keys",
    },
  ];

  console.log(`Processing ${packages.length} package(s)...\n`);

  // Group packages by repo
  const packagesByRepo = new Map<string, PackageConfig[]>();
  for (const pkg of packages) {
    if (!packagesByRepo.has(pkg.repo)) {
      packagesByRepo.set(pkg.repo, []);
    }
    packagesByRepo.get(pkg.repo)!.push(pkg);
  }

  console.log(`Fetching releases from ${packagesByRepo.size} unique repo(s)...\n`);

  // Fetch releases once per repo and cache release bodies
  const releasesByRepo = new Map<string, ReleaseListItem[]>();
  const releaseBodyCache = new Map<string, string>();

  for (const repo of packagesByRepo.keys()) {
    console.log(`Fetching releases for ${repo}...`);
    const releases = await getReleases(repo);
    releasesByRepo.set(repo, releases);
  }

  // Process all packages
  for (const pkg of packages) {
    const releases = releasesByRepo.get(pkg.repo)!;
    await processPackage(pkg, releases, releaseBodyCache);
  }

  console.log("\n✓ Done!");
}

main();
