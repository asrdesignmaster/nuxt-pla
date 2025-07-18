<template>
    <nav class="nav  md:flex hidden">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/gallery">Gallery</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="tel:1234567890">
        <Icon name="uil:phone" class="text-white text-2xl border-2 rounded " />
      </NuxtLink>
      <NuxtLink to="mailto:test@test.com">
        <Icon name="uil:envelope" class="text-white text-2xl border-2 rounded " />
      </NuxtLink>
      <NuxtLink to="https://wa.me/1234567890">
        <Icon name="uil:whatsapp" class="text-white text-2xl" />
      </NuxtLink>
      <NuxtLink to="https://instagram.com/para.diseleafingart?igshid=ZDdkNTZiNTM=" target="_blank">
        <Icon name="uil:instagram" class="text-white text-2xl" />
      </NuxtLink>
    </nav>
</template>
<script setup>
</script>
<style scoped>
.nav {
  gap: 15px;
  padding: 10px;
}
</style>
