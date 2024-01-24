const node = require("./preset/node/index");

module.exports = {
    ...node,
    extends: [
        'airbnb',
        'airbnb-typescript/base',
    ],
};