<template>
  <!-- component -->

  <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
    <div class="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-1 rtl:space-x-reverse">
        <img src="../assets/img/logo.PNG" class="h-[50px]" />
      </a>
      <div class="md:hidden flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-general-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <router-link
              to="/"
              class="font-cookierun-regular block py-2 px-3 text-gray-900 md:hover:text-[#9ab5cb] rounded md:bg-transparent md:p-0 nav-link"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/categories"
              class="font-cookierun-regular block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#9ab5cb] md:p-0 nav-link"
              >Catalog</router-link
            >
          </li>

          <li>
            <router-link
              to="/cart"
              class="font-cookierun-regular block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#9ab5cb] md:p-0 nav-link"
              >Cart</router-link
            >
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a.router-link-active {
  color: #9ab5cb;
}
</style>
