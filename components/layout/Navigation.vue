<template>
    <nav class="nav  md:flex hidden">
      <Nav />
      <Social />
    </nav>
</template>
<script setup>
import Nav from '~/components/layout/Nav.vue'
import Social from '~/components/layout/Social.vue'
</script>
<style scoped>
.nav {
  gap: 15px;
  padding: 10px;
}
</style>
