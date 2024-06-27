module.exports = {
    plugins: ["prettier", "sort-destructure-keys", "typescript-sort-keys"],
    rules: {
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
         * TypeScript key sorting.
         */
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
    },
};
