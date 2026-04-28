<template>
  <div class="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
    <h1 class="text-2xl font-bold mb-8">Your Bag</h1>

    <div v-if="cartStore.items.length > 0" class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
      <!-- Cart Items -->
      <div>
        <CartItem
          v-for="item in cartStore.items"
          :key="`${item.productId}-${item.size}`"
          :item="item"
        />
      </div>

      <!-- Order Summary -->
      <div class="lg:sticky lg:top-24 h-fit">
        <div class="bg-brand-gray-100 p-8">
          <h2 class="text-lg font-bold mb-6">Summary</h2>

          <div class="flex justify-between text-sm mb-3">
            <span>Subtotal</span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-sm mb-3">
            <span>Estimated Shipping</span>
            <span class="text-brand-gray-500">Free</span>
          </div>

          <div class="border-t border-brand-gray-300 my-4" />

          <div class="flex justify-between font-bold">
            <span>Total</span>
            <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>

          <button class="btn-primary w-full text-center mt-6" @click="handleCheckout">
            Checkout
          </button>
        </div>
      </div>
    </div>

    <!-- Empty Cart -->
    <div v-else class="text-center py-20">
      <p class="text-brand-gray-500 text-lg">Your bag is empty.</p>
      <NuxtLink to="/shop" class="btn-primary mt-8">Shop Now</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

useHead({ title: 'Cart | Ascend Alone' })

const cartStore = useCartStore()

function handleCheckout() {
  alert('Checkout coming soon! This is a demo store.')
}
</script>
