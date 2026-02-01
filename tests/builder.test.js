const { describe, it } = require('node:test');
const assert = require('node:assert');

const baseRules = require('../preset/shared/rules');
const tsRules = require('../preset/shared/typescript-rules');
const ignores = require('../preset/shared/ignores');

describe('shared/rules', () => {
    it('should export base ESLint rules', () => {
        assert.ok(typeof baseRules === 'object');
        assert.deepStrictEqual(baseRules['semi'], ['error', 'always']);
        assert.deepStrictEqual(baseRules['quotes'], ['error', 'single', { avoidEscape: true }]);
        assert.ok('no-console' in baseRules);
    });
});

describe('shared/typescript-rules', () => {
    it('should export TypeScript-specific rules', () => {
        assert.ok(typeof tsRules === 'object');
        assert.strictEqual(tsRules['@typescript-eslint/strict-boolean-expressions'], 'error');
        assert.strictEqual(tsRules['@typescript-eslint/no-floating-promises'], 'error');
        assert.strictEqual(tsRules['@typescript-eslint/no-non-null-assertion'], 'error');
    });
});

describe('shared/ignores', () => {
    it('should export ignores config', () => {
        assert.ok(Array.isArray(ignores.ignores));
        assert.ok(ignores.ignores.includes('**/dist/**'));
        assert.ok(ignores.ignores.includes('**/node_modules/**'));
    });
});

describe('node preset', () => {
    it('should export a flat config array', () => {
        const nodePreset = require('../preset/node/index.js');

        assert.ok(Array.isArray(nodePreset));
        assert.ok(nodePreset.length > 0);
    });

    it('should include ignores config', () => {
        const nodePreset = require('../preset/node/index.js');

        const ignoresConfig = nodePreset.find(c => c.ignores && !c.files);
        assert.ok(ignoresConfig, 'Should have global ignores config');
        assert.ok(ignoresConfig.ignores.includes('**/dist/**'));
    });

    it('should include TypeScript file config with custom rules', () => {
        const nodePreset = require('../preset/node/index.js');

        // Find our custom TS config (the one with simple-import-sort plugin)
        const tsConfig = nodePreset.find(c =>
            c.files &&
            c.files.includes('**/*.ts') &&
            c.plugins &&
            c.plugins['simple-import-sort']
        );
        assert.ok(tsConfig, 'Should have TypeScript config');
        assert.ok('semi' in tsConfig.rules, 'Should have base rules');
        assert.ok('@typescript-eslint/strict-boolean-expressions' in tsConfig.rules, 'Should have TS rules');
    });

    it('should include simple-import-sort plugin', () => {
        const nodePreset = require('../preset/node/index.js');

        const tsConfig = nodePreset.find(c =>
            c.files && c.files.includes('**/*.ts') && c.plugins
        );
        assert.ok(tsConfig.plugins['simple-import-sort'], 'Should have simple-import-sort plugin');
        assert.strictEqual(tsConfig.rules['simple-import-sort/imports'], 'error');
    });
});

describe('react preset', () => {
    it('should export a flat config array', () => {
        const reactPreset = require('../preset/react/index.js');

        assert.ok(Array.isArray(reactPreset));
        assert.ok(reactPreset.length > 0);
    });

    it('should include TSX file config', () => {
        const reactPreset = require('../preset/react/index.js');

        const tsxConfig = reactPreset.find(c =>
            c.files && c.files.includes('**/*.tsx')
        );
        assert.ok(tsxConfig, 'Should have TSX config');
    });

    it('should include React plugins', () => {
        const reactPreset = require('../preset/react/index.js');

        const tsxConfig = reactPreset.find(c =>
            c.files && c.files.includes('**/*.tsx') && c.plugins
        );
        assert.ok(tsxConfig.plugins['react'], 'Should have react plugin');
        assert.ok(tsxConfig.plugins['react-hooks'], 'Should have react-hooks plugin');
        assert.ok(tsxConfig.plugins['jsx-a11y'], 'Should have jsx-a11y plugin');
    });

    it('should have React-specific rules', () => {
        const reactPreset = require('../preset/react/index.js');

        // Find the TSX config with React plugin
        const tsxConfig = reactPreset.find(c =>
            c.files &&
            c.files.includes('**/*.tsx') &&
            c.plugins &&
            c.plugins['react']
        );
        assert.strictEqual(tsxConfig.rules['react/react-in-jsx-scope'], 'off');
        assert.strictEqual(tsxConfig.rules['react/prop-types'], 'off');
    });

    it('should detect React version automatically', () => {
        const reactPreset = require('../preset/react/index.js');

        const tsxConfig = reactPreset.find(c =>
            c.files && c.files.includes('**/*.tsx') && c.settings
        );
        assert.strictEqual(tsxConfig.settings.react.version, 'detect');
    });
});

describe('main export', () => {
    it('should export node preset by default', () => {
        const main = require('../preset/index.js');
        const node = require('../preset/node/index.js');

        assert.deepStrictEqual(main, node);
    });
});
