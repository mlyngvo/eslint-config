module.exports = {
    root: true,
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
    ],
    env: {
        browser: true,
        node: true,
        esnext: true
    }
}