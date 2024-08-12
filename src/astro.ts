import type { UnpluginDefineOptions } from './'

import { unplugin } from '.'

export default (options: UnpluginDefineOptions) => ({
  name: 'unplugin-define',
  hooks: {
    'astro:config:setup': async (astro: any) => {
      astro.config.vite.plugins ||= []
      astro.config.vite.plugins.push(unplugin.vite(options))
    },
  },
})
