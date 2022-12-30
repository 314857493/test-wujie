<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const wujieRef = ref(window.$wujie);
</script>

<template>
  <div>wujie props:{{ JSON.stringify(wujieRef?.props) }}</div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
