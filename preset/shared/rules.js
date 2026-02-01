/**
 * Shared ESLint rules for all presets
 */
module.exports = {
    // Formatting
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],

    // Readability
    'no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: true },
    ],

    // No JS bananas
    'no-console': ['warn', { allow: ['error', 'warn', 'info'] }],
    'no-prototype-builtins': 'off',
};
