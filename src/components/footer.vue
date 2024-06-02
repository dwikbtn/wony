<template>
  <footer class="bg-white">
    <div class="container font-cookierun-regular w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <div class="flex items-center">
            <img src="../assets/img/logo.PNG" class="h-8 me-3" alt=". . ." />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Wonivero</span>
          </div>
          <div class="mt-1">
            <span class="text-sm text-gray-500 sm:text-center"
              >Developer By<a href="#" class="hover:underline"> Kitimaru & Raff</a>
            </span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
          <div class="">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <router-link class="hover:underline" to="/categories">Catalog </router-link>
              </li>
              <li>
                <router-link class="hover:underline" to="/">Catalog </router-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="https://linktr.ee/wonivero" target="_blank" class="hover:underline"
                  >Wonivero</a
                >
              </li>
              <li>
                <a href="https://s.id/ITStuff" target="_blank" class="hover:underline"
                  >Wonivero's IT Dev</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2024 <a href="#" class="hover:underline">Wonivero™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0"></div>
      </div>
    </div>
  </footer>
</template>
