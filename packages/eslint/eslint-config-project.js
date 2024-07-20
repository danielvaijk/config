export default {
  reportUnusedDisableDirectives: true,
  env: {
    // This also automatically sets parserOptions.ecmaVersion to '11'.
    es2020: true,
  },
  noInlineConfig: false,
  parserOptions: {
    /**
     * Since we use ECMAScript modules, which always have strict mode semantics,
     * the "strict" directive is unnecessary.
     */
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
    },
  },
};
