<template>
  <div class="topnav">
    <TopNav>
      <div slot="left" class="Black">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center">确认订单</div>
    </TopNav>
  </div>
</template>

<script>
import TopNav from 'components/common/navbar/NavBar'

export default {
  components: {
    TopNav
  }
}
</script>

<style lang="less" scoped>
.Black {
  text-align: center;

  img {
    padding-top: 10px;
    margin-right: 30px;
  }
}
</style>
