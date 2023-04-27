// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: "",
      baseUrl2: ""
    }
  },
  app: {
    buildAssetsDir: '_nuxt',
    head: {
      title: "롯데 데이터마켓플레이스",
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
      link: [{ rel: 'icon', type: 'image/png', href: "/_nuxt/assets/images/favicon.png" }]
    },
  },
  css: [
    // "@progress/kendo-theme-default/dist/all.css",
    "~/assets/styles/app.scss",
    "~/assets/styles/all.css",
    // "vuetify/lib/styles/main.sass"
  ],
  ssr: false,
  pages: true,
  components: true,
  modules: [
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify'
  ],

  nitro: {
    //dev proxy ssr작동안함
    // devProxy: {
      // "/api": {
      //   target:"10.131.158.134:9998/api",
      //   changeOrigin: true,
      //   prependPath: true,
      // }
    // },
    // devProxy: {
    //   "/api": {
    //     target: useRuntimeConfig(),
    //     changeOrigin: true,
    //     prependPath: true,
    //   }
    // },
  },
  vuetify: {
    vuetifyOptions: {
    },
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      autoImport: true,
    }
  },
  vite: {
    define: {
      // 'process.env.DEBUG': false,
    }
 },
});
