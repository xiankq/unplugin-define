import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import MagicString from 'magic-string'
import type { UnpluginDefineOptions } from './types'

export default createUnplugin<UnpluginDefineOptions>((options = {}) => {
  const { include, exclude } = options

  const jsFileFilter = createFilter(
    [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.svelte$/],
  )
  const filter = createFilter(
    include || '**/*', exclude,
  )

  const replacements = { ...options.replacements }
  const targets = Object.keys(replacements ?? {})

  targets.forEach((key) => {
    const val = replacements[key]
    if (!(val instanceof String))
      replacements[key] = JSON.stringify(val)
  })

  return {
    enforce: 'pre',
    name: 'unplugin-define',
    transformInclude(id) {
      if (targets.length === 0)
        return false
      return jsFileFilter(id) && filter(id)
    },

    transform(code, id) {
      const _code = code
      targets.forEach((target) => {
        if (code.includes(target)) {
          const value = replacements[target]
          code.replaceAll(target, value)
        }
      })

      if (_code === code)
        return

      return {
        code,
        map: new MagicString(code).generateMap({ source: id, includeContent: true, hires: true }),
      }
    },
  }
})
