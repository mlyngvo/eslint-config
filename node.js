const node = require("./preset/node/index");

module.exports = {
    ...node,
    extends: [
        'alloy'
    ],
    env: {
        node: true,
    }
};