<template>
  <input type="text" :value="foo" @input="$emit('updata:foo', $event.target.value)"/>
</template>
<script>
export default {
  props: ['foo']
}
</script>