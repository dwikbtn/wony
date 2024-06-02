<template>
  <div
    class="font-cookierun-regular grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
  >
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
                <img src="../assets/img/product/Doggo tote-bag.png" alt="" />
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
              Statue of Liberty
            </h2>
            <p
              class="mt-2 text-sm text-gray-800 line-clamp-1"
              title="New York, NY 10004, United States"
            >
              New York, NY 10004, United States
            </p>
          </div>

          <div class="grid grid-cols-2 mt-8">
            <div class="flex items-center">
              <div class="relative">
                <router-link to="/catalog/product">
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
                <span class="text-lg">3,200</span>/m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
