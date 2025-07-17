<template>
    <div class="testimonial py-20 text-center relative">
        <Swiper :modules="[Navigation, Pagination, Autoplay]" :pagination="{ clickable: true }" :navigation="true"
            :autoplay="{ delay: 5000 }" loop class="max-w-5xl mx-auto">
            <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
                <blockquote class="flex flex-col items-center p-4 max-w-4xl mx-auto">
                    <p class="text-xl font-medium text-gray-700">
                        "{{ testimonial.message }}"
                    </p>
                    <footer class="flex flex-col items-center gap-1 mt-6">
                        <p class="font-bold text-lg">{{ testimonial.name }}</p>
                        <p class="font-medium text-black/60">{{ testimonial.title }}</p>
                    </footer>
                </blockquote>
            </SwiperSlide>

        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Must import styles for arrows to work!
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
    {
        message:
            'The quality and luster of the gold looks as good as new even years after it was applied. We are very satisfied with the quality and service provide by Paradise Leafing Art.',
        name: 'Ravi Ohri',
        title: 'Ohris Banjara',
    },
    {
        message: 'We are extremely satisfied with the appearance and texture of the gold. It really enhances the look and class of the space it was applied in. Thanks to Paradise Leafing Art for their service.',
        name: 'Yusuf',
        title: 'ITC maratha Andheri',
    },
    {
        message: 'I love the grand look the leafing has given to my bungalow. The work was completed within a specific amount of time with good craftsmanship and service.',
        name: 'VV. Vinayak',
        title: 'Director',
    },
    {
        message: 'Would highly recommend Paradise Leafing Art for any leafing work. They are very efficient and precise in their work. Completely transformed my showroom and gave it a glamorous look with their craftsmanship.',
        name: 'Rocky S',
        title: 'Fashion Designer',
    },
    {
        message: 'Truly grateful to Paradise Leafing Art for their services in beautifying my showroom. Totally transformed and adorned the look within the time limit.',
        name: 'Shantanu Nikhil',
        title: 'Fashion Designer',
    },
]
</script>

<style>
.swiper-button-prev:after,
.swiper-button-next:after {
    color: #333;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    font-size: 32px;
}
.swiper-button-prev{
    left: 5px;
}
.swiper-button-prev{
    right: 5px;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0;
}
</style>
