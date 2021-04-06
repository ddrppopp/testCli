<template>
  <ul>
    <li v-for="s in shopList" :key="s.id">{{s.name}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    shopList: {
      type: Array
    }
  }
}
</script>
