module.exports = {
  plugins: ["react", "react-hooks"],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
      flowVersion: "0.75",
    },
  },
  rules: {
    /**
     * Rules for React.
     */
    "react/boolean-prop-naming": [
      "error",
      {
        validateNested: true,
        propTypeNames: ["bool"],
        rule: "^(is|has|will|does)[A-Z]([A-Za-z0-9]?)+",
      },
    ],
    "react/button-has-type": [
      "error",
      {
        reset: true,
        button: true,
        submit: true,
      },
    ],
    "react/default-props-match-prop-types": [
      "error",
      {
        allowRequiredDefaults: false,
      },
    ],
    "react/destructuring-assignment": "off",
    "react/display-name": "off", // TODO: Might be interesting to enable this in the future.
    "react/forbid-component-props": [
      "error",
      {
        forbid: ["style"],
      },
    ],
    "react/forbid-dom-props": [
      "error",
      {
        forbid: ["style"],
      },
    ],
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": "error",
    "react/forbid-prop-types": "off", // TODO: Might be interesting to enable this in the future.
    "react/function-component-definition": [
      "error",
      {
        unnamedComponents: "arrow-function",
        namedComponents: "function-declaration",
      },
    ],
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": ["error", "disallow-in-func"],
    "react/no-did-update-set-state": ["error", "disallow-in-func"],
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": [
      "error",
      {
        ignoreStateless: false,
      },
    ],
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": [
      "error",
      {
        noTemplateLiterals: true,
      },
    ],
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [">", '"', "'", "}"],
      },
    ],
    "react/no-unknown-property": [
      "error",
      {
        ignore: [],
      },
    ],
    "react/no-unsafe": [
      "error",
      {
        checkAliases: true,
      },
    ],
    "react/no-unused-prop-types": [
      "error",
      {
        skipShapeProps: false,
      },
    ],
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": ["error", "disallow-in-func"],
    "react/prefer-es6-class": "off",
    "react/prefer-read-only-props": "error", // Note: this rule MIGHT be Flow specific.
    "react/prefer-stateless-function": "off",
    "react/prop-types": [
      "error",
      {
        skipUndeclared: false,
      },
    ],
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": [
      "error",
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],
    "react/require-optimization": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": [
      "error",
      {
        html: true,
        component: true,
      },
    ],
    "react/sort-comp": "off",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": ["error", "always"],
    "react/static-property-placement": "off", // TODO: Might be interesting to enable this in the future.
    "react/style-prop-object": [
      "error",
      {
        allow: [],
      },
    ],
    "react/void-dom-elements-no-children": "error",
    /**
     * Rules for JSX.
     */
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": [
      "error",
      {
        nonEmpty: "tag-aligned",
        selfClosing: "tag-aligned",
      },
    ],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
      },
    ],
    "react/jsx-curly-newline": [
      "error",
      {
        multiline: "consistent",
        singleline: "consistent",
      },
    ],
    "react/jsx-curly-spacing": "off", // Handled by Prettier.
    "react/jsx-equals-spacing": "off", // Handled by Prettier.
    "react/jsx-filename-extension": [
      "error",
      {
        allow: "always",
        extensions: [".tsx"],
      },
    ],
    "react/jsx-first-prop-new-line": "off", // Handled by Prettier.
    "react/jsx-fragments": ["error", "element"],
    "react/jsx-handler-names": "off", // FIXME: Switched off for now as it's a bit buggy.
    "react/jsx-indent": "off", // Handled by Prettier.
    "react/jsx-indent-props": "off", // Handled by Prettier.
    "react/jsx-key": "error",
    "react/jsx-max-depth": [
      "error",
      {
        max: 10,
      },
    ],
    "react/jsx-max-props-per-line": "off", // Handled by Prettier.
    "react/jsx-no-bind": [
      "error",
      {
        allowBind: false,
        ignoreRefs: false,
        allowFunctions: false,
        ignoreDOMComponents: false,
      },
    ],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": [
      "error",
      {
        ignoreCase: false,
      },
    ],
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": [
      "error",
      {
        allowReferrer: false,
        enforceDynamicLinks: "always",
      },
    ],
    "react/jsx-no-undef": [
      "error",
      {
        allowGlobals: false,
      },
    ],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": "off", // Handled by Prettier.
    "react/jsx-pascal-case": [
      "error",
      {
        ignore: [],
        allowAllCaps: false,
      },
    ],
    "react/jsx-props-no-multi-spaces": "off", // Handled by Prettier.
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-default-props": "off",
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: false,
        shorthandLast: true,
        noSortAlphabetically: false,
      },
    ],
    "react/jsx-space-before-closing": "off", // Handled by Prettier.
    "react/jsx-tag-spacing": "off", // Handled by Prettier.
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off", // Handled by Prettier.
    /**
     * Rules for React hooks.
     */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
