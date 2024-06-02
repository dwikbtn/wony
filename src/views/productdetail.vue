<script setup>
import axios from 'axios'
</script>

<template>
  <div class="font-cookierun-regular container mx-auto pt-24 flex items-center flex-wrap">
    <ul class="flex items-center">
      <li class="inline-flex items-center">
        <router-link to="/" class="text-gray-600">
          <svg
            class="w-5 h-auto fill-current mx-2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
            />
          </svg>
        </router-link>
        <svg
          class="w-5 h-auto fill-current mx-2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
      </li>

      <li class="inline-flex items-center">
        <router-link to="/categories" class="text-gray-600 hover:text-[#84b8d3]">
          Catalog
        </router-link>
        <svg
          class="w-5 h-auto fill-current mx-2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
      </li>

      <li class="inline-flex items-center">
        <a href="#" class="text-gray-600 hover:text-[#84b8d3]"> {{ product.name }} </a>
      </li>
    </ul>
  </div>

  <div class="font-cookierun-regular py-24 container mx-auto">
    <form v-on:submit.prevent="addToCart">
      <div class="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <!-- IMAGES -->
        <div class="flex flex-col gap-6 lg:w-2/4">
          <img
            :src="'/product/' + product.imgproduct"
            alt=". . ."
            class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full w-full h-full aspect-square object-cover rounded-xl"
          />
        </div>
        <!-- ABOUT -->
        <div class="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span class="text-[#6183ab] font-semibold">{{ product.tag }}</span>
            <h1 class="text-3xl font-bold">{{ product.name }}</h1>
          </div>
          <!-- Desc -->
          <p class="text-gray-700">{{ product.desc }}</p>
          <!-- Price -->
          <h6 class="text-2xl font-semibold">IDR {{ selectedProduct.price }}</h6>

          <!-- Type -->

          <div>
            <label for="size" class="block text-sm font-medium text-gray-700">Select Type:</label>
            <select
              v-model="selectedProduct"
              @change="updatePrice"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              name="productType"
            >
              <option v-for="product in product.products" :key="product.id" :value="product">
                {{ product.type }}
              </option>
            </select>
          </div>
          <div class="flex flex-row items-center gap-12 pt-4">
            <div class="flex flex-row items-center">
              <button
                class="bg-gray-200 py-2 px-5 rounded-lg text-[#84b8d3] text-3xl"
                @click="decrementAmount"
                type="button"
              >
                -
              </button>
              <span class="py-4 px-6 rounded-lg">{{ amount }}</span>
              <button
                class="bg-gray-200 py-2 px-4 rounded-lg text-[#84b8d3] text-3xl"
                @click="incrementAmount"
                type="button"
              >
                +
              </button>
            </div>
            <button
              class="bg-[#7cb8d2] text-white font-semibold py-3 px-16 rounded-xl h-full"
              type="submit"
            >
              Add to Cart.
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      amount: 1, // Initial amount
      product: {},
      selectedProduct: {},
      pesan: {
        productId: null, // tambahkan property productId
        quantity: 1 // default quantity
      }
    }
  },
  created() {
    this.fetchProductData()
  },
  methods: {
    fetchProductData() {
      const route = useRoute()
      const namepage = route.params.namepage
      axios
        .get(`http://localhost:8080/categories/${namepage}`)
        .then((response) => {
          this.product = response.data
          // Set default selected product
          this.selectedProduct = this.product.products[0]
        })
        .catch((error) => {
          console.error('Error fetching product data:', error)
        })
    },

    updatePrice() {
      console.log('Selected Product:', this.selectedProduct)
    },
    decrementAmount() {
      if (this.amount > 1) {
        this.amount--
      }
    },
    incrementAmount() {
      this.amount++
    },
    addToCart() {
      // Set the productId and quantity based on selected product and amount
      this.pesan.productId = this.selectedProduct.id
      this.pesan.quantity = this.amount
      this.pesan.price = this.selectedProduct.price
      this.pesan.image = this.product.imgproduct

      // Get product name and type from selected product
      this.pesan.productName = this.selectedProduct.name
      this.pesan.productType = this.selectedProduct.type

      // Use Vuex store to add the product to cart
      this.$store.dispatch('addToCart', this.pesan)

      // Reset the form
      this.amount = 1
    }
  }
}
</script>
