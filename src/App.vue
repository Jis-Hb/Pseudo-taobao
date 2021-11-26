<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view" />
      </keep-alive>
    </transition>
    <Main-Tab-Bar v-if="!path"></Main-Tab-Bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data() {
    return {
      path: '',
      animate: '',
      matched: [
        '/dingdan/all',
        '/dingdan/df',
        '/dingdan/fh',
        '/dingdan/sh',
        '/dingdan/dpj',
        '/login',
        '/registered',
        '/Serch',
        '/InForClick',
        '/setting',
        '/Change-info'
      ],
      transitionName: 'slide-left'
    }
  },
  created() {
    this.path = this.matched.some((item, index) => {
      if (this.$route.path === item) return true
    })
  },
  mounted() {},
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
  },
  watch: {
    $route(to, from) {
      this.path = this.matched.some((item, index) => {
        if (to.path === item) return true
      })

      // if (to.meta.index > from.meta.index) {
      //   this.animate = 'slide-left'
      // } else {
      //   this.animate = 'slide-right'
      // }
    }
  }
}
</script>
<style lang="less">
@import 'assets/css/base.css';
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
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
