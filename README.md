# unplugin-define

[![NPM version](https://img.shields.io/npm/v/unplugin-define?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-define)

## Install

```bash
npm i unplugin-define
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import plugin from 'unplugin-define/vite'

export default defineConfig({
  plugins: [
    plugin({
      src: './node_modules/vue/dist/*',
      dest: 'vue'
    }),
  ],
})
```

Example: [`example/`](./example/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import plugin from 'unplugin-define/rollup'

export default {
  plugins: [
    plugin({
      src: './node_modules/vue/dist/*',
      dest: 'vue'
    }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    plugin({
      src: './node_modules/vue/dist/*',
      dest: 'vue'
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
      src: './node_modules/vue/dist/*',
      dest: 'vue'
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
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-define/webpack')(
        {
          src: './node_modules/vue/dist/*',
          dest: 'vue'
        },
      ),
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
import plugin from 'unplugin-define/esbuild'

build({
  plugins: [
    plugin({
      src: './node_modules/vue/dist/*',
      dest: 'vue'
    }),
  ],
})
```

<br></details>
