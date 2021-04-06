<template>
  <div class="message-box">
    <button @click="$emit('close')">X</button>
    <slot name="title" v-bind:user="user"></slot>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: 'liu'
    }
  }
}
</script>
<style scoped>
  .message-box {
    background-color: green
  }
</style>