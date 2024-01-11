module.exports = {
    // Formatting
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],

    // Readability
    'no-use-before-define': [
        'error',
        // { functions: false, classes: true, variables: true },
    ],

    // No JS bananas
    '@typescript-eslint/strict-boolean-expression': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-dynamic-delete': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error'

}