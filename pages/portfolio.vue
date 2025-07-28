<template>
      <div class="gallery-page | py-16">
            <!-- Hero Section -->
            <div class="container">
                  <h2>Gallery</h2>
            </div>

            <!-- Categories -->
            <section class="gallery-categories">
                  <div class="container">
                        <div class="categories-grid">
                              <button v-for="cat in categories" :key="cat.name"
                                    :class="['category-btn', { active: selectedCategory === cat.name }]"
                                    @click="selectedCategory = cat.name">
                                    <span>{{ cat.name }}</span>
                              </button>
                        </div>
                  </div>
            </section>

            <!-- Images -->
            <section v-if="selectedCategory" class="gallery-images">
                  <div class="container">
                        <div class="images-grid">
                              <div v-for="img in images[selectedCategory]" :key="img.src" class="gallery-image-wrapper"
                                    @click="openLightbox(img)">
                                    <NuxtImg :src="img.src" :alt="img.alt" class="gallery-image" densities="x1"
                                          sizes="sm:300px" format="webp" loading="lazy" />
                              </div>
                        </div>
                        <!-- <button class="back-btn" @click="selectedCategory = null">
                              Back to Categories
                        </button> -->
                  </div>
            </section>

            <!-- Lightbox Modal -->
            <div v-if="lightboxImage" class="lightbox" @click.self="closeLightbox">
                  <!-- ✖ Close Button -->
                  <button class="close-btn" @click.stop="closeLightbox">×</button>

                  <button class="arrow left" @click.stop="prevImage" :disabled="lightboxIndex === 0">‹</button>

                  <NuxtImg :src="lightboxImage.src" :alt="lightboxImage.alt" class="lightbox-img" format="webp"
                        densities="x1" sizes="sm:300px lg:1000px" />
                  <p class="lightbox-caption">{{ lightboxImage.alt }}</p>

                  <button class="arrow right" @click.stop="nextImage"
                        :disabled="lightboxIndex === images[selectedCategory].length - 1">›</button>
            </div>


      </div>
      <CallNow />
</template>

<script setup>
import CallNow from '~/components/pages/CallNow.vue'
import { ref, computed } from 'vue'

const config = useAppConfig()

useHead({
    title: 'Portfolio - '+ config.siteName,
    meta: [
        {
            name: 'description',
            content: 'Gallery All Bungalow Furniture Mandir Showpiece Showroom Masjid Frame Door & Ceiling Bungalow Bungalow Bungalow Bungalow Bungalow Bungalow Bungalow Bed Bed Bed Bed Bed Chiar Table Dining Table Wall Miror Sofa Sofa Sofa Side Table Side Table Side Table Side Table Side Table Side Table Dining Table Dining Table Chair Chair Chair Chair Furniture Mandir […]'
        },
    ]
})


const selectedCategory = ref('Bunglow')
const lightboxIndex = ref(null)

const lightboxImage = computed(() => {
      if (lightboxIndex.value === null) return null
      return images[selectedCategory.value][lightboxIndex.value]
})

const categories = [
      { name: 'Bunglow' },
      { name: 'Furniture' },
      { name: 'Mandir' },
      { name: 'Showpiece' },
      { name: 'Showroom' },
      { name: 'Masjid' },
      { name: 'Frame Door & Ceiling' },
]

const images = {
      Bunglow: [
            { src: '/images/gallery/bunglow-1.webp', alt: 'Bunglow' },
            { src: '/images/gallery/bunglow-2.webp', alt: 'Bunglow' },
            { src: '/images/gallery/bunglow-3.webp', alt: 'Bunglow' },
            { src: '/images/gallery/bunglow-4.webp', alt: 'Bunglow' },
            { src: '/images/gallery/bunglow-5.webp', alt: 'Bunglow' },
            { src: '/images/gallery/bunglow-6.webp', alt: 'Bunglow' },
            { src: '/images/gallery/bunglow-7.webp', alt: 'Bunglow' },
      ],
      Furniture: [
            { src: '/images/gallery/furniture-1.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-2.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-3.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-4.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-5.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-6.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-7.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-8.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-9.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-10.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-11.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-12.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-12.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-13.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-14.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-15.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-16.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-17.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-18.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-19.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-20.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-21.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-22.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-23.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-24.webp', alt: 'Furniture' },
            { src: '/images/gallery/furniture-25.webp', alt: 'Furniture' },
      ],
      Mandir: [
            { src: '/images/gallery/mandir-1.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-2.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-3.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-4.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-5.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-6.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-7.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-8.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-9.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-10.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-11.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-12.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-13.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-14.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-15.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-16.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-17.webp', alt: 'Mandir' },
            { src: '/images/gallery/mandir-18.webp', alt: 'Mandir' },
      ],
      Showpiece: [
            { src: '/images/gallery/showpiece-1.webp', alt: 'Showpiece' },
            { src: '/images/gallery/showpiece-2.webp', alt: 'Showpiece' },
            { src: '/images/gallery/showpiece-3.webp', alt: 'Showpiece' },
            { src: '/images/gallery/showpiece-4.webp', alt: 'Showpiece' },
            { src: '/images/gallery/showpiece-5.webp', alt: 'Showpiece' },
            { src: '/images/gallery/showpiece-6.webp', alt: 'Showpiece' },
            { src: '/images/gallery/showpiece-7.webp', alt: 'Showpiece' },
            { src: '/images/gallery/showpiece-8.webp', alt: 'Showpiece' },
      ],
      Showroom: [
            { src: '/images/gallery/showroom-1.webp', alt: 'Showroom' },
            { src: '/images/gallery/showroom-2.webp', alt: 'Showroom' },
            { src: '/images/gallery/showroom-3.webp', alt: 'Showroom' },
            { src: '/images/gallery/showroom-4.webp', alt: 'Showroom' },
            { src: '/images/gallery/showroom-5.webp', alt: 'Showroom' },
            { src: '/images/gallery/showroom-6.webp', alt: 'Showroom' },
            { src: '/images/gallery/showroom-7.webp', alt: 'Showroom' },
            { src: '/images/gallery/showroom-8.webp', alt: 'Showroom' },
      ],
      Masjid: [
            { src: '/images/gallery/masjid-1.webp', alt: 'Masjid' },
            { src: '/images/gallery/masjid-2.webp', alt: 'Masjid' },
            { src: '/images/gallery/masjid-3.webp', alt: 'Masjid' },
            { src: '/images/gallery/masjid-4.webp', alt: 'Masjid' },
            { src: '/images/gallery/masjid-5.webp', alt: 'Masjid' },
            { src: '/images/gallery/masjid-6.webp', alt: 'Masjid' },
            { src: '/images/gallery/masjid-7.webp', alt: 'Masjid' },
            { src: '/images/gallery/masjid-8.webp', alt: 'Masjid' },
      ],
      'Frame Door & Ceiling': [
            // Frames
            { src: '/images/gallery/frame-1.webp', alt: 'Frame' },
            { src: '/images/gallery/frame-2.webp', alt: 'Frame' },
            { src: '/images/gallery/frame-3.webp', alt: 'Frame' },
            { src: '/images/gallery/frame-4.webp', alt: 'Frame' },
            // Doors
            { src: '/images/gallery/door-1.webp', alt: 'Door' },
            { src: '/images/gallery/door-2.webp', alt: 'Door' },
            { src: '/images/gallery/door-3.webp', alt: 'Door' },
            { src: '/images/gallery/door-4.webp', alt: 'Door' },
            { src: '/images/gallery/door-5.webp', alt: 'Door' },
            { src: '/images/gallery/door-6.webp', alt: 'Door' },
            { src: '/images/gallery/door-7.webp', alt: 'Door' },
            { src: '/images/gallery/door-8.webp', alt: 'Door' },
            { src: '/images/gallery/door-9.webp', alt: 'Door' },
            //ceilings
            { src: '/images/gallery/ceiling-1.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-2.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-3.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-4.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-5.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-6.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-7.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-8.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-9.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-10.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-11.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-12.webp', alt: 'Ceiling' },
            { src: '/images/gallery/ceiling-13.webp', alt: 'Ceiling' },

      ],

}

function openLightbox(img) {
      const index = images[selectedCategory.value].findIndex(i => i.src === img.src)
      lightboxIndex.value = index
}

function closeLightbox() {
      lightboxIndex.value = null
}

function prevImage() {
      if (lightboxIndex.value > 0) {
            lightboxIndex.value--
      }
}

function nextImage() {
      if (lightboxIndex.value < images[selectedCategory.value].length - 1) {
            lightboxIndex.value++
      }
}
</script>



<style scoped>
.gallery-page {

      .gallery-categories {
            padding: 2rem 0;

            h3 {
                  text-align: center;
                  margin-bottom: 2rem;
            }

            .categories-grid {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 2rem;
                  justify-content: center;

                  .category-btn {
                        background: #fff;
                        border: 2px solid var(--color-primary);
                        border-radius: 8px;
                        padding: 1rem 2rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;
                        transition: background 0.2s, border 0.2s;

                        &.active,
                        &:hover {
                              background: var(--color-primary);
                              color: #fff;
                        }

                        .category-icon {
                              width: 60px;
                              height: 60px;
                              object-fit: cover;
                              border-radius: 50%;
                              margin-bottom: 0.5rem;
                        }
                  }
            }
      }

      .gallery-images {

            .images-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                  gap: 2rem;

                  .gallery-image-wrapper {
                        background: #fff;
                        text-align: center;
                        cursor: pointer;

                        .gallery-image {
                              width: 100%;
                              border-radius: 4px;
                              margin-bottom: 0.5rem;
                        }

                        .image-caption {
                              color: #7f8c8d;
                              font-size: 0.95rem;
                        }
                  }
            }

            .back-btn {
                  display: block;
                  margin: 2rem auto 0 auto;
                  background: var(--color-primary);
                  color: #fff;
                  border: none;
                  border-radius: 4px;
                  padding: 0.75rem 2rem;
                  font-size: 1rem;
                  cursor: pointer;
                  transition: background 0.2s;

                  &:hover {
                        background: var(--color-primary);
                  }
            }
      }
}

@media (max-width:768px) {
      .gallery-page {
            .gallery-categories {
                  .categories-grid {
                        gap: 1rem;
                        .category-btn {
                              background: #fff;
                              border: 2px solid var(--color-primary);
                              border-radius: 8px;
                              padding: .5rem 1rem;
                              display: flex;
                              flex-direction: column;
                              align-items: center;
                              cursor: pointer;
                              transition: background 0.2s, border 0.2s;
                        }
                  }
            }
      }
}
</style>
