import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById('app').scrollIntoView()
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
      meta: { title: 'Home - Wonivero' }
    },
    {
      path: '/categories/:namepage',
      name: 'product',
      component: () => import('../views/productdetail.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart.vue'),
      meta: { title: 'Cart - Wonivero' }
    },
    {
      path: '/categories',
      name: 'catalog',
      component: () => import('../views/catalog.vue'),
      meta: { title: 'Catalog - Wonivero' }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/checkout.vue'),
      meta: { title: 'Checkout - Wonivero' }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const defaultTitle = 'Website - Wonivero'
  let title = defaultTitle

  if (to.name === 'product') {
    const namepage = to.params.namepage
    try {
      const response = await axios.get(`http://localhost:8080/categories/${namepage}`)
      const product = response.data
      if (product) {
        title = `${product.name} - Wonivero`
      }
    } catch (error) {
      console.error('Failed to fetch product data:', error)
    }
  } else if (to.meta && to.meta.title) {
    title = typeof to.meta.title === 'function' ? to.meta.title(to) : to.meta.title
  }

  document.title = title
  next()
})

export default router
