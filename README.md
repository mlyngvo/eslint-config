# @mlyngvo/eslint-config

ESLint flat configuration for TypeScript projects.

## Installation

```bash
npm install --save-dev @mlyngvo/eslint-config eslint typescript
```

## Usage

This package uses ESLint's [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) format.

### Node.js / TypeScript projects

Create an `eslint.config.js` (or `eslint.config.mjs`) file:

```js
const nodeConfig = require('@mlyngvo/eslint-config/node');

module.exports = [
    ...nodeConfig,
    // Your custom config here
];
```

Or using ES modules:

```js
import nodeConfig from '@mlyngvo/eslint-config/node';

export default [
    ...nodeConfig,
    // Your custom config here
];
```

### React / TypeScript projects

```js
const reactConfig = require('@mlyngvo/eslint-config/react');

module.exports = [
    ...reactConfig,
    // Your custom config here
];
```

## Features

- ESLint 9 flat config format
- TypeScript support via `typescript-eslint`
- Import sorting via `eslint-plugin-simple-import-sort`
- Prettier compatibility (formatting rules disabled)
- React preset includes:
  - `eslint-plugin-react` with recommended rules
  - `eslint-plugin-react-hooks` for hooks rules
  - `eslint-plugin-jsx-a11y` for accessibility

## Key Rules

- Semicolons required
- Single quotes preferred
- `@typescript-eslint/strict-boolean-expressions` - no implicit boolean coercion
- `@typescript-eslint/no-floating-promises` - requires handling promises
- `@typescript-eslint/no-non-null-assertion` - disallows `!` assertions

## Migration from v1.x

Version 2.0 switches to ESLint flat config. Update your config file:

**Before (v1.x - `.eslintrc.js`):**
```js
module.exports = {
    extends: ['@mlyngvo/eslint-config/preset/node'],
};
```

**After (v2.x - `eslint.config.js`):**
```js
const nodeConfig = require('@mlyngvo/eslint-config/node');

module.exports = [...nodeConfig];
```

## License

MIT
