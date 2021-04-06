<script>
import { h } from 'vue'
export default {
  props: {
    level:{
      type: String,
      default: '1'
    },
    items: {
      type: Array,
      default: []
    }
  },
  render() {
    console.log(this.$slots);
    if(this.items && Array.isArray(this.items)) {
      return h('ul', {}, this.items.map(item => {
        return h('li', {}, item);
      }));
    }
    return h(`h${this.level}`, {}, this.$slots.header());
  }
}
</script>