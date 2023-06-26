import { defineConfig } from 'vite'
import InspectPlugin from 'vite-plugin-inspect'
import Plugin from '../dist/vite'

// @ts-expect-error types
import options from './options.js'

export default defineConfig({
  build: {
    sourcemap: true,
    minify: false,
    rollupOptions: {
      input: {
        app: './entry/vite.html',
      },
    },
    outDir: 'dist/vite',
  },
  server: {
    port: 8100,
  },
  plugins: [
    InspectPlugin(),
    Plugin(options),
  ],
})
