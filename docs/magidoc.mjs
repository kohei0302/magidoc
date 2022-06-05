import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const pages = (await import(`./pages.mjs?id=${Math.random()}`)).default

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * @type {import("@magidoc/cli").MagidocConfiguration}
 */
const config = {
  introspection: {
    type: 'file',
    location: path.join(__dirname, 'empty-schema.json'),
  },
  website: {
    template: path.join(__dirname, '../packages/starters/carbon-multi-page'),
    output: path.join(__dirname, 'build'),
    staticAssets: path.join(__dirname, 'assets'),
    options: {
      appTitle: 'Magidoc',
      pages: pages,
      siteRoot: '/magidoc',
      siteMeta: {
        description:
          'Fast and highly customizable GraphQL documentation generator',
        'og:description':
          'Fast and highly customizable GraphQL documentation generator',
        keywords: 'Svelte,Svelte-Kit,PrismJS,GraphQL,Documentation,Static',
        author: 'Magidoc-org',
        'og:title': 'Magidoc',
        'og:type': 'article',
        'og:image':
          'https://raw.githubusercontent.com/magidoc-org/magidoc/main/logo/logo_full.png',
      },
    },
  },
  dev: {
    watch: [
      path.join(__dirname, './pages'),
      path.join(__dirname, './pages.mjs'),
    ],
  },
}

export default config
