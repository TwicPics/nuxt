# nuxt-twicpics

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> TwicPics integration with Nuxt

## Setup

1. Add `@twicpics/nuxt` dependency to your project

```bash
yarn add @twicpics/nuxt -D # or npm install @twicpics/nuxt --save-dev
```

2. Add `@twicpics/nuxt` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@twicpics/nuxt',

    // With options
    ['@twicpics/nuxt', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) TwicPics

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@twicpics/nuxt/latest.svg
[npm-version-href]: https://npmjs.com/package/@twicpics/nuxt

[npm-downloads-src]: https://img.shields.io/npm/dt/@twicpics/nuxt.svg
[npm-downloads-href]: https://npmjs.com/package/@twicpics/nuxt

[license-src]: https://img.shields.io/npm/l/@twicpics/nuxt.svg
[license-href]: https://npmjs.com/package/@twicpics/nuxt
