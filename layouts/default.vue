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
