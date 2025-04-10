export default defineAppConfig({
  ui: {
    colors: {
      primary: 'rx',
      neutral: 'zinc'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)'
      }
    }
  },
  seo: {
    siteName: 'RX Scripts - Documentation'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-heroicons-building-storefront-solid',
      'to': 'https://store.rxscripts.xyz/',
      'target': '_blank',
      'aria-label': 'Webstore'
    },{
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/rxscripts',
      'target': '_blank',
      'aria-label': 'Discord'
    }, {
      'icon': 'i-simple-icons-youtube',
      'to': 'https://youtube.com/@rxscriptsxyz',
      'target': '_blank',
      'aria-label': 'Youtube'
    }]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-heroicons-building-storefront-solid',
      'to': 'https://store.rxscripts.xyz/',
      'target': '_blank',
      'aria-label': 'Webstore'
    },{
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/rxscripts',
      'target': '_blank',
      'aria-label': 'Discord'
    }, {
      'icon': 'i-simple-icons-youtube',
      'to': 'https://youtube.com/@rxscriptsxyz',
      'target': '_blank',
      'aria-label': 'Youtube'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Info',
      // edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'heroicons-building-storefront',
        label: 'Visit our store',
        to: 'https://store.rxscripts.xyz/',
        target: '_blank'
      }]
    }
  }
})
