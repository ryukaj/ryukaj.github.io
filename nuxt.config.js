const webpack = require('webpack')

// path
const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const baseDir = process.env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

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
    // Doc: https://www.npmjs.com/package/vue-float-label
    { src: '~/plugins/vue/vue-floating-label', ssr: false },
    { src: '~/plugins/vue/aos', ssr: false },
    '~plugins/a4/autoloader',
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
    '@nuxtjs/style-resources',
    // Doc: https://auth.nuxtjs.org/#getting-started
    '@nuxtjs/auth'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    browserBaseURL: basePath,
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
  },
  auth: {
    redirect: {
      // 要認証時画面に非ログインユーザがアクセスした場合
      login: '/',
      // ログアウト時のリダイレクト先
      logout: '/',
      // Oauth認証等で必要となる コールバックルート
      callback: false,
      // ログイン後のリダイレクト先
      home: '/',
    },
    strategies: {
      // 通常ログイン
      local: {
        endpoints: {
          login: { url: 'stab/login', method: 'post', propertyName: 'token' },
          user: { url: 'stab/user', method: 'get', propertyName: false },
          logout: false
        },
      }
    }
  }
}
