<template>
  <div>
    <TopNav></TopNav>
    <Info></Info>
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<script>
import TopNav from './dingdan-top.vue'
import Info from './dingdan-info.vue'
export default {
  name: 'dingdan',
  components: {
    TopNav,
    Info
  },
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
    const isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
    this.$router.isBack = false
    next()
  }
}
</script>

<style scoped>
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
