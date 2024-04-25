const base = require('../shared/base');
const builder = require("../builder");

const node = {
    ...base,
    overrides: [
        {
            files: ['**/*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                allowAutomaticSingleRunInference: true,
                project: true,
            },
            plugins: ['simple-import-sort'],
            extends: [
                'love',
                'plugin:unicorn/recommended',
                'airbnb',
                'airbnb-typescript/base',
                'prettier',
            ],
            rules: {
                // Allow most functions to rely on type inference.
                // If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
                // Disable as it might be considered as too strict.
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    { functions: false, classes: true, variables: true, typedefs: true },
                ],
            },
        },
    ]
}

module.exports = builder(node);