# eslint-config

General ESLint configuration for TypeScript.

### Installation

```bash
echo -e "@mlyngvo:registry=https://npm.pkg.github.com" >> .npmrc
npm i -D @mlyngvo/eslint-config
```

Extends your `eslint` config file with the proper library.

#### React
```js
module.exports = {
    extends: [
        '@mlyngvo/eslint-config/react'
    ],
}
```


