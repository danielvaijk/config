module.exports = {
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
    overrides: [
        {
            files: "*.js",
            extends: [
                "./eslint-config-import",
                "./eslint-config-default",
                "./eslint-config-format",
                "./eslint-config-directive",
            ],
        },
        {
            files: "*.config.js",
            rules: {
                "import/no-commonjs": "off",
                "import/unambiguous": "off",
                "import/no-default-export": "off",
                "import/no-anonymous-default-export": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-argument": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-require-imports": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/promise-function-async": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
            },
            parserOptions: {
                project: ["./tsconfig.json"],
            },
            env: {
                node: true,
            },
        },
        {
            files: "*.ts",
            extends: [
                "./eslint-config-import",
                "./eslint-config-default",
                "./eslint-config-format",
                "./eslint-config-directive",
                "./eslint-config-typescript",
            ],
            rules: {
                "no-undef": "off", // Disabled since TypeScript does a better job at this.
            },
        },
        {
            files: "*.tsx",
            extends: [
                "./eslint-config-react",
                "./eslint-config-import",
                "./eslint-config-default",
                "./eslint-config-format",
                "./eslint-config-directive",
                "./eslint-config-typescript",
            ],
            rules: {
                "no-undef": "off", // Disabled since TypeScript does a better job at this.
            },
        },
    ],
};
