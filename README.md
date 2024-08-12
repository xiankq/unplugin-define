# unplugin-define [![NPM version](https://img.shields.io/npm/v/unplugin-define?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-define)

Replace variables in code with other values or expressions. Supports Vite, Rollup, Webpack, Rspack and more.

##### NOTE

The original intention of this plugin is to provide compatibility for lower-level plugins. You should give priority to using the `define` that comes with the build tool.
<br>
such as:
<br>
[`Vite define`](https://vitejs.dev/config/shared-options.html#define)

## Install

```bash
npm i unplugin-define
```

See example: [`example/`](./example/)

## Usage

```ts
UnpluginDefine([
  {
  // include: [],
  // exclude: [],
    replacements: {
      'process.env.NODE_ENV': '\'development\'',
      'API_PREFIX': '/api',
      'TRUE': true,
      'TRUE_STRING': 'true',
      'UNDEFINED': undefined,
      'UNDEFINED_STRING': 'undefined',
    }
  },
// ...
])
```

```ts
// input
if (process.env.NODE_ENV === 'development')
  console.log('run in development mode')

fetch('API_PREFIX/test')

console.log(TRUE === TRUE_STRING)
console.log(UNDEFINED === UNDEFINED_STRING)
```

```ts
// output
if ('development' === 'development')
  console.log('run in development mode')

fetch('/api/test')

console.log(true === true)
console.log(undefined === undefined)
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginDefine from 'unplugin-define/vite'

export default defineConfig({
  plugins: [
    UnpluginDefine({
      // ...
    }),
  ],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginDefine from 'unplugin-define/rollup'

export default {
  plugins: [
    UnpluginDefine({
      // ...
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
const UnpluginDefine = require('unplugin-define/webpack')

module.exports = {
  plugins: [
    UnpluginDefine({
      // ...
    }),
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-define/nuxt', {
      // ...
    }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
const UnpluginDefine = require('unplugin-define/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      UnpluginDefine({
        // ...
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginDefine from 'unplugin-define/esbuild'

build({
  plugins: [
    UnpluginDefine({
      // ...
    }),
  ],
})
```

<br></details>

<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js
const UnpluginDefine = require('unplugin-define/rspack')

module.exports = defineConfig({
  plugins: [
    UnpluginDefine({
      // ...
    }),
  ]
})
```

<br></details>
