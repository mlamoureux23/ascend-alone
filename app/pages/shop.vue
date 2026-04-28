<template>
  <div>
    <!-- Top banner -->
    <div class="bg-brand-gray-100 py-12 px-6 text-center">
      <h1 class="text-3xl font-bold uppercase tracking-wide">All Products</h1>
    </div>

    <section class="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
      <!-- Category filters -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat.value"
          class="px-5 py-2 rounded-full text-sm font-medium border transition-colors"
          :class="activeCategory === cat.value
            ? 'bg-brand-black text-white border-brand-black'
            : 'border-brand-gray-300 text-brand-black hover:border-brand-black'"
          @click="activeCategory = cat.value"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Product grid -->
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- Empty state -->
      <div v-if="filteredProducts.length === 0" class="text-center py-20">
        <p class="text-brand-gray-500">No products found in this category.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import products from '~/data/products.json'

useHead({ title: 'Shop All | Ascend Alone' })

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Running', value: 'running' },
  { label: 'Training', value: 'training' },
  { label: 'Lifestyle', value: 'lifestyle' },
]

const activeCategory = ref('all')

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products
  return products.filter(p => p.category === activeCategory.value)
})
</script>
