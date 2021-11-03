<template>
  <div>
    <TopNav></TopNav>
    <Info></Info>
    <router-view />
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
  }
}
</script>

<style></style>
