<template>
  <div class="container">
    <div class="what_we_do | py-40 text-center">
      <h2 class="text-4xl font-bold pb-4 text-gray-700">WHAT WE DO</h2>
      <p class="px-0 lg:px-40 text-xl text-gray-500">Gold Leafing work is an “Art” which now a days became a kind of
        revolution in “Interior Decoration” world. Gold Leafing work is a present and better option against paints. It
        gives royal looks to walls, ceilings, Domes & Furniture etc.</p>
    </div>
  </div>
  <div class="container">
    <div class="leafing | md:py-40 ">
      <div class="bg-black flex h-[1200px] md:h-[400px] overflow-hidden flex-col md:flex-row">
        <div class="leafing_bg gold_silver_leafing | flex items-center justify-center text-center ">
          <div class="group w-full h-full flex items-center justify-center relative">
            <h3 class="text-3xl text-white font-bold uppercase md:hidden group-hover:block md:whitespace-nowrap">Gold &
              Silver Leafing</h3>
            <div class="absolute top-0 left-0 right-0 bottom-0 bg-[#0000004a]"></div>
          </div>
        </div>
        <div class="leafing_bg copper_leafing | flex items-center justify-center text-center">
          <div class="group w-full h-full flex items-center justify-center relative">
            <h3 class="text-3xl text-white font-bold uppercase md:hidden group-hover:block md:whitespace-nowrap">Gold &
              Silver Leafing</h3>
            <div class="absolute top-0 left-0 right-0 bottom-0 bg-[#0000004a]"></div>
          </div>
        </div>
        <div class="leafing_bg anqique_leafing | flex items-center justify-center text-center">
          <div class="group w-full h-full flex items-center justify-center relative">
            <h3 class="text-3xl text-white font-bold uppercase md:hidden group-hover:block md:whitespace-nowrap">Gold &
              Silver Leafing</h3>
            <div class="absolute top-0 left-0 right-0 bottom-0 bg-[#0000004a]"></div>
          </div>
        </div>
        <div class="leafing_bg real_gold_leafing | flex items-center justify-center text-center">
          <div class="group w-full h-full flex items-center justify-center relative">
            <h3 class="text-3xl text-white font-bold uppercase md:hidden group-hover:block md:whitespace-nowrap">Gold &
              Silver Leafing</h3>
            <div class="absolute top-0 left-0 right-0 bottom-0 bg-[#0000004a]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'homepage'
})
</script>
<style scoped>
.leafing {
  .gold_silver_leafing {
    background: url('/images/gold-silver-leafing.webp');
  }

  .copper_leafing {
    background: url('/images/copper-leafing.webp');
  }

  .anqique_leafing {
    background: url('/images/antique-leafing.webp');
  }

  .real_gold_leafing {
    background: url('/images/golden-leafing.webp');
  }

  .leafing_bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex: 1 1 0;
    transition: flex .4s, -webkit-box-flex .4s, -ms-flex .4s;
    cursor: pointer;

    &:hover {
      flex: 3 1 0;
      transition: flex .4s, -webkit-box-flex .4s, -ms-flex .4s;

    }

    h3 {
      z-index: 1;
    }
  }
}
</style>
