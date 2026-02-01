const base = require('../shared/base');
const typescript = require('../shared/typescript');
const builder = require("../builder");

const node = {
    ...base,
    overrides: [
        { ...typescript },
    ]
}

module.exports = builder(node);