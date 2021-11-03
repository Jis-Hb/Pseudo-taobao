import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    submitList: [],
    dingdan: [],
    gouwuCount: 0,
    shopObj: {}
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
    gouwu(state, payload) {},
    shopObj(state, payload) {
      state.shopObj = payload
    }
  },
  actions: {},
  modules: {}
})
