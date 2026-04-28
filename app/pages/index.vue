<template>
  <div>
    <!-- Hero -->
    <HeroSection
      title=""
      cta-text="Shop Now"
      cta-link="/shop"
      background-image="/images/hero-main.png"
    />

    <!-- Featured Products -->
    <section class="py-16 px-6 md:px-12 max-w-[1440px] mx-auto">
      <h2 class="text-2xl font-bold mb-8">Featured</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <!-- Category Banners -->
    <section class="px-6 md:px-12 max-w-[1440px] mx-auto pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Running -->
        <NuxtLink to="/shop" class="group relative block aspect-[4/3] overflow-hidden">
          <img
            src="/images/hero-category-running.svg"
            alt="Running"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute bottom-0 left-0 p-8">
            <h3 class="text-2xl font-bold text-white uppercase">Running</h3>
            <span class="btn-primary mt-4 text-xs">Shop</span>
          </div>
        </NuxtLink>
        <!-- Training -->
        <NuxtLink to="/shop" class="group relative block aspect-[4/3] overflow-hidden">
          <img
            src="/images/hero-category-training.svg"
            alt="Training"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute bottom-0 left-0 p-8">
            <h3 class="text-2xl font-bold text-white uppercase">Training</h3>
            <span class="btn-primary mt-4 text-xs">Shop</span>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import products from '~/data/products.json'

useHead({ title: 'Ascend Alone' })

const featuredProducts = products.filter(p => p.featured)
</script>
