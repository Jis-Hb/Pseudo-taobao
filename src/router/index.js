import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'views/home/honme1'
import category from 'views/category/Category'
import Shop from 'views/Shop/gouwu'
import inFor from 'views/infor/infor'
import home4 from 'views/User/honme4'
import login from 'views/User/login.vue'
import registered from 'views/User/registered.vue'
import Detail from 'views/detail/Detaill-jis.vue'
import settlement from 'views/settlement/settlement'
import pushdizhi from 'views/settlement/settlen/pushdizhi.vue'
import dingdan from 'views/User/ShopCount/dingdan.vue'
import All from 'views/User/ShopCount/All.vue'
import df from 'views/User/ShopCount/df.vue'
import fh from 'views/User/ShopCount/fh.vue'
import sh from 'views/User/ShopCount/sh.vue'
import dpj from 'views/User/ShopCount/dpj.vue'
import Serch from 'views/home/Serch/Serch'
// import { getCookie } from '../common/utils'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/my' },
  { path: '/dingdan', redirect: '/dingdan/all' },

  {
    path: '/home', component: home
  },
  { path: '/Serch', component: Serch },
  { path: '/infor', component: inFor },
  { path: '/category', component: category },
  { path: '/cart', component: Shop },
  { path: '/my', component: home4 },
  { path: '/login', component: login },
  { path: '/registered', component: registered },
  { path: '/detail/:iid', component: Detail },
  { path: '/settlement', component: settlement },
  { path: '/pushdizhi', component: pushdizhi },
  {
    path: '/dingdan',
    component: dingdan,
    children: [
      { path: 'all', component: All },
      { path: 'df', component: df },
      { path: 'fh', component: fh },
      { path: 'sh', component: sh },
      { path: 'dpj', component: dpj }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.path !== '/login' || to.path === '/registered') {
    const token = localStorage.getItem('token')
    if (token || to.path === '/registered') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
