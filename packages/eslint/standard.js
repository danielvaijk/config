/**
 * Pending to be checked and/or added:
 * TODO: import/no-extraneous-dependencies
 */
module.exports = {
  parserOptions: {
    /**
     * Since we use ECMAScript modules, which always have strict mode semantics,
     * the "strict" directive is unnecessary.
     */
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
    },
  },
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
  plugins: [
    "import",
    "no-relative-import-paths",
    "prettier",
    "sort-destructure-keys",
    "eslint-comments",
  ],
  rules: {
    /**
     * Rules for possible errors.
     */
    "for-direction": "error",
    "getter-return": [
      "error",
      {
        allowImplicit: false,
      },
    ],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "warn",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": [
      "error",
      {
        allow: ["warn"],
      },
    ],
    "no-constant-condition": [
      "error",
      {
        checkLoops: true,
      },
    ],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: false,
      },
    ],
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": [
      "error",
      {
        enforceForLogicalOperands: true,
      },
    ],
    "no-extra-parens": "off", // Replaced by TypeScript rule.
    "no-extra-semi": "off", // Replaced by TypeScript rule.
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: false,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
      },
    ],
    "no-loss-of-precision": "off", // Replaced by TypeScript rule.
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": [
      "error",
      {
        enforceForOrderingRelations: true,
      },
    ],
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",
    "use-isnan": "error",
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: false,
      },
    ],
    /**
     * Rules for best practices.
     */
    "accessor-pairs": [
      "error",
      {
        setWithoutGet: false,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],
    "array-callback-return": [
      "error",
      {
        allowImplicit: false,
        checkForEach: true,
      },
    ],
    "block-scoped-var": "error",
    "class-methods-use-this": "off",
    "complexity": ["warn", 20],
    "consistent-return": [
      "error",
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    "curly": ["error", "all"],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "off",
    "dot-location": ["error", "property"],
    "dot-notation": "off", // Replaced by TypeScript rule.
    "eqeqeq": "error",
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "guard-for-in": "error",
    "max-classes-per-file": ["error", 1],
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-div-regex": "error",
    "no-else-return": "off",
    "no-empty-function": "off", // Replaced by TypeScript rule.
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": [
      "error",
      {
        disallowTemplateShorthand: true,
      },
    ],
    "no-implicit-globals": [
      "error",
      {
        lexicalBindings: true,
      },
    ],
    "no-implied-eval": "error",
    "no-invalid-this": "off", // Replaced by TypeScript rule.
    "no-iterator": "error",
    "no-labels": [
      "error",
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    "no-lone-blocks": "error",
    "no-loop-func": "off", // Replaced by TypeScript rule.
    "no-magic-numbers": "off", // Replaced by TypeScript rule.
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "off",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "no-proto": "error",
    "no-redeclare": "off", // Replaced by TypeScript rule.
    "no-restricted-properties": "off",
    "no-return-assign": ["error", "always"],
    "no-return-await": "off", // Replaced by TypeScript rule.,
    "no-script-url": "error",
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-self-compare": "error",
    "no-sequences": [
      "error",
      {
        allowInParentheses: false,
      },
    ],
    "no-throw-literal": "off",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "off", // Replaced by TypeScript rule.
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": [
      "error",
      {
        allowAsStatement: false,
      },
    ],
    "no-warning-comments": [
      "warn",
      {
        terms: ["todo", "fixme"],
        location: "start",
      },
    ],
    "no-with": "error",
    "prefer-named-capture-group": "error",
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: false,
      },
    ],
    "prefer-regex-literals": "error",
    "radix": ["error", "always"],
    "require-await": "off", // Replaced by TypeScript rule.
    "require-unicode-regexp": "error",
    "vars-on-top": "error",
    "wrap-iife": [
      "error",
      "inside",
      {
        functionPrototypeMethods: false,
      },
    ],
    "yoda": [
      "error",
      "never",
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],
    /**
     * Rules for variable declarations.
     */
    "init-declarations": "off", // Replaced by TypeScript rule.
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "off", // Replaced by TypeScript rule.,
    "no-shadow-restricted-names": "error",
    "no-undef": [
      "error",
      {
        typeof: true,
      },
    ],
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": "off", // Replaced by TypeScript rule.,
    "no-use-before-define": "off", // Replaced by TypeScript rule.
    /**
     * Rules for style guidelines.
     */
    "array-bracket-newline": "off", // Handled by Prettier.
    "array-bracket-spacing": "off", // Handled by Prettier.
    "array-element-newline": "off", // Handled by Prettier.
    "block-spacing": "off", // Handled by Prettier.
    "brace-style": "off", // Handled by Prettier.
    "camelcase": "off",
    "capitalized-comments": [
      "error",
      "always",
      {
        ignorePattern: "",
        ignoreInlineComments: false,
        ignoreConsecutiveComments: true,
      },
    ],
    "comma-dangle": "off", // Handled by Prettier.
    "comma-spacing": "off", // Handled by Prettier.
    "comma-style": "off", // Handled by Prettier.
    "computed-property-spacing": "off", // Handled by Prettier.
    "consistent-this": ["error", "parent"],
    "eol-last": ["error", "always"],
    "func-call-spacing": "off", // Handled by Prettier.
    "func-name-matching": [
      "error",
      "always",
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: true,
      },
    ],
    "func-names": [
      "error",
      "as-needed",
      {
        generators: "always",
      },
    ],
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    "function-call-argument-newline": "off", // Handled by Prettier.
    "function-paren-newline": "off", // Handled by Prettier.
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": "off", // Handled by Prettier.
    "indent": "off", // Handled by Prettier.
    "jsx-quotes": "off", // Handled by Prettier.
    "key-spacing": "off", // Handled by Prettier.
    "keyword-spacing": "off", // Handled by Prettier.
    "line-comment-position": [
      "error",
      {
        position: "above",
        ignorePattern: "",
        applyDefaultIgnorePatterns: true,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "off",
    "lines-between-class-members": "off", // Replaced by TypeScript rule.,
    "max-depth": [
      "error",
      {
        max: 4,
      },
    ],
    "max-len": [
      "error",
      {
        code: 120,
        // "tabWidth", — Handled by Prettier.
        ignoreUrls: true,
        ignorePattern: "",
        ignoreStrings: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
      },
    ],
    "max-lines": [
      "error",
      {
        max: 1000,
        skipComments: true,
        skipBlankLines: false,
      },
    ],
    "max-lines-per-function": "off",
    "max-nested-callbacks": [
      "error",
      {
        max: 4,
      },
    ],
    "max-params": [
      "error",
      {
        max: 4,
      },
    ],
    "max-statements": "off",
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "multiline-comment-style": "off",
    "multiline-ternary": "off", // Handled by Prettier.
    "new-cap": "off", // Babel plugin version used instead.
    "new-parens": ["error", "always"],
    "newline-per-chained-call": "off", // Handled by Prettier.
    "no-array-constructor": "off", // Replaced by TypeScript rule.
    "no-bitwise": [
      "error",
      {
        allow: [],
        int32Hint: false,
      },
    ],
    "no-continue": "error",
    "no-inline-comments": [
      "error",
      {
        ignorePattern: "",
      },
    ],
    "no-lonely-if": "error",
    "no-mixed-operators": "off", // Handled by Prettier.
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": [
      "error",
      {
        ignoreNonDeclaration: false,
      },
    ],
    "no-multiple-empty-lines": "off", // Handled by Prettier.
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-restricted-syntax": "off",
    "no-tabs": [
      "error",
      {
        allowIndentationTabs: false,
      },
    ],
    "no-ternary": "error",
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: true,
        allowAfterSuper: true,
        allowFunctionParams: false,
        enforceInMethodNames: false,
        allowAfterThisConstructor: false,
      },
    ],
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    "no-whitespace-before-property": "off", // Handled by Prettier.
    "nonblock-statement-body-position": "off", // Handled by Prettier.
    "object-curly-newline": "off", // Handled by Prettier.
    "object-curly-spacing": "off", // Handled by Prettier.
    "object-property-newline": "off", // Handled by Prettier.
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": "off", // Handled by Prettier.
    "operator-assignment": ["error", "always"],
    "operator-linebreak": "off", // Handled by Prettier.
    "padded-blocks": "off", // Handled by Prettier.
    "padding-line-between-statements": "off", // Replaced by TypeScript rule.
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "quote-props": "off", // Handled by Prettier.
    "quotes": "off", // Handled by Prettier.
    "semi": "off", // Handled by Prettier.
    "semi-spacing": "off", // Handled by Prettier.
    "semi-style": "off", // Handled by Prettier.
    "sort-keys": [
      "error",
      "asc",
      {
        minKeys: 2,
        natural: false,
        caseSensitive: true,
      },
    ],
    "sort-vars": [
      "error",
      {
        ignoreCase: false,
      },
    ],
    "space-before-blocks": "off", // Handled by Prettier.
    "space-before-function-paren": "off", // Handled by Prettier.
    "space-in-parens": "off", // Handled by Prettier.
    "space-infix-ops": "off", // Handled by Prettier.
    "space-unary-ops": "off", // Handled by Prettier.
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          markers: [],
          exceptions: [],
        },
        block: {
          markers: [],
          exceptions: [],
          balanced: true,
        },
      },
    ],
    "switch-colon-spacing": "off", // Handled by Prettier.
    "template-tag-spacing": "off", // Handled by Prettier.
    "unicode-bom": ["error", "never"],
    "wrap-regex": "off", // Handled by Prettier.
    /**
     * Rules for ECMAScript 6.
     */
    "arrow-body-style": "off",
    "arrow-parens": ["error", "always"],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "constructor-super": "error",
    "generator-star-spacing": "off", // Handled by Prettier.
    "no-class-assign": "error",
    "no-confusing-arrow": [
      "error",
      {
        allowParens: false,
      },
    ],
    "no-const-assign": "error",
    "no-dupe-class-members": "off", // Replaced by TypeScript rule.
    "no-duplicate-imports": "off", // Replaced by TypeScript rule.
    "no-new-symbol": "error",
    "no-restricted-exports": "off",
    "no-restricted-imports": "off", // Replaced by Typescript rule.
    "no-this-before-super": "error",
    "no-useless-computed-key": [
      "error",
      {
        enforceForClassMembers: true,
      },
    ],
    "no-useless-constructor": "off", // Replaced by TypeScript rule.
    "no-useless-rename": [
      "error",
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],
    "no-var": "error",
    "object-shorthand": [
      "error",
      "properties",
      {
        avoidQuotes: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: false,
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": "off", // Handled by import plugin.
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "yield-star-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    /**
     * Prettier formatting.
     */
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
    /**
     * Destructure key sorting.
     */
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      {
        caseSensitive: true,
      },
    ],
    /**
     * Rules for import static analysis.
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
     * Rules for helpful import warnings.
     */
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error",
    /**
     * Rules for import module systems.
     */
    "import/unambiguous": "error",
    "import/no-commonjs": "error",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",
    /**
     * Rules for import style guidance.
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
    /**
     * Rules for ESLint comments.
     */
    "eslint-comments/disable-enable-pair": [
      "error",
      {
        allowWholeFile: true,
      },
    ],
    "eslint-comments/no-aggregating-enable": "error",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    "eslint-comments/no-restricted-disable": "off",
    "eslint-comments/no-use": "off",
    "eslint-comments/require-description": [
      "error",
      {
        ignore: ["global", "globals", "eslint-env"],
      },
    ],
  },
  overrides: [
    {
      files: "*.config.js",
      rules: {
        "import/no-commonjs": "off",
        "import/unambiguous": "off",
        "import/no-default-export": "off",
        "import/no-anonymous-default-export": "off",
      },
      env: {
        node: true,
      },
    },
  ],
};
