const webpack = require('webpack')

module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#0A428C' },
  css: [
    '~/assets/css/bulma/core.scss'
  ],
  plugins: [
    '~/plugins/vue/vue-scrollto',
    '~/plugins/vue/vue-mq',
    // '~/plugins/vue/vee-validate' 
    // '~/plugins/vue/vue2-perfect-scrollbar',
    // '~/plugins/vue/vue2-rellax',
    { src: '~/plugins/vue/aos', ssr: false },
    { src: '~plugins/a4/autoloader' },
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/style-resources'
  ],
  axios: {
  },
  styleResources: {
    sass: [
      '~/assets/css/bulma/utilities.scss',
    ]
  },
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    postcss : {
      plugin : {
        'postcss-preset-env': {
          autoprefixer: { grid: true }
        },
      },
    },
    extend (config, ctx) {
    }
  }
}
