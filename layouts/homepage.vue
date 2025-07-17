<template>
  <div class="homepage-wrapper grid">
    <Header />
    <Hero />

    <main class="main_content">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import Hero from '~/components/pages/Hero.vue'
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
}

</style>
