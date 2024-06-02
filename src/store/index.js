// store/index.js
import { createStore } from 'vuex'
import { createTransaction } from '../php/paymentService'

export default createStore({
  state() {
    return {
      cart: {}
    }
  },
  mutations: {
    ADD_TO_CART(state, product) {
      if (!state.cart[product.productType]) {
        state.cart[product.productType] = []
      }
      const existingProduct = state.cart[product.productType].find(
        (item) => item.productId === product.productId
      )
      if (existingProduct) {
        existingProduct.quantity += product.quantity
      } else {
        state.cart[product.productType].push(product)
      }
    },
    REMOVE_FROM_CART(state, { productId, productType }) {
      if (state.cart[productType]) {
        state.cart[productType] = state.cart[productType].filter(
          (item) => item.productId !== productId
        )
      }
    },
    INCREMENT_QUANTITY(state, { productId, productType }) {
      const product = state.cart[productType].find((item) => item.productId === productId)
      if (product) {
        product.quantity++
      }
    },
    DECREMENT_QUANTITY(state, { productId, productType }) {
      const product = state.cart[productType].find((item) => item.productId === productId)
      if (product && product.quantity > 1) {
        product.quantity--
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, { productId, productType }) {
      commit('REMOVE_FROM_CART', { productId, productType })
    },
    incrementQuantity({ commit }, { productId, productType }) {
      commit('INCREMENT_QUANTITY', { productId, productType })
    },
    decrementQuantity({ commit }, { productId, productType }) {
      commit('DECREMENT_QUANTITY', { productId, productType })
    },
    async initiatePayment({ state, getters }, { email, name, ticket }) {
      try {
        const generateOrderId = () => {
          return 'ORD' + Date.now()
        }

        const orderId = generateOrderId()
        const amount = getters.cartTotal
        const items = getters.cartItems

        const paymentInfo = { email, name, ticket }
        const redirectUrl = await createTransaction(orderId, amount, items, paymentInfo)

        window.location.href = redirectUrl
      } catch (error) {
        console.error('Failed to initiate payment:', error)
      }
    }
  },
  getters: {
    cartItems(state) {
      const allItems = []
      for (const productType in state.cart) {
        allItems.push(...state.cart[productType])
      }
      return allItems
    },
    cartTotal(state) {
      let total = 0
      for (const productType in state.cart) {
        total += state.cart[productType].reduce(
          (subtotal, item) => subtotal + item.quantity * item.price,
          0
        )
      }
      return total
    }
  }
})
