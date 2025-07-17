<template>
  <div class="container">
    <div class="what_we_do | py-20 pt-40 text-center">
      <h2>WHAT WE DO</h2>
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
  </div>
  <div class="out_work | bg-gray-100">
    <div class="container py-20 text-center ">
      <h2>Our Work</h2>
      <div class="work_gallery | grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-1.webp" alt="Leafing Work 1"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-2.webp" alt="Leafing Work 2"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-1.webp" alt="Leafing Work 3"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-2.webp" alt="Leafing Work 4"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-1.webp" alt="Leafing Work 1"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-2.webp" alt="Leafing Work 2"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-1.webp" alt="Leafing Work 3"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            :format="webp" sizes="360px" />
        </div>
        <div class="overflow-hidden group">
          <NuxtImg src="/images/gallery/bunglow-2.webp" alt="Leafing Work 4"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            :format="webp" sizes="360px" />
        </div>
      </div>
      <div class="mt-10">
        <Button link="/gallery">View Gallery</Button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="out_specialization | py-20 text-center">
      <h2>Our Specialization</h2>
      <div class="mt-12  p-0 md:p-8 ">
        <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 text-left">
          <div class="flex items-start ">
            <div class="bg-primary p-2 mr-4">
              <img src="/images/icons/masjid.svg" alt="masjid" class="max-w-[52px]" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Pure Gold Leafing for Masjid</h4>
              <p class="text-gray-600">In Masjid gold leafing is done on Mehrab, Mimber, gumbad and ayat.
                Mostly it's done in original gold but rarely in artificial.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary p-2 mr-4">
              <img src="/images/icons/mandir.svg" alt="mandir" class="max-w-[52px]" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Shrines & Temples</h4>
              <p class="text-gray-600">In a residential interior space leafing gives aesthetic looks and it is usually
                done to enhance the decoration of the space .Gold , Silver, Copper and Champagne leafing is done on
                ceiling,walls, furniture, centre piece, frames etc.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary p-2 mr-4">
              <img src="/images/icons/flats.svg" alt="flats" class="max-w-[52px]" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Decoration for Flats</h4>
              <p class="text-gray-600">In a residential interior space leafing gives aesthetic looks and it is usually
                done to enhance the decoration of the space. Gold, Silver, Coper & champagne leafing is done on ceiling,
                walls, furniture, center piece & frames etc.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary p-2 mr-4">
              <img src="/images/icons/leaf.svg" alt="leaf" class="max-w-[52px]" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Customized Leafing</h4>
              <p class="text-gray-600">In gold and silver leafing, customization is done as per the client's
                requirements and according to the theme used in designing .We try our level best to give the outcome as
                per the client's demand.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary p-2 mr-4">
              <img src="/images/icons/showroom.svg" alt="showroom" class="max-w-[52px]" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Showrooms</h4>
              <p class="text-gray-600">In showrooms Gold leafing is done on counter, display, cornice, ceiling, walls,
                furniture and frames to give a modern and more refined look .</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary p-2 mr-4">
              <img src="/images/icons/furniture.svg" alt="furniture" class="max-w-[52px]" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Furnitures & Show Pieces</h4>
              <p class="text-gray-600">Gold and silver leafing is widely done on furniture like bed , dining table,
                center tables, sofas, chairs, TV units etc .Gold Leafing is also done on the center piece and show piece
                to give attractive look.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-primary p-2 mr-4">
              <img src="/images/icons/bunglow.svg" alt="bunglow" class="max-w-[52px]" />
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-1">Bungalows</h4>
              <p class="text-gray-600">Leafing is done on ceiling, walls , furniture, pooja room ,Bar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="showpieces | py-20 relative">
    <div class="curtain "></div>
    <div class="container">
      <div class="flex flex-col  md:flex-row relative z-10">
        <div class="lg:flex-1 md:flex-auto flex flex-col  justify-center p-8">
          <h3 class="text-white font-bold text-4xl">Furniture and Show pieces specialized</h3>
          <p class="text-white text-2xl py-5">Gold and Silver leafing work</p>
          <p class="text-white text-xl py-5">In Holy places, like Mandir, Masjid, Grudwara and Holy Shrines. Only real
            Gold and precious materials are being used from centuries.</p>
          <p class="text-white text-xl py-5">In olden times only 24kt real Gold Leaves were used for interior decoration
            inspite of very heavy budget. But synthetic leaves from China, Turkey and Italy came in market which wrote a
            new era in the world of interior lamination and paintings.</p>
        </div>
        <div class="lg:flex-1 md:flex-auto flex items-center justify-center">
          <NuxtImg src="/images/pexels-max.jpg" alt="Religious Showpieces"
            class="object-cover transform group-hover:scale-110 transition-transform duration-500 shadow-lg"
            :format="webp" sizes="360px" />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="testimonial | py-20 text-center">
      <TestimonialSlider />
    </div>
  </div>

</template>

<script setup>
import Button from '~/components/common/Button.vue'
import TestimonialSlider from '~/components/common/TestimonialSlider.vue'

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
    background-attachment: fixed;
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

.showpieces {
  background: url('/images/relegious.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
