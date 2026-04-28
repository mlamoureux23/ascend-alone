<template>
  <div class="flex gap-4 py-6 border-b border-brand-gray-200">
    <!-- Image -->
    <div class="w-20 h-20 bg-brand-gray-100 rounded flex-shrink-0 overflow-hidden">
      <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
    </div>

    <!-- Details -->
    <div class="flex-1 flex flex-col justify-between">
      <div class="flex justify-between">
        <div>
          <h3 class="text-sm font-medium text-brand-black">{{ item.name }}</h3>
          <p class="text-sm text-brand-gray-500">Size: {{ item.size }}</p>
        </div>
        <p class="text-sm font-medium text-brand-black">${{ (item.price * item.quantity).toFixed(2) }}</p>
      </div>

      <div class="flex items-center justify-between mt-2">
        <!-- Quantity controls -->
        <div class="flex items-center gap-2">
          <button
            class="w-8 h-8 border border-brand-gray-300 rounded-full inline-flex items-center justify-center text-sm hover:border-brand-black transition-colors"
            @click="cartStore.updateQuantity(item.productId, item.size, item.quantity - 1)"
          >
            -
          </button>
          <span class="text-sm w-6 text-center">{{ item.quantity }}</span>
          <button
            class="w-8 h-8 border border-brand-gray-300 rounded-full inline-flex items-center justify-center text-sm hover:border-brand-black transition-colors"
            @click="cartStore.updateQuantity(item.productId, item.size, item.quantity + 1)"
          >
            +
          </button>
        </div>

        <!-- Remove -->
        <button
          class="text-xs text-brand-gray-500 underline hover:text-brand-black transition-colors"
          @click="cartStore.removeItem(item.productId, item.size)"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

defineProps<{
  item: {
    productId: string
    name: string
    price: number
    size: string
    image: string
    quantity: number
  }
}>()

const cartStore = useCartStore()
</script>
