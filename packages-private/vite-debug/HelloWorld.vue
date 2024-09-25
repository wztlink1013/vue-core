<template>
  <div style="border: 1px pink solid;margin: 10px;">
    <div style="color: pink;">HelloWorld组件</div>
    <div>toHelloWorld: {{ toHelloWorld }}</div>
    <button @click="changeToHelloWorld">⛔子组件改变父组件传入的prop会报错</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: ['toHelloWorld'],
  methods: {
    changeToHelloWorld() {
      this.toHelloWorld = `子组件改变了父组件传入的prop${new Date()}`
    }
  },
}
</script>