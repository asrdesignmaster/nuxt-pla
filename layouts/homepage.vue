<template>
  <div class="homepage-wrapper grid">
    <Header />
    <Hero />

    <main class="main_content">
      <NuxtPage />
    </main>
    <PreFooter />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import Hero from '~/components/pages/Hero.vue'
import PreFooter from '~/components/layout/PreFooter.vue'
</script>

<style scoped>

.header {
  background: linear-gradient(to bottom, #1e1e1f, #55555500);
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 0;
  height: 110px;
  z-index: 99;
}

</style>
