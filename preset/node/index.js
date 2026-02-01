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
                'alloy',
                'prettier',
            ],
            rules: {},
        },
    ]
}

module.exports = builder(node);