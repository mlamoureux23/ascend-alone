import { defineStore } from 'pinia'

interface CartItem {
  productId: string
  name: string
  price: number
  size: string
  image: string
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  function addItem(product: Omit<CartItem, 'quantity'>) {
    const existing = items.value.find(
      i => i.productId === product.productId && i.size === product.size
    )
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function removeItem(productId: string, size: string) {
    items.value = items.value.filter(
      i => !(i.productId === productId && i.size === size)
    )
  }

  function updateQuantity(productId: string, size: string, quantity: number) {
    const item = items.value.find(
      i => i.productId === productId && i.size === size
    )
    if (item) {
      if (quantity <= 0) {
        removeItem(productId, size)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  return { items, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart }
})
