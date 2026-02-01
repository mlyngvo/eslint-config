# @mlyngvo/eslint-config

General ESLint configuration for TypeScript projects.

## Installation

```bash
npm install --save-dev @mlyngvo/eslint-config
```

## Usage

### Node.js / TypeScript projects

```js
// .eslintrc.js
module.exports = {
    extends: ['@mlyngvo/eslint-config/preset/node'],
};
```

### React / TypeScript projects

```js
// .eslintrc.js
module.exports = {
    extends: ['@mlyngvo/eslint-config/preset/react'],
};
```

## Features

- Built on [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- TypeScript support via `@typescript-eslint`
- Import sorting via `eslint-plugin-simple-import-sort`
- React preset includes `react-hooks` and `jsx-a11y` plugins

## Key Rules

- Semicolons required
- Single quotes preferred
- `@typescript-eslint/strict-boolean-expressions` - no implicit boolean coercion
- `@typescript-eslint/no-floating-promises` - requires handling promises
- `@typescript-eslint/no-non-null-assertion` - disallows `!` assertions

## License

MIT
