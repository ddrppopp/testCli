<template>
  <select v-bind="$attrs">
    <option value="a">a</option>
    <option value="b">b</option>
    <option value="c">c</option>
  </select>
</template>
<script>
export default {
  inheritAttrs: false,
  created() {
    console.log(this.$attrs)
  }
}
</script>