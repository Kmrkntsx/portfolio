require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

export default {

  env: {
    API_KEY
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kenta-kimura-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
  ],
  
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
  },
  generate: {
    routes() {
      const blog = axios
        .get("https://kentakimuraportfolio.microcms.io/api/v1/blog", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(blog => {
            return "/article/" + blog.id;
          });
        });
      return Promise.all([blog]).then(values => {
        return values.join().split(",");
      });
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
