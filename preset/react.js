const base = require('./shared/base');
const builder = require("./builder");

const react = {
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
                'standard-with-typescript',
                'plugin:unicorn/recommended',
                'prettier',
            ],
            rules: {
                // Allow most functions to rely on type inference.
                // If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    { functions: false, classes: true, variables: true, typedefs: true },
                ],
            },
        },
        {
            files: ['**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                allowAutomaticSingleRunInference: true,
                project: true,
                ecmaFeatures: {
                    jsx: true,
                },
            },
            plugins: ['simple-import-sort'],
            extends: [
                'standard-with-typescript',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:jsx-a11y/recommended',
                'plugin:unicorn/recommended',
                'prettier',
            ],
            rules: {
                // Allow most functions to rely on type inference.
                // If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    { functions: false, classes: true, variables: true, typedefs: true },
                ],
                // We don't need to import React in every file
                'react/react-in-jsx-scope': 'off',
                'react/jsx-uses-react': 'off',
            },
        },
    ]
}

module.exports = builder(react);