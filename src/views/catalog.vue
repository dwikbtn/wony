<script setup>
import cardproduct from '@/components/cardproduct.vue'
import axios from 'axios'
</script>

<template>
  <div class="container mx-auto py-24">
    <h1
      class="font-cookierun-bold text-lg sm:text-xl xl:text-2xl text-center md:text-left text-ternary-dark dark:text-primary-light"
    >
      Product!
    </h1>
    <p class="font-cookierun-regular mt-2 text-center md:text-left leading-none">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam adipisci reprehenderit, illo
      veritatis autem qui assumenda eum labore minima voluptate quidem, optio quia atque, error
      possimus et impedit molestiae odit!
    </p>
    <div class="mt-8">
      <div
        class="font-cookierun-regular grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
      >
        <div v-for="category in categories" :key="category.page">
          <!-- card 1 -->
          <div class="relative mx-auto w-full">
            <div
              href="#"
              class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
              <div class="shadow p-4 rounded-lg bg-white">
                <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                  <div
                    class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full"
                  >
                    <div class="absolute inset-0 bg-[#e5e5e5]">
                      <img :src="'/product/' + category.imgproduct" alt="" />
                    </div>
                  </div>
                  <span
                    class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none"
                  >
                    Featured
                  </span>
                </div>

                <div class="mt-4">
                  <h2
                    class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                    title="New York"
                  >
                    {{ category.name }}
                  </h2>
                  <p
                    class="mt-2 text-sm text-gray-800 line-clamp-1"
                    title="New York, NY 10004, United States"
                  >
                    {{ category.desc }}
                  </p>
                </div>

                <div class="grid grid-cols-2 mt-8">
                  <div class="flex items-center">
                    <div class="relative">
                      <router-link :to="'/categories/' + category.namepage">
                        <button
                          type="button"
                          class="text-white bg-[#7cb8d2] hover:bg-[#6183ab] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                        >
                          Detail
                        </button>
                      </router-link>
                    </div>
                  </div>

                  <div class="flex justify-end">
                    <p
                      class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl"
                    >
                      <span class="text-sm uppercase"> $ </span>
                      <span class="text-lg">3,200.</span>/m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [] // Initialize categories array
    }
  },
  mounted() {
    // Fetch category data when the component is mounted
    this.fetchCategories()
  },
  methods: {
    fetchCategories() {
      // Make a GET request to fetch all categories
      axios
        .get('http://localhost:8080/categories')
        .then((response) => {
          // Assign the fetched categories to the categories array
          this.categories = response.data
        })
        .catch((error) => {
          console.error('Error fetching categories:', error)
        })
    }
  }
}
</script>
