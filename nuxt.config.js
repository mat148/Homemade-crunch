export default {
  mode: "universal",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'homemade-crunch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: "preconnect", href: "https://app.snipcart.com" },
      { rel: "preconnect", href: "https://cdn.snipcart.com" },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.0.23/default/snipcart.css', defer: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans&display=swap' }
    ],
    script: [
      { src: "https://cdn.snipcart.com/themes/v3.0/default/snipcart.js", defer: true }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@plugins/vuetify'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'vue-scrollto/nuxt',
    'cookie-universal-nuxt'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  server: {
    port: 3333,
    host: '0.0.0.0'
  }
}
