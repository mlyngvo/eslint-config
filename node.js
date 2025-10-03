const node = require("./preset/node/index");

module.exports = {
    ...node,
    env: {
        node: true,
    }
};