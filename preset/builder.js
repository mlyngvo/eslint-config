const shared = require('./shared/rules');

const builder = (preset) => {
    const rules = preset;
    for (const override of preset.overrides) {
        Object.assign(override.rules, shared);
    }
    return rules;
}

module.exports = builder;