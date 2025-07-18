<template>
  <div>
    <div class="bg-gray-900">
      <Header />
    </div>
    <main class="page-content">
      <div class="container">
        <div class="main_content_wrapper">
          <NuxtPage />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<style scoped>
.header {
  background: var(--color-gray-900);
  height: 110px;
    padding-block: 10px;
    color: white;
}
.page-content {
  padding-top: 32px;
}
</style>
