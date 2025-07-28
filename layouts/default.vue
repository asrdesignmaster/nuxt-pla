<template>
  <div>
    <div class="bg-gray-900">
      <Header />
    </div>
    <main class="page-content">
      <div class="main_content_wrapper">
        <NuxtPage />
      </div>
    </main>
    <PreFooter />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import PreFooter from '~/components/layout/PreFooter.vue'

const config = useAppConfig()

useHead({
  title: config.siteName,
  meta: [
    {
      name: 'description',
      content: 'Gold and Silver leafing provides artistic and more defined interior space. We give our dedication to provide best manual skill with durability and care of minute details.'
    },
    {
      name: 'keyword',
      content: 'Gold and Silver, Gold Leafing, Silver Leafing, '
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'msapplication-TileImage',
      content: '/images/leaf.svg'
    },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:type', content: 'artical' },
    { property: 'og:title', content: config.siteName },
    { property: 'og:site_name', content: config.siteName },
    { property: 'og:description', content: 'Gold and Silver leafing provides artistic and more defined interior space. We give our dedication to provide best manual skill with durability and care of minute details.' },
    { property: 'og:image', content: '/images/leaf.svg' },
    { property: 'og:url', content: config.siteUrl }
  ],
  link: [
    {
      rel: 'canonical',
      href: config.siteUrl,
    },
    {
      rel: 'shortlink',
      href: config.siteUrl,
    },
  ],
  htmlAttrs: {
    itemtype: "https://schema.org/WebPage",
    itemscope: true,
  },
})

</script>

<style scoped>
.header {
  background: var(--color-gray-900);
  height: 110px;
  color: white;
  display: flex;
  align-items: center;
}

.page-content {
  padding-top: 32px;
}
</style>
