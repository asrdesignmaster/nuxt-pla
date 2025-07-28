<template>
    <section class="hero brightness-[.9]">
        <NuxtImg 
            src="/images/leaf-white.svg" 
            alt="Leaf" 
            width="150" 
            height="86" 
            class="mx-auto mb-8" loading="lazy"
            />
      <h1 class="text-white text-3xl md:text-4xl lg:text-6xl leading-12 md:leading-16 lg:leading-24 | font-bold text-shadow-gray-800 text-shadow-lg/30">Luxury Leafing in Gold, Silver, Copper,
Champagne & <br/>Antique Styles Handcrafted Elegance</h1>
      <p class="text-lg md:text-2xl lg:text-3xl my-5 ">We operate across India, with a special focus on Mumbai and Hyderabad, specializing in gold and silver leafing.</p>
    <Button link="/about-us">Read more<span class="sr-only">About Paradise Leafing Art</span></Button>

    </section>
</template>

<script setup>
import Button from '~/components/common/LinkButton.vue'
</script>
<style scoped>

.hero {
  background: url('/images/main_background.webp') no-repeat center center;
  background-attachment: fixed;
  color: white;
  padding: 60px 20px;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
</style>