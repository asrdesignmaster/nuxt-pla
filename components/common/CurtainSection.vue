<template>
    <section  :class="sectionClass">
        <div class="curtain "></div>
        <div :class="['container', containerClass]">
            <slot></slot>
        </div>
    </section>
</template>

<script setup>

defineProps({
  sectionClass: {
    type: String,
    default: 'section',
  },
  containerClass: {
    type: String,
    default: null,
  },
})
</script>