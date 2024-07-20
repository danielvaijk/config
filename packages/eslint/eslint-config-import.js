export default {
  plugins: ["import", "no-relative-import-paths"],
  rules: {
    /**
     * Rules for static analysis.
     */
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-restricted-paths": "error",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-relative-parent-imports": "off",
    /**
     * Rules for helpful warnings.
     */
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "error",
    "import/no-extraneous-dependencies": "off", // FIXME: Temporarily disabled.
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error",
    /**
     * Rules for module systems.
     */
    "import/unambiguous": "error",
    "import/no-commonjs": "error",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",
    /**
     * Rules for style guidance.
     */
    "import/first": "error",
    "import/exports-last": "error",
    "import/no-duplicates": "off", // Replaced by TypeScript rule equivalent.
    "import/no-namespace": "error",
    "import/extensions": [
      "error",
      "never",
      {
        ignorePackages: false,
        pattern: { json: "always" },
      },
    ],
    "import/order": [
      "error",
      {
        "pathGroups": [],
        "alphabetize": {
          order: "asc",
          caseInsensitive: false,
        },
        "groups": ["builtin", "external"],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": [],
      },
    ],
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["**/index.css", "reflect-metadata"],
      },
    ],
    "import/no-named-default": "error",
    "import/no-default-export": "error",
    "import/no-named-export": "off",
    "import/no-anonymous-default-export": "error",
    "import/group-exports": "error",
    "import/dynamic-import-chunkname": "error",
    /**
     * Relative imports.
     */
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      {
        allowSameFolder: false,
      },
    ],
  },
};
