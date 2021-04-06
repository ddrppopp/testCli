<template>
  <cart></cart>
  <button @click="$message({message: 'nihaoa'})">点击</button>
</template>

<script>
import AlertBox from './views/AlertBox.vue'
import BaseSelect from './views/BaseSelect.vue'
import BaseInput from './views/BaseInput.vue'
import BaseTitle from './views/title.vue'
import { defineAsyncComponent, h, render } from 'vue'
import Cart from './views/cart/index.vue'

export default {
  data() {
    return {
      info: {
        name: 'abc',
        age: 123,
        goo: 'hello',
      },
      goo: 'hello',
    }
  },
  components: {
    'alert-box': AlertBox,
    'base-select': BaseSelect,
    'base-title': BaseTitle,
    'base-input': defineAsyncComponent( () => {
      import('./views/BaseInput.vue')
    }),
    'cart': Cart
  },
  methods: {
    onchange(event) {
      console.log(event.target.value);
    }
  }
}
</script>