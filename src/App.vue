<script setup>
import { RouterLink, RouterView } from 'vue-router'

import headervue from './components/header.vue';
import footervue from './components/footer.vue';
</script>

<template>
<headervue />
  <RouterView />
<footervue class="mt-10" />
</template>
<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

}
</style>
