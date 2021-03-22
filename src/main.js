import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/vant.js'
import 'lib-flexible'
import * as filters from './filters'
import "./styles/page.css"
Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
