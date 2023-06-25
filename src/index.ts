import { createUnplugin } from 'unplugin'

import MagicString from 'magic-string'
import type { UnpluginDefineOptions } from './types'

type Edit = [number, number]
interface AstNode { start: number; end: number }
function markEdited(node: AstNode, edits: Edit[]): number | false {
  for (const [start, end] of edits) {
    if ((start <= node.start && node.start < end) || (start < node.end && node.end <= end))
      return false // Already edited
  }

  // Not edited
  return edits.push([node.start, node.end])
}
export default createUnplugin<UnpluginDefineOptions>((options, meta) => {
  return [
    {
      transform(code, id) {
        const targets = Object.keys(options)
        if (targets.length === 0)
          return

        let magicString: MagicString | undefined
        let replaced = false

        targets.forEach((target) => {
          let match: RegExpExecArray | null
          const pattern = new RegExp(target)
          // eslint-disable-next-line no-cond-assign
          while (match = pattern.exec(code)) {
            replaced = true
            magicString ??= new MagicString(code)
            const value = options[target]
            magicString.replaceAll(target, value)
            code.replace(pattern, value)
            magicString.update(
              match.index,
              match.index + match[0].length,
              value,
            )
          }
        })

        if (replaced)
          return

        const edits: Edit[] = []

        if (edits.length === 0)
          return null

        return {
          code: magicString!.toString(),
          map: magicString!.generateMap({ source: code, includeContent: true, hires: true }),
        }
      },
    },

  ]
})
