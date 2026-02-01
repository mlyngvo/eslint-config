const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

const baseRules = require('../shared/rules');
const tsRules = require('../shared/typescript-rules');
const ignores = require('../shared/ignores');

/**
 * ESLint flat config for Node.js/TypeScript projects
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
    // Global ignores
    ignores,

    // Base JS recommended rules
    eslint.configs.recommended,

    // TypeScript configuration
    ...tseslint.configs.recommendedTypeChecked,

    // TypeScript files
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
