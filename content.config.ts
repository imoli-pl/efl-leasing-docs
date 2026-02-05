import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),

    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md'],
        prefix: '/docs'
      }
    }),

    sdk_docs: defineCollection({
      type: 'page',
      source: {
        repository: {
          url: 'https://github.com/imoli-pl/efl-leasing-sdk',
          branch: 'master',
          auth: {
            username: 'x-access-token',
            token: process.env.GITHUB_TOKEN,
          },
        },
        include: 'docs/**',
        prefix: '/sdk',
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    }),

    // prestashop_docs: defineCollection({
    //   type: 'page',
    //   source: {
    //     repository: {
    //       url: 'https://github.com/imoli-pl/efl-leasing-prestashop-module',
    //       branch: 'master',
    //       auth: {
    //         username: 'x-access-token',
    //         token: process.env.GITHUB_TOKEN,
    //       },
    //     },
    //     include: 'docs/**',
    //     prefix: '/prestashop-module',
    //   }
    // }),

    // wordpress_docs: defineCollection({
    //   type: 'page',
    //   source: {
    //     repository: {
    //       url: 'https://github.com/imoli-pl/efl-leasing-wordpress-plugin',
    //       branch: 'master',
    //       auth: {
    //         username: 'x-access-token',
    //         token: process.env.GITHUB_TOKEN,
    //       },
    //     },
    //     include: 'docs/**',
    //     prefix: '/wordpress-plugin',
    //   }
    // }),

    // shopper_docs: defineCollection({
    //   type: 'page',
    //   source: {
    //     repository: {
    //       url: 'https://github.com/imoli-pl/efl-leasing-shoper-app',
    //       branch: 'master',
    //       auth: {
    //         username: 'x-access-token',
    //         token: process.env.GITHUB_TOKEN,
    //       },
    //     },
    //     include: 'docs/**',
    //     prefix: '/shoper-app',
    //   }
    // }),
  }
})
