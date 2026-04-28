<template>
  <NuxtLink :to="`/product/${product.id}`" class="group block">
    <!-- Image -->
    <div class="aspect-square bg-brand-gray-100 overflow-hidden mb-4">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <!-- Details -->
    <div>
      <h3 class="text-sm font-medium text-brand-black">{{ product.name }}</h3>
      <p class="text-sm text-brand-gray-500">{{ product.subtitle }}</p>
      <p class="text-sm font-medium text-brand-black mt-1">${{ product.price.toFixed(2) }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: string
    name: string
    subtitle: string
    price: number
    image: string
  }
}>()
</script>
