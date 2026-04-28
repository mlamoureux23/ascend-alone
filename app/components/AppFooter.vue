<template>
  <footer class="bg-brand-black text-white">
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand -->
        <div>
          <h3 class="text-sm font-extrabold tracking-[0.2em] uppercase mb-4">Ascend Alone</h3>
          <p class="text-sm text-brand-gray-500 leading-relaxed">
            Rise above. Premium athletic gear for those who go it alone.
          </p>
        </div>

        <!-- Get Help -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider mb-4">Get Help</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm text-brand-gray-500 hover:text-white transition-colors">Order Status</a></li>
            <li><a href="#" class="text-sm text-brand-gray-500 hover:text-white transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" class="text-sm text-brand-gray-500 hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" class="text-sm text-brand-gray-500 hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider mb-4">About Ascend Alone</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm text-brand-gray-500 hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" class="text-sm text-brand-gray-500 hover:text-white transition-colors">Sustainability</a></li>
            <li><a href="#" class="text-sm text-brand-gray-500 hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider mb-4">Follow Us</h4>
          <div class="flex gap-4">
            <a href="#" class="text-brand-gray-500 hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" class="text-brand-gray-500 hover:text-white transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="text-brand-gray-500 hover:text-white transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-brand-gray-700 mt-12 pt-8">
        <p class="text-xs text-brand-gray-500">&copy; {{ new Date().getFullYear() }} Ascend Alone. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
