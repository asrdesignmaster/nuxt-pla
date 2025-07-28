<template>
  <footer class="footer">
    <div class="container">
      <div class="flex flex-col lg:flex-row justify-center lg:justify-between gap-3">

        <p>&copy; 2025 {{ config.siteName }}. All rights reserved.</p>
        <p>Design & Developed by <a href="https://3dotsmedia.in" class="underline">3dotsmedia.in</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useAppConfig()
</script>
<style scoped>
.footer {
  padding: 20px;
  background-color: #000;
  color: white;
  text-align: center;
}
</style>
