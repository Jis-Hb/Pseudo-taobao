<template>
  <div id="app">
    <transition :name="animate">
      <keep-alive>
        <router-view />
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
      matched: ['/dingdan/all', '/dingdan/df', '/dingdan/fh', '/dingdan/sh', '/dingdan/dpj']
    }
  },
  mounted() {},
  watch: {
    $route(to, from) {
      this.path = this.matched.some((item, index) => {
        if (to.path === item) return true
      })
      if (to.meta.index > from.meta.index) {
        this.animate = 'slide-left'
      } else {
        this.animate = 'slide-right'
      }
    }
  }
}
</script>
<style lang="less">
@import 'assets/css/base.css';
.Router {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: #fff;
  transition: all 100ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
