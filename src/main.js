import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible'
import * as filters from './filters'
import waterfall from "vue-waterfall2";
import "./styles/page.css"

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(MintUI)
Vue.use(waterfall);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
