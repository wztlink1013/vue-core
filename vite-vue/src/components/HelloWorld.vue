<template>
  <h4>{{ msg }}</h4>
  <div class="card">
    <div><button type="button" @click="addCount" class="bg-cyan-300">add count</button></div>
    <div>count is {{ count }}</div>
    <div>doubleCount is {{ doubleCount }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
const addCount = () => {
  console.info('>>> addCount >>>')
  count.value = count.value + 2;
}
</script>

<style scoped>
/*  */
</style>
