import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.less'
import axios from 'axios'
import FastClick from 'fastclick'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(vant)

// 解决移动端300毫秒延迟
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
