module.exports = {
  printWidth: 100,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "consistent",
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: "always",
  requirePragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  overrides: [
    {
      files: ".*rc",
      options: {
        parser: "json",
      },
    },
  ],
};
