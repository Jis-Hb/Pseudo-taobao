import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.less'
import axios from 'axios'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
const loading = require('../src/assets/img/loading.jpg')
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(vant)

// 解决移动端300毫秒延迟
FastClick.attach(document.body)

// 懒加载插件
Vue.use(VueLazyLoad, {
  loading
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
