<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const onClick = () => {
  count.value++;
  window?.$wujie?.bus?.$emit("loglog", count.value);
};
</script>

<template>
  <div class="card">
    <button type="button" @click="onClick">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
