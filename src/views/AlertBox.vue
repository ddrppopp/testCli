<template>
  <div>
    <button @click="openModal = true">打开</button>
    <teleport to="body">
      <div v-if="openModal">
        <slot></slot>
        <button @click="openModal = false">关闭</button>
      </div>
      
    </teleport>
  </div>
</template>
<script>
import { ref } from 'vue' 
export default {
  setup() {
    const openModal = ref(false);
    return {
      openModal
    }
  },
  props: {
    myMessage: {},
    name: {
      type: String
    },
    info: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      myInfo: this.info,
      name1: this.name
    }
  },
  created() {
    console.log(this.$attrs);
  },
  methods: {
    change() {
      this.name1 = 'hahaha';
    }
  },
  mounted() {
    console.log(this.$slots.default)
  }
}
</script>