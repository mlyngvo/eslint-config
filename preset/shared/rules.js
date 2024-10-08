module.exports = {
    // Formatting
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],

    // Readability
    'no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: true },
    ],
    'import/prefer-default-export': 'off',

    // No JS bananas
    'no-console': ['warn', { allow: ['error', 'warn', 'info'] }],
    'no-prototype-builtins': 'off',

    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-dynamic-delete': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
}