import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit'
import vite from './vite'
import webpack from './webpack'
import type { UnpluginDefineOptions } from '.'
import '@nuxt/schema'

export interface ModuleOptions extends UnpluginDefineOptions {

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-unplugin-define',
    configKey: 'unpluginCopy',
  },
  defaults: {
    targets: [],
  },
  setup(options, _nuxt) {
    addVitePlugin(() => vite(options))
    addWebpackPlugin(() => webpack(options))
  },
})
