<template>
  <cart-message v-if="showMes" @close="showMes = false">
    <span>hahaha</span>
    <template v-slot:title="slotProps">恭喜你{{slotProps.user}}</template>
    {{message}}
  </cart-message>
  <cart-input @update:shop="shop=$event" @add="addToCart"></cart-input>
  <cart-list :shopList="shopList"></cart-list>
  购物车里有{{cartCount}}
  {{shop}}
</template>
<script>
import { reactive, ref, computed, toRefs } from 'vue'
import CartInput from './CartInput.vue'
import CartList from './CartList.vue'
import CartMessage from './CartMessage.vue'
export default {
  setup(props, ctx) {
    const showMes = ref(false);
    const state = reactive({
      shopList: [
        {name: 'skirt', id: "001"},
        {name: 'duanxiu', id: "002"},
        {name: 'kuzi', id: "003"}],
      shop: {},
      showMes
    });
    
    const message = ref('wancehgn');
    let shop = ref({});
    function addToCart() {
      console.log(shop.value)
      state.shopList.push(shop.value);
      state.showMes = true;
    }
    let cartCount = computed(() => {
      return state.shopList.length;
    });
    function updata1 (event) {
      console.log(event)
      shop = event;
    }
    return {
      ...toRefs(state),
      addToCart,
      message,
      shop,
      cartCount,
      updata1
    }
  },
  components: {
    'cart-input': CartInput,
    'cart-list': CartList,
    'cart-message': CartMessage
  }
}
</script>