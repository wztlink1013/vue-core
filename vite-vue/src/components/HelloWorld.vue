<template>
  <h4>{{ msg }}</h4>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
console.info('>>> HelloWorld.vue >>>')
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
