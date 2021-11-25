import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    submitList: [],
    dingdan: [],
    gouwuCount: 0,
    shopObj: {},
    username: '',
    // 对话框标头
    InForName: '',
    // 对话框信息传入给父组件显示
    ClickInfo: {
      content: '',
      isShow: 0
    }
  },
  mutations: {
    addCart(state, payload) {
      // payload新添加的商品
      let oldProduct = null
      for (const item of state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }
      // 2`判断oldProduct
      if (oldProduct) {
        oldProduct.count += payload.count
      } else {
        state.gouwuCount += 1

        state.cartList.push(payload)
      }
    },
    addSubmit(state, payload) {
      if (payload.length === 1) {
        state.submitList = payload
        // console.log(state.submitList)
      } else {
        state.submitList = payload
        // console.log(payload)
      }
    },
    addDingdan(state, payload) {
      state.dingdan = payload
    },
    gouwu(state, payload) { },
    shopObj(state, payload) {
      state.shopObj = payload
    },
    username(state, payload) {
      state.username = payload
    },
    // 对话框标头
    InForName(state, payload) {
      state.InForName = payload
    },
    // 对话框信息传入给父组件显示
    ClickInfo(state, payload) {
      state.ClickInfo.content = payload
    }
  },
  actions: {},
  modules: {}
})
