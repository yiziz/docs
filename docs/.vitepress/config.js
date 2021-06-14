const title = 'AEM Vite'
const description = 'AEM Vite is a plugin for AEM that enables transparent support for the Vite DevServer.'

module.exports = {
  base: '/',
  title,
  description,

  head: [
    ['link', {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/static/apple-touch-icon.png',
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/static/favicon-32x32.png',
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/static/favicon-16x16.png',
    }],
    ['link', {
      rel: 'manifest',
      href: '/static/site.webmanifest',
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/static/safari-pinned-tab.svg',
      color: '#c34c5c',
    }],
    ['link', {
      rel: 'shortcut icon',
      href: '/static/favicon.ico',
    }],
    ['meta', {
      name: 'apple-mobile-web-app-title',
      content: 'AEM Vite',
    }],
    ['meta', {
      name: 'application-name',
      content: 'AEM Vite',
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#c34c5c',
    }],
    ['meta', {
      name: 'theme-color',
      content: '#ffffff',
    }],
    ['meta', {
      property: 'og:title',
      content: title,
    }],
    ['meta', {
      property: 'og:description',
      content: description,
    }],
    ['meta', {
      property: 'og:image',
      content: '/static/social/og-primary.jpg',
    }],
    ['meta', {
      name: 'twitter:title',
      content: title,
    }],
    ['meta', {
      property: 'twitter:description',
      content: description,
    }],
    ['meta', {
      property: 'twitter:site',
      content: '@cshawaus',
    }],
  ],

  themeConfig: {
    logo: 'static/logo.png',

    repo: 'aem-vite/aem-vite',

    docsDir: 'docs',
    docsBranch: 'main',

    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: false,

    algolia: {
      apiKey: '0479a3a9031b5947143a70dc4969da0d',
      indexName: 'aemvite',
    },

    nav: [
      {
        text: 'Installation',
        link: '/guide/backend/installation/',
      },
      {
        text: 'Front End',
        link: '/guide/front-end/',
      },
      {
        text: 'Legacy Bundles',
        link: '/guide/legacy-bundles/',
      },
      {
        text: 'FAQs',
        link: '/guide/faqs/',
      },
      {
        text: 'Changelog',
        link: 'https://github.com/aem-vite/aem-vite/blob/main/CHANGELOG.md',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    },
  },
}

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [
        {
          text: 'Overview',
          link: '/guide/',
        },
      ],
    },
    {
      text: 'Backend (AEM)',
      children: [
        {
          text: 'Installation',
          link: '/guide/backend/installation/',
        },
        {
          text: 'Configuration',
          link: '/guide/backend/configuration/',
        },
      ],
    },
    {
      text: 'Front End',
      children: [
        { text: 'Preparing your project', link: '/guide/front-end/' },
        { text: 'Structure', link: '/guide/front-end/structure/' },
        { text: 'Vite Configuration', link: '/guide/front-end/vite/' },
        { text: 'Module imports', link: '/guide/front-end/module-imports/' },
        { text: 'Dynamic imports', link: '/guide/front-end/dynamic-imports/' },
      ],
    },
    // {
    //   text: 'Extending AEM Vite',
    //   children: [
    //     { text: 'Why extend AEM Vite?', link: '/guide/extending/why/' },
    //     { text: 'Super-powered ClientLibs', link: '/guide/extending/clientlibs/' },
    //   ],
    // },
    {
      text: 'Legacy Bundles',
      children: [
        { text: 'What are they?', link: '/guide/legacy-bundles/' },
        { text: 'ClientLibs support', link: '/guide/legacy-bundles/clientlibs/' },
      ],
    },
    {
      text: 'FAQs',
      link: '/guide/faqs/',
    },
    {
      text: 'Migrate to v2.x',
      link: '/guide/migrate-to-v2/',
    },
  ]
}
