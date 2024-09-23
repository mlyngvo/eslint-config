const node = require("./preset/node/index");

module.exports = {
    ...node,
    extends: [
        'airbnb',
        '@mlyngvo/eslint-config-airbnb-typescript/base',
    ],
};