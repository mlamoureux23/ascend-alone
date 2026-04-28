<template>
  <section class="relative h-[85vh] min-h-[600px] overflow-hidden">
    <!-- Background image -->
    <img
      :src="backgroundImage"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/30" />
    <!-- Content -->
    <div class="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl">
      <h1 class="text-4xl md:text-6xl lg:text-hero text-white uppercase">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-hero-sub text-white/90 mt-4">
        {{ subtitle }}
      </p>
      <NuxtLink v-if="ctaText" :to="ctaLink" class="btn-primary mt-8">
        {{ ctaText }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage: string
}>()
</script>
