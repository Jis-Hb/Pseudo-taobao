<template>
  <div class="Shop-Top">
    <div class="topInfo">
      <span class="left">购物车</span>
      <span class="right">管理</span>
    </div>
    <p class="numInfo">共{{ this.$store.state.cartList.length }}件宝贝</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ShopTop'
}
</script>

<style lang="less" scoped>
.Shop-Top {
  display: flex;
  height: 22vw;
  flex-direction: column;
  background: #ca6b57;
  padding: 0 10px;
  .topInfo {
    height: 15vw;
    line-height: 15vw;
    .left {
      color: #fff;
      font-size: 25px;
    }
    .right {
      color: #fff;
      font-size: 16px;
    }
  }
  .numInfo {
    text-align: left;
    color: #fff;
    letter-spacing: 2px;
    font-size: 13px;
  }
}
</style>
