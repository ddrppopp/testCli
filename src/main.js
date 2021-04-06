import { createApp, reactive, h, ref, onMounted, render } from 'vue'
import { clickEvent } from './t.js'
import App from './App.vue'
import axios from 'axios'
const MessagePlugin = {
  install: function (app) {
    const MessageVue = {
      props: {
        duration: {
          type: Number,
          default: 3000
        },
        message: {
          type: String,
          required: true
        }
      },
      mounted() {
        setTimeout(function () {
          
        }, this.duration);
      },
      template: `
        <div><p>{{message}}</p></div>
      `
    }
    const container = document.createElement('div');
    document.body.appendChild(container);
    app.config.globalProperties.$message = function (props) {
      if(props && props.message) {
        // render(h(MessageVue, props), container);
        createApp(MessageVue, props).mount(container);
      }
    }
  }
};
createApp({
  components: {'app': App, 'app1': App},
  data() {
    return {
      value: 'this is value',
      methodname: 'click',
      url: 'http://www.baidu.com',
      isActive: true,
      title: "333",
      list: [
        {name: 'aaaaaaa'},
        {name: 'bbbbbbbb'},
        {name: 'cccccccccc'}
      ],
      fontSize: 1,
    }
  },
  computed: {
    attrname() {
      return 'href'
    },
    message() {
      return this.mes;
    },
    now() {
      return Date.now();
    },
    activeList() {
      return this.list.filter( l => {
        return l.show;
      });
    }
  },
  setup() {
    let count = ref(0);
    onMounted(() => {
      document.addEventListener('click', clickEvent);
    });
    if(module.hot) {
      console.log('this is hot')
      module.hot.accept('./t.js', () => {
        console.log(clickEvent)
        document.addEventListener('click', clickEvent);
      });
    }
    document.onclick = async function() {
      const { fn } = await import('./lib/a.js');
      fn();
    }
    return {
      count
    }
  },
  methods: {
    click1(mes, event) {
      alert(mes);
    },
    addMes() {
      this.title = 'hello wordl';
    },
    receivceMesage(m) {
      this.title = m;
    },
    enlarge() {
      
    },
  },
  template: '<app></app>'
  // template: '#app1'
}).use(MessagePlugin)
.mount("#app");
