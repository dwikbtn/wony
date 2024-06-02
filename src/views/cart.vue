<template>
  <div class="font-cookierun-regular bg-gray-100 py-24">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:w-3/4">
          <div class="bg-white rounded-lg shadow-md p-6 mb-4">
            <ul>
              <li
                v-for="item in cartItems"
                :key="item.productId"
                class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
              >
                <div class="shrink-0">
                  <img
                    class="h-24 w-24 max-w-full rounded-lg object-cover"
                    :src="'/product/' + item.image"
                    alt="Product Image"
                  />
                </div>
                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">{{ item.productName }}</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">{{ item.productType }}</p>
                    </div>
                    <div
                      class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end"
                    >
                      <p
                        class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right"
                      >
                        IDR {{ item.price }}
                      </p>
                      <!-- Tombol untuk mengurangi dan menambahkan Quantity -->
                      <div class="sm:order-1">
                        <div class="mx-auto flex h-8 items-stretch text-gray-600">
                          <button
                            @click="decrementQuantity(item)"
                            class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                          >
                            -
                          </button>
                          <div
                            class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition"
                          >
                            {{ item.quantity }}
                          </div>
                          <button
                            @click="incrementQuantity(item)"
                            class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <!-- Tombol Remove Product dari Cart -->
                    <button
                      @click="removeItem(item.productId)"
                      type="button"
                      class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                    >
                      <svg
                        class="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div class="mx-auto">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                v-model="email"
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
              />
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
              <input
                v-model="name"
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Lorem Ipsum"
              />
              <label for="ticket" class="block mb-2 text-sm font-medium text-gray-900"
                >IWAG'S Number Ticket</label
              >
              <input
                v-model="ticket"
                type="text"
                id="ticket"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="#00000"
              />
            </div>
          </div>
        </div>
        <div class="md:w-1/4">
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="border-b">
              <div class="my-4 flex items-center justify-between">
                <p class="text-sm text-gray-400">Subtotal</p>
                <p class="text-lg font-semibold text-gray-900">IDR {{ cartTotal }}</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p class="text-2xl font-semibold text-gray-900">
                <span class="text-xs font-normal text-gray-400">IDR</span> {{ cartTotal }}
              </p>
            </div>
            <div class="mt-6 text-center">
              <button
                @click="initiatePayment"
                type="button"
                class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
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
      email: '',
      name: '',
      ticket: ''
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems
    },
    cartTotal() {
      return this.$store.getters.cartTotal
    }
  },
  methods: {
    incrementQuantity(item) {
      this.$store.dispatch('incrementQuantity', {
        productId: item.productId,
        productType: item.productType
      })
    },
    decrementQuantity(item) {
      this.$store.dispatch('decrementQuantity', {
        productId: item.productId,
        productType: item.productType
      })
    },
    initiatePayment() {
      const email = this.email
      const name = this.name
      const ticket = this.ticket
      this.$store.dispatch('initiatePayment', { email, name, ticket })
    },
    removeItem(item) {
      this.$store.dispatch('removeFromCart', {
        productId: item.productId,
        productType: item.productType
      })
    }
  }
}
</script>
