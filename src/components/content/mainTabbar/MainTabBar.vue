<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/icon/t1.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/icon/t.svg" alt="" />
      <div slot="item-text">淘宝</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/icon/f1.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/icon/f.svg" alt="" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/infor">
      <img slot="item-icon" src="~assets/img/icon/x1.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/icon/x.svg" alt="" />
      <div slot="item-text">消息</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/icon/g1.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/icon/g.svg" alt="" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/my">
      <img slot="item-icon" src="~assets/img/icon/w1.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/icon/w.svg" alt="" />
      <div slot="item-text">我的淘宝</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped></style>
