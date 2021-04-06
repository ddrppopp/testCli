<template>
  <input type="text" v-model="shopName" @input="notifyUpdata" @keyup.enter="$emit('add')"/>
  <!-- <button @click="$emit('updata:shopList', shopList.push({name: shopName, id: '005'}))"></button> -->
</template>
<script>
export default {
  props: ['shopList'],
  data() {
    return {
      shopName: ''
    }
  },
  methods:{
    notifyUpdata () {
      this.$emit('update:shop', {name: this.shopName, id: '005'});
    }
  }
}
</script>
