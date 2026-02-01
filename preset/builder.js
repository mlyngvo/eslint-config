const shared = require('./shared/rules');

const builder = (preset) => {
    const rules = preset;
    for (const override of preset.overrides) {
        override.rules = { ...shared, ...override.rules };
    }
    return rules;
}

module.exports = builder;