<template>
  <div class="top-content">
    <div class="TopNav">
      <div class="left" @click="back"></div>
      <div class="center">
        <input class="center-input" placeholder="搜索全部订单" type="text" />
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dingdan-top',
  methods: {
    back() {
      this.$router.push('/my')
    }
  }
}
</script>

<style lang="less">
.top-content {
  padding: 0 10px;
  height: 60px;
  background: #f1f1f1;
  .TopNav {
    display: flex;
    .left {
      width: 40px;
      text-align: center;
    }
    .left::before {
      font-family: 'iconfont';
      content: '';
      line-height: 60px;
      font-size: 22px;
    }
    .center {
      flex: 1;
      line-height: 60px;
      text-align: center;
      .center-input {
        height: 40px;
        width: 95%;
        border-radius: 30px;
        border: 1px solid #dc541f;
        padding: 0 15px;
        color: #989898;
        font-size: 15px;
      }
    }
    .right {
      width: 40px;
      text-align: center;
    }
    .right::before {
      font-family: 'iconfont';
      content: '';
      line-height: 60px;
      font-size: 22px;
    }
  }
}
</style>
