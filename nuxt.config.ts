// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },

  app: {
    head: {
      title: 'Ascend Alone',
      meta: [
        { name: 'description', content: 'Rise above. Premium athletic gear for those who go it alone.' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
