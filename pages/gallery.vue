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
                                    <NuxtImg :src="img.src" :alt="img.alt" class="gallery-image" :format="webp"
                                          densities="x1" sizes="sm:300px" />
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

                  <NuxtImg :src="lightboxImage.src" :alt="lightboxImage.alt" class="lightbox-img" :format="'webp'"
                        densities="x1" sizes="sm:300px lg:1000px" />
                  <p class="lightbox-caption">{{ lightboxImage.alt }}</p>

                  <button class="arrow right" @click.stop="nextImage"
                        :disabled="lightboxIndex === images[selectedCategory].length - 1">›</button>
            </div>


      </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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
      Warehousing: [
            { src: '/assets/images/warehousing.jpg', alt: 'Warehouse Facility' },
      ],
      Fleet: [
            { src: '/assets/images/truck.jpg', alt: 'Logistics Truck' },
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
</style>
