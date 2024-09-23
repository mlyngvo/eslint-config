const react = require("./preset/react/index");

module.exports = {
    ...react,
    extends: [
        'airbnb',
        '@mlyngvo/eslint-config-airbnb-typescript',
    ],
};