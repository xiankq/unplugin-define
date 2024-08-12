import { defineConfig } from 'vite'
import InspectPlugin from 'vite-plugin-inspect'
import UnPluginDefine from 'unplugin-define/vite'

// @ts-expect-error types

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
    UnPluginDefine({
      // include: [],
      // exclude: [],
      replacements: {
        __CUSTOM_STRING: JSON.stringify('I am custom_string'),
      },
    }),
  ],
})
