// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  appConfig: {
    siteName: 'Paradise Leafing Art',
    siteUrl: 'https://pardiseleafingart.com/',
  },
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
    baseURL: '/', // Use relative base path for static hosting //sites/nuxt-test
    head: {
      htmlAttrs: {
        lang: 'en' // or 'hi', 'fr', etc.
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'images/leaf.svg' // Path to your favicon
        }
      ]
    }
  }
})