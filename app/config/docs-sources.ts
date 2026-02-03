export interface DocSource {
  id: string
  label: string
  prefix: string
  collection: string
  to: string
  icon: string
  editBaseUrl?: string
  contentPathPrefix?: string
  indexPath?: string
}

export const docSources: DocSource[] = [
  {
    id: 'docs',
    label: 'Docs',
    prefix: '/docs',
    collection: 'docs',
    to: '/docs',
    icon: 'i-lucide-book-open',
    indexPath: '/docs/getting-started'
  },
  {
    id: 'sdk',
    label: 'SDK',
    prefix: '/sdk',
    collection: 'sdk_docs',
    to: '/sdk',
    icon: 'i-lucide-package',
    editBaseUrl: 'https://github.com/imoli-pl/efl-leasing-sdk/edit/master/docs',
    indexPath: '/sdk'
  }
]

export const prefixedDocSources = docSources

export function getDocSourceById(id: string): DocSource | undefined {
  return docSources.find(s => s.id === id)
}

export function getDocSourceByPrefix(prefix: string): DocSource | undefined {
  return docSources.find(s => s.prefix === prefix)
}

export function getDocSourceByPath(path: string): DocSource | undefined {
  return docSources.find(s => path.startsWith(s.prefix))
}

/** Unwraps root nav item when it matches the prefix (e.g. "Sdk" wrapping all sections). Nuxt Content uses `path`, not `_path`. */
export function unwrapRootNavigation<T extends { _path?: string; path?: string; children?: unknown[] }>(
  items: T[] | undefined,
  urlPrefix: string
): T[] | undefined {
  if (!items || items.length !== 1) return items
  const first = items[0]
  if (!first) return items
  const path = (first._path ?? first.path ?? '').replace(/\/$/, '')
  const prefixNorm = urlPrefix.replace(/\/$/, '')
  const matchesPrefix = path === prefixNorm || path === `${prefixNorm}/`
  if (matchesPrefix && first.children?.length) {
    return first.children as T[]
  }
  return items
}
