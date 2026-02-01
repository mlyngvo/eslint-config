const { describe, it } = require('node:test');
const assert = require('node:assert');
const builder = require('../preset/builder.js');
const shared = require('../preset/shared/rules.js');

describe('builder', () => {
    it('should merge shared rules into preset overrides', () => {
        const preset = {
            overrides: [
                {
                    files: ['**/*.ts'],
                    rules: {}
                }
            ]
        };

        const result = builder(preset);
        const rules = result.overrides[0].rules;

        // Shared rules should be present
        assert.deepStrictEqual(rules['semi'], shared['semi']);
        assert.deepStrictEqual(rules['quotes'], shared['quotes']);
        assert.strictEqual(rules['@typescript-eslint/strict-boolean-expressions'], 'error');
    });

    it('should allow preset-specific rules to override shared rules', () => {
        const preset = {
            overrides: [
                {
                    files: ['**/*.ts'],
                    rules: {
                        // Override shared rule (semi is ['error', 'always'] in shared)
                        'semi': ['error', 'never']
                    }
                }
            ]
        };

        const result = builder(preset);
        const rules = result.overrides[0].rules;

        // Preset-specific rule should take precedence
        assert.deepStrictEqual(rules['semi'], ['error', 'never']);
        // Other shared rules should still be present
        assert.deepStrictEqual(rules['quotes'], shared['quotes']);
    });

    it('should preserve preset-only rules', () => {
        const preset = {
            overrides: [
                {
                    files: ['**/*.ts'],
                    rules: {
                        'my-custom-rule': 'warn',
                        'another-custom-rule': ['error', { option: true }]
                    }
                }
            ]
        };

        const result = builder(preset);
        const rules = result.overrides[0].rules;

        assert.strictEqual(rules['my-custom-rule'], 'warn');
        assert.deepStrictEqual(rules['another-custom-rule'], ['error', { option: true }]);
    });

    it('should handle multiple overrides', () => {
        const preset = {
            overrides: [
                {
                    files: ['**/*.ts'],
                    rules: { 'semi': ['error', 'never'] }
                },
                {
                    files: ['**/*.tsx'],
                    rules: { 'quotes': ['error', 'double'] }
                }
            ]
        };

        const result = builder(preset);

        // First override
        assert.deepStrictEqual(result.overrides[0].rules['semi'], ['error', 'never']);
        assert.deepStrictEqual(result.overrides[0].rules['quotes'], shared['quotes']);

        // Second override
        assert.deepStrictEqual(result.overrides[1].rules['quotes'], ['error', 'double']);
        assert.deepStrictEqual(result.overrides[1].rules['semi'], shared['semi']);
    });

    it('should not mutate the original shared rules', () => {
        const originalSemi = JSON.stringify(shared['semi']);

        const preset = {
            overrides: [
                {
                    files: ['**/*.ts'],
                    rules: { 'semi': ['error', 'never'] }
                }
            ]
        };

        builder(preset);

        // Shared rules should remain unchanged
        assert.strictEqual(JSON.stringify(shared['semi']), originalSemi);
    });
});

describe('node preset', () => {
    it('should export a valid eslint config', () => {
        const nodePreset = require('../preset/node/index.js');

        assert.ok(nodePreset.root === true);
        assert.ok(Array.isArray(nodePreset.overrides));
        assert.ok(nodePreset.overrides.length > 0);
        assert.ok(nodePreset.overrides[0].rules);
    });

    it('should have shared rules merged', () => {
        const nodePreset = require('../preset/node/index.js');
        const rules = nodePreset.overrides[0].rules;

        assert.deepStrictEqual(rules['semi'], shared['semi']);
        assert.strictEqual(rules['@typescript-eslint/strict-boolean-expressions'], 'error');
    });
});

describe('react preset', () => {
    it('should export a valid eslint config', () => {
        const reactPreset = require('../preset/react/index.js');

        assert.ok(reactPreset.root === true);
        assert.ok(Array.isArray(reactPreset.overrides));
        assert.ok(reactPreset.overrides.length >= 2); // .ts and .tsx
    });

    it('should have shared rules merged in both overrides', () => {
        const reactPreset = require('../preset/react/index.js');

        // .ts override
        const tsRules = reactPreset.overrides[0].rules;
        assert.deepStrictEqual(tsRules['semi'], shared['semi']);

        // .tsx override
        const tsxRules = reactPreset.overrides[1].rules;
        assert.deepStrictEqual(tsxRules['semi'], shared['semi']);
    });

    it('should have react-specific rules in tsx override', () => {
        const reactPreset = require('../preset/react/index.js');
        const tsxRules = reactPreset.overrides[1].rules;

        assert.strictEqual(tsxRules['react/react-in-jsx-scope'], 'off');
        assert.strictEqual(tsxRules['react/jsx-uses-react'], 'off');
    });
});
