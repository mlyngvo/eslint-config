const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const globals = require('globals');

const baseRules = require('../shared/rules');
const tsRules = require('../shared/typescript-rules');
const ignores = require('../shared/ignores');

/**
 * React-specific rules
 */
const reactRules = {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-no-bind': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
};

/**
 * ESLint flat config for React/TypeScript projects
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
    // Global ignores
    ignores,

    // Base JS recommended rules
    eslint.configs.recommended,

    // TypeScript configuration
    ...tseslint.configs.recommendedTypeChecked,

    // TypeScript files (non-React)
    {
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            ...baseRules,
            ...tsRules,
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },

    // React/TSX files
    {
        files: ['**/*.tsx', '**/*.jsx'],
        languageOptions: {
            parserOptions: {
                projectService: true,
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
            'react': react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...baseRules,
            ...tsRules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.flatConfigs.recommended.rules,
            ...reactRules,
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },

    // JavaScript files (for config files, etc.)
    {
        files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
        ...tseslint.configs.disableTypeChecked,
        rules: {
            ...baseRules,
        },
    },

    // Prettier must be last to override formatting rules
    prettier,
];
