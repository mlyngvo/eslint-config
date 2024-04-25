const base = require('../shared/base');
const builder = require("../builder");

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
                'love',
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
                "@typescript-eslint/no-misused-promises": [
                    "error",
                    {
                        "checksVoidReturn": false
                    }
                ]
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
                'love',
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
                'react/jsx-props-no-spreading': 'off',
                'react/static-property-placement': 'off',
                'react/no-array-index-key': 'off',
                'react/jsx-no-bind': 'off',
                'react/require-default-props': 'off',
            },
        },
    ]
}

module.exports = builder(react);