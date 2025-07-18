// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/icon', '@nuxt/image'],
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/sites/nuxt-test', // Use relative base path for static hosting
    head: {
      htmlAttrs: {
        lang: 'en' // or 'hi', 'fr', etc.
      }
    }
  }
})