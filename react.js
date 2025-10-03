const react = require("./preset/react/index");

module.exports = {
    ...react,
    extends: [
        'alloy',
        'alloy/react',
    ],
    env: {
        browser: true,
    }
};