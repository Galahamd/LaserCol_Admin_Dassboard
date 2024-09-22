// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/reset.css', // Ruta al archivo reset.css
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
