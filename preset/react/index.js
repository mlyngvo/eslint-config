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
                'alloy',
                'prettier',
            ],
            rules: {
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
                'alloy',
                'alloy/react',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:jsx-a11y/recommended',
                'prettier',
            ],
            rules: {
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