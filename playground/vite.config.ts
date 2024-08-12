import { defineConfig } from 'vite'
import InspectPlugin from 'vite-plugin-inspect'
import UnPluginDefine from 'unplugin-define/vite'

export default defineConfig({
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
