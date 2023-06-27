import type { FilterPattern } from '@rollup/pluginutils'

export interface UnpluginDefineOptions {
  include?: FilterPattern
  exclude?: FilterPattern
  replacements?: Record<string, any>
}
