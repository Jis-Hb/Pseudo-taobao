<template>
  <div class="mill-content">
    <van-goods-action class="jis">
      <van-goods-action-icon
        @click="$router.push('/infor')"
        icon="chat-o"
        text="客服"
        color="#ee0a24"
      />

      <van-goods-action-icon
        :badge="$store.state.gouwuCount"
        @click="$router.push('/cart')"
        icon="cart-o"
        text="购物车"
      />
      <van-goods-action-icon @click="millcount" icon="star" text="收藏" v-if="!millCount" />
      <van-goods-action-icon
        @click="millcount"
        icon="star"
        text="已收藏"
        color="#ff5000"
        v-if="millCount"
      />
      <van-goods-action-button type="warning" text="加入购物车" @click="showping" />
      <van-goods-action-button type="danger" text="立即购买" @click="gouwu" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'Detaill-mall',
  data() {
    return {
      millCount: false,
      badge: 0
    }
  },
  methods: {
    millcount() {
      if (!this.millCount) {
        this.millCount = true
      } else {
        this.millCount = false
      }
    },
    showping() {
      this.$emit('showping')
    },
    gouwu() {
      this.$emit('gouwu')
    }
  }
}
</script>

<style lang="less" scoped>
.jis {
  z-index: 999;
}
</style>
