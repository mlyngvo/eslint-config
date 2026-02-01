module.exports = {
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
};
