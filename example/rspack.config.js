import { defineConfig } from '@rspack/cli'
import Plugin from './../dist/rspack.js'
import options from './options.js'

export default defineConfig({
  entry: './src/main.ts',
  output: {
    path: 'dist/rspark/',
  },
  builtins: {
    html: [{
      template: 'entry/rspack.html',
    }],
  },
  devServer: {
    port: 8300,
  },
  plugins: [
    Plugin(options),
  ],
})
