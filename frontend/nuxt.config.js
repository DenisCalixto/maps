const webpack = require('webpack')

module.exports = {
  mode: 'universal',
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '%s | First Peoples\' Cultural Council',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** history mode
   */
  //   router: {
  //     mode: 'hash'
  //   },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/sass/global.sass',
    '@/node_modules/mapbox-gl/dist/mapbox-gl.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: true
  },

  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
