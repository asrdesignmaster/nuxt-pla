<template>
  <div class="container">
    <div class="what_we_do | py-20 pt-40 text-center">
      <h2 >WHAT WE DO</h2>
      <p class="px-0 lg:px-40 text-xl text-gray-500">Gold Leafing work is an “Art” which now a days became a kind of
        revolution in “Interior Decoration” world. Gold Leafing work is a present and better option against paints. It
        gives royal looks to walls, ceilings, Domes & Furniture etc.</p>
    </div>
    <div class="leafing | md:py-20 ">
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
    <div class="out_work | py-20 text-center">
      <h2>Our Work</h2>
      <div class="work_gallery | grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-1.webp" alt="Leafing Work 1" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-2.webp" alt="Leafing Work 2" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-1.webp" alt="Leafing Work 3" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-2.webp" alt="Leafing Work 4" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-1.webp" alt="Leafing Work 1" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-2.webp" alt="Leafing Work 2" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-1.webp" alt="Leafing Work 3" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-2.webp" alt="Leafing Work 4" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" :format="webp" sizes="360px" />
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
