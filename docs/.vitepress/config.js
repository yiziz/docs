module.exports = {
  base: '/aem-vite/',
  title: 'AEM Vite',
  description: 'AEM Vite is a plugin for AEM that enables transparent support for the Vite DevServer.',

  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/aem-vite/favicon.ico',
      },
    ],
  ],

  themeConfig: {
    logo: '/assets/logo.png',

    repo: 'cshawaus/aem-vite',

    docsDir: 'docs',
    docsBranch: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: false,

    nav: [
      // { text: 'Home', link: '/' },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [
        {
          text: 'Getting Started',
          link: '/guide/',
        },
        {
          text: 'Configuration',
          link: '/guide/configuration/',
        },
      ]
    },
    {
      text: 'Extending AEM Vite',
      children: [
        { text: 'Why?', link: '/guide/extending/why/' },
        { text: 'ClientLibs', link: '/guide/extending/clientlibs/' },
      ]
    },
    {
      text: 'Front End',
      children: [
        { text: 'Preparing your project', link: '/guide/front-end/' },
      ]
    },
  ]
}
