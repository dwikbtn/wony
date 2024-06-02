<script setup>
import axios from 'axios'
</script>

<template>
  <main class="relative">
    <div class="mt-20">
      <img src="../assets/img/PREORDERS!.png" alt="" class="w-full bg-cover bg-center" />
    </div>
    <div class="custom-shape-divider-bottom-1707622743">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </main>

  <section class="bg-[#a0c9fd]">
    <div class="pattren-i">
      <section
        class="container-fluid min-[768px]:mx-24 mx-6 min-[768px]:flex-row flex flex-col-reverse pb-24 sm:justify-between items-center"
      >
        <!-- Banner left contents -->
        <div class="w-full md:w-1/3 text-left">
          <h1 class="font-icon text-[70px] min-[768px]:text-left text-[#1b1b1b] uppercase">
            About Me
          </h1>
          <p class="font-cookierun-regular mt-2 sm:text-xl leading-none text-[#4f5053]">
            Heii! :3 I’m Wolfy Vero but most people call me Woni. I take commissions, make comics
            and occasionally merch when a furry convention pops up. I’m currently a college student
            majoring in advertising and hoping to make my own furry brand in the future! ^^
          </p>
        </div>

        <!-- Banner right illustration -->
        <div class="w-full md:w-2/3 text-right float-right">
          <img class="" src="../assets/img/wony.png" alt="Developer" />
        </div>
      </section>
    </div>
  </section>

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
                          Details
                        </button>
                      </router-link>
                    </div>
                  </div>

                  <div class="flex justify-end">
                    <p
                      class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl"
                    >
                      <span class="text-sm uppercase"> $ </span>
                      <span class="text-lg">3,200</span>/m
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

  <div class="container mx-auto">
    <section
      class="rounded-lg bg-[#a0c7d9] px-10 flex sm:justify-between items-center min-[768px]:flex-row"
    >
      <!-- Banner left contents -->
      <div class="w-full md:w-2/4 text-left">
        <h1
          class="font-cookierun-bold text-lg sm:text-xl xl:text-2xl text-left text-ternary-dark dark:text-primary-light"
        >
          More About Me?:3
        </h1>
        <div class="pt-2">
          <router-link to="/product">
            <button
              type="button"
              class="font-cookierun-regular text-white bg-[#7cb8d2] hover:bg-[#6183ab] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Detail
            </button>
          </router-link>
        </div>
      </div>
      <!-- Banner right illustration -->
      <div class="w-full md:w-1/4 text-right float-right">
        <img src="@/assets/img/icon.png" alt="Developer" />
      </div>
    </section>
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

<style scoped>
.pattren-i {
  background-image: url('../assets/img/1.png');
}

.custom-shape-divider-bottom-1707622743 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1707622743 svg {
  position: relative;
  display: block;
  width: calc(118% + 1.3px);
  height: 100px;
}

.custom-shape-divider-bottom-1707622743 .shape-fill {
  fill: #a0c9fd;
}
</style>
