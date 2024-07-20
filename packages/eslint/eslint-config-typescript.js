/**
 * A list of rules that are pending to be checked and/or added:
 *
 * TODO: @typescript-eslint/member-ordering
 * TODO: @typescript-eslint/naming-convention
 * TODO: @typescript-eslint/prefer-readonly-parameter-types
 * TODO: @typescript-eslint/typedef
 */
export default {
  plugins: ["@typescript-eslint"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "tsconfig.json",
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
        readonly: "generic",
      },
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-check": true,
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-expect-error": true,
      },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-exports": [
      "error",
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowedNames: [],
        allowExpressions: false,
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          methods: "explicit",
          accessors: "explicit",
          properties: "explicit",
          constructors: "no-public",
          parameterProperties: "explicit",
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        allowedNames: [],
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: false,
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: false,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-base-to-string": [
      "error",
      {
        ignoredTypeNames: [],
      },
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        fixToUnknown: false,
        ignoreRestArgs: false,
      },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": [
      "error",
      {
        allowEmpty: false,
        allowStaticOnly: true,
        allowWithDecorator: false,
        allowConstructorOnly: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: false,
        ignoreIIFE: false,
      },
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implicit-any-catch": [
      "error",
      {
        allowExplicitAny: false,
      },
    ],
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
    "@typescript-eslint/no-invalid-void-type": [
      "error",
      {
        allowAsThisParameter: false,
        allowInGenericTypeArguments: true,
      },
    ],
    "@typescript-eslint/no-meaningless-void-operator": [
      "error",
      {
        checkNever: false,
      },
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: true,
        checksConditionals: true,
      },
    ],
    "@typescript-eslint/no-namespace": [
      "error",
      {
        allowDeclarations: false,
        allowDefinitionFiles: false,
      },
    ],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowedNames: [],
        allowDestructuring: false,
      },
    ],
    "@typescript-eslint/no-throw-literal": [
      "error",
      {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      },
    ],
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": [
      "error",
      {
        typesToIgnore: [],
      },
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": [
      "error",
      {
        allowBitwiseExpressions: false,
      },
    ],
    "@typescript-eslint/prefer-namespace-keyword": "off",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false,
      },
    ],
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": [
      "error",
      {
        onlyInlineLambdas: false,
      },
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        allowAny: false,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkMethodDeclarations: true,
        checkFunctionExpressions: true,
        checkFunctionDeclarations: true,
      },
    ],
    "@typescript-eslint/require-array-sort-compare": [
      "error",
      {
        ignoreStringArrays: false,
      },
    ],
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        skipCompoundAssignments: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowAny: false,
        allowNumber: true,
        allowBoolean: false,
        allowNullish: false,
        allowRegExp: false,
      },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowAny: false,
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowNullableBoolean: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        lib: "never",
        path: "never",
        types: "never",
      },
    ],
    "@typescript-eslint/type-annotation-spacing": [
      "error",
      {
        after: true,
        before: false,
        overrides: {
          arrow: {
            after: true,
            before: true,
          },
        },
      },
    ],
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": [
      "error",
      {
        ignoreStatic: false,
      },
    ],
    "@typescript-eslint/unified-signatures": "error",
    /**
     * TypeScript ES extension rules.
     */
    "@typescript-eslint/dot-notation": [
      "error",
      {
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
      },
    ],
    "@typescript-eslint/init-declarations": ["error", "always"],
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterOverload: false,
        exceptAfterSingleLine: true,
      },
    ],
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-duplicate-imports": [
      "error",
      {
        includeExports: true,
      },
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: [],
      },
    ],
    "@typescript-eslint/no-extra-parens": "off", // Handled by Prettier.
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignore: [0, 1],
        ignoreEnums: true,
        enforceConst: true,
        detectObjects: true,
        ignoreArrayIndexes: true,
        ignoreNumericLiteralTypes: false,
        ignoreReadonlyClassProperties: true,
      },
    ],
    "@typescript-eslint/no-redeclare": [
      "error",
      {
        ignoreDeclarationMerge: false,
      },
    ],
    "@typescript-eslint/no-restricted-imports": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        allow: [],
        hoist: "all",
        builtinGlobals: true,
        ignoreTypeValueShadow: false,
        ignoreFunctionTypeParameterNameValueShadow: false,
      },
    ],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowTernary: false,
        allowShortCircuit: false,
        allowTaggedTemplates: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        caughtErrors: "all",
        argsIgnorePattern: "",
        varsIgnorePattern: "",
        ignoreRestSiblings: false,
        caughtErrorsIgnorePattern: "",
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        enums: true,
        classes: true,
        typedefs: true,
        functions: true,
        variables: true,
        ignoreTypeReferences: false,
      },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/padding-line-between-statements": "off", // Handled by Prettier?
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/return-await": "warn",
  },
};
