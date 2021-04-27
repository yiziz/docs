module.exports = {
  base: '/',
  title: 'AEM Vite',
  description: 'AEM Vite is a plugin for AEM that enables transparent support for the Vite DevServer.',

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
  ],

  themeConfig: {
    logo: 'static/logo.png',

    repo: 'cshawaus/aem-vite',

    docsDir: 'docs',
    docsBranch: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: false,

    nav: [
      {
        text: 'Installation',
        link: '/guide/installation/',
      },
      {
        text: 'Front End',
        link: '/guide/front-end/',
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
      text: 'Backend (AEM)',
      children: [
        {
          text: 'Overview',
          link: '/guide/',
        },
        {
          text: 'Installation',
          link: '/guide/installation/',
        },
        {
          text: 'Configuration',
          link: '/guide/configuration/',
        },
      ],
    },
    {
      text: 'Front End',
      children: [
        { text: 'Preparing your project', link: '/guide/front-end/' },
        { text: 'Magic Resources', link: '/guide/front-end/magic-resources/' },
        { text: 'Dynamic Imports', link: '/guide/front-end/dynamic-imports/' },
      ],
    },
    {
      text: 'Extending AEM Vite',
      children: [
        { text: 'Why extend AEM Vite?', link: '/guide/extending/why/' },
        { text: 'Super-powered ClientLibs', link: '/guide/extending/clientlibs/' },
      ],
    },
    {
      text: 'Legacy Bundles',
      children: [
        { text: 'What are they?', link: '/guide/legacy-bundles/' },
        { text: 'ClientLibs support', link: '/guide/legacy-bundles/clientlibs/' },
      ],
    },
  ]
}
