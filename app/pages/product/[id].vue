<template>
  <div v-if="product" class="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <!-- Product Image -->
      <div>
        <div class="aspect-square bg-brand-gray-100 overflow-hidden">
          <img
            :src="activeImage"
            :alt="product.name"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Thumbnail gallery for multi-image products -->
        <div v-if="product.images && product.images.length > 1" class="flex gap-3 mt-3">
          <button
            v-for="(img, index) in product.images"
            :key="index"
            class="w-20 h-20 bg-brand-gray-100 overflow-hidden border-2 transition-colors"
            :class="activeImage === img ? 'border-brand-black' : 'border-transparent hover:border-brand-gray-300'"
            @click="activeImage = img"
          >
            <img :src="img" :alt="`${product.name} view ${index + 1}`" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <!-- Product Details -->
      <div class="flex flex-col justify-center">
        <h1 class="text-2xl md:text-3xl font-bold">{{ product.name }}</h1>
        <p class="text-base text-brand-gray-500 mt-1">{{ product.subtitle }}</p>
        <p class="text-xl font-medium mt-3">${{ product.price.toFixed(2) }}</p>

        <!-- Size Selector -->
        <div class="mt-8">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium">Select Size</h3>
            <span v-if="showSizeWarning" class="text-sm text-red-500">Please select a size</span>
          </div>
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="size in product.sizes"
              :key="size"
              class="py-3 text-center text-sm border rounded transition-colors"
              :class="selectedSize === size
                ? 'border-brand-black border-2 font-medium'
                : 'border-brand-gray-300 hover:border-brand-black'"
              @click="selectedSize = size; showSizeWarning = false"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Add to Cart -->
        <button
          class="btn-primary w-full text-center mt-8"
          @click="handleAddToCart"
        >
          {{ addedToCart ? 'Added ✓' : 'Add to Bag' }}
        </button>

        <!-- Description -->
        <p class="text-sm text-brand-gray-500 mt-8 leading-relaxed">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>

  <!-- 404 state -->
  <div v-else class="max-w-[1440px] mx-auto px-6 md:px-12 py-20 text-center">
    <h1 class="text-2xl font-bold">Product Not Found</h1>
    <p class="text-brand-gray-500 mt-2">The product you're looking for doesn't exist.</p>
    <NuxtLink to="/shop" class="btn-primary mt-8">Back to Shop</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import products from '~/data/products.json'

const route = useRoute()
const cartStore = useCartStore()

const product = products.find(p => p.id === route.params.id)

if (product) {
  useHead({ title: `${product.name} | Ascend Alone` })
}

const activeImage = ref(product?.image || '')
const selectedSize = ref('')
const addedToCart = ref(false)
const showSizeWarning = ref(false)

function handleAddToCart() {
  if (!product) return

  if (!selectedSize.value) {
    showSizeWarning.value = true
    return
  }

  cartStore.addItem({
    productId: product.id,
    name: product.name,
    price: product.price,
    size: selectedSize.value,
    image: product.image,
  })

  addedToCart.value = true
  setTimeout(() => {
    addedToCart.value = false
  }, 1500)
}
</script>
