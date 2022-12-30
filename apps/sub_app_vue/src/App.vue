<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const wujieRef = ref(window.$wujie);
</script>

<template>
  <div>wujie props:{{ JSON.stringify(wujieRef?.props) }}</div>
  <HelloWorld msg="Vite + Vue" />
</template>
