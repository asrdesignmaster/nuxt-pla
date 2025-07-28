<template>
        <NuxtLink to="/" class="w-fit text-gray-900 lg:text-white" @click="$emit('menu-item-clicked')">Home</NuxtLink>
        <NuxtLink to="/about-us" class="w-fit text-gray-900 lg:text-white" @click="$emit('menu-item-clicked')">About
                <span class="sr-only">Go to our About us page</span></NuxtLink>
        <NuxtLink to="/portfolio" class="w-fit text-gray-900 lg:text-white" @click="$emit('menu-item-clicked')">
                Portfolio<span class="sr-only">Go to our Portfolio page</span></NuxtLink>
        <NuxtLink to="/services" class="w-fit text-gray-900 lg:text-white" @click="$emit('menu-item-clicked')">
                Services<span class="sr-only">Go to our Services page</span></NuxtLink>
        <NuxtLink to="/contact" class="w-fit text-gray-900 lg:text-white" @click="$emit('menu-item-clicked')">
                Contact<span class="sr-only">Go to our Contact us page</span></NuxtLink>
</template>
