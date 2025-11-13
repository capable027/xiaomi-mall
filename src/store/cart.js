import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // 每项 { id, name, price, img, count }
  }),

  getters: {
    totalCount: (state) => state.items.reduce((sum, item) => sum + item.count, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.count, 0)
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find(i => i.id === product.id)
      if (existing) {
        existing.count++
      } else {
        this.items.push({ ...product, count: 1 })
      }
    },

    removeFromCart(id) {
      this.items = this.items.filter(i => i.id !== id)
    },

    clearCart() {
      this.items = []
    }
  }
})
