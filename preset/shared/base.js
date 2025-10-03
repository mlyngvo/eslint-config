module.exports = {
    root: true,
    plugins: ['@typescript-eslint'],
    ignorePatterns: [
        "*.min.*",
        "*.d.ts",
        "dist",
        "esm",
        '*.css',
        '*.png',
        '*.ico',
        '*.toml',
        '*.patch',
        '*.txt',
        '*.crt',
        '*.key',
        'Dockerfile',
    ]
}