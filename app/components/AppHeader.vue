<template>
  <header class="sticky top-0 z-50 bg-white border-b border-brand-gray-200">
    <nav class="flex items-center justify-between h-16 px-6 md:px-12 max-w-[1440px] mx-auto">
      <!-- Logo -->
      <NuxtLink to="/" class="text-sm font-extrabold tracking-[0.2em] uppercase text-brand-black">
        Ascend Alone
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink to="/shop" class="text-sm font-medium text-brand-black hover:text-brand-gray-500 transition-colors">
          New
        </NuxtLink>
        <NuxtLink to="/shop" class="text-sm font-medium text-brand-black hover:text-brand-gray-500 transition-colors">
          Men
        </NuxtLink>
        <NuxtLink to="/shop" class="text-sm font-medium text-brand-black hover:text-brand-gray-500 transition-colors">
          Women
        </NuxtLink>
        <NuxtLink to="/shop" class="text-sm font-medium text-brand-black hover:text-brand-gray-500 transition-colors">
          Shop All
        </NuxtLink>
      </div>

      <!-- Right: Cart + Mobile Menu -->
      <div class="flex items-center gap-4">
        <NuxtLink to="/cart" class="relative p-2">
          <!-- Shopping bag icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <!-- Badge -->
          <span
            v-if="cartStore.totalItems > 0"
            class="absolute -top-0.5 -right-0.5 bg-brand-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ cartStore.totalItems }}
          </span>
        </NuxtLink>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden p-2"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition name="menu">
      <div v-if="mobileMenuOpen" class="md:hidden fixed inset-0 top-16 bg-white z-40">
        <div class="flex flex-col p-8 gap-6">
          <NuxtLink
            to="/shop"
            class="text-2xl font-bold text-brand-black"
            @click="mobileMenuOpen = false"
          >
            New
          </NuxtLink>
          <NuxtLink
            to="/shop"
            class="text-2xl font-bold text-brand-black"
            @click="mobileMenuOpen = false"
          >
            Men
          </NuxtLink>
          <NuxtLink
            to="/shop"
            class="text-2xl font-bold text-brand-black"
            @click="mobileMenuOpen = false"
          >
            Women
          </NuxtLink>
          <NuxtLink
            to="/shop"
            class="text-2xl font-bold text-brand-black"
            @click="mobileMenuOpen = false"
          >
            Shop All
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const mobileMenuOpen = ref(false)
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
