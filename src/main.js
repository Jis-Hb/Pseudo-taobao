import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.less'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
