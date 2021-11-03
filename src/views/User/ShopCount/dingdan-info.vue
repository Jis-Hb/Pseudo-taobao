<template>
  <div class="info-content">
    <span @click="getIndex(index)" class="info" v-for="(item, index) in this.info" :key="index"
      ><span :class="{ infoed: index === centerIndex }">{{ item }}</span></span
    >
  </div>
</template>

<script>
export default {
  name: 'dingdan-info',
  data() {
    return {
      info: ['全部', '待付款', '待发货', '待收货', '待评价'],
      centerIndex: 0
    }
  },
  methods: {
    getIndex(index) {
      this.centerIndex = index
      switch (index) {
        case 0:
          if (this.$route.path !== '/dingdan/all') {
            this.$router.push('/dingdan/all')
          }
          break
        case 1:
          if (this.$route.path !== '/dingdan/df') {
            this.$router.push('/dingdan/df')
          }
          break
        case 2:
          if (this.$route.path !== '/dingdan/fh') {
            this.$router.push('/dingdan/fh')
          }
          break
        case 3:
          if (this.$route.path !== '/dingdan/sh') {
            this.$router.push('/dingdan/sh')
          }
          break
        case 4:
          if (this.$route.path !== '/dingdan/dpj') {
            this.$router.push('/dingdan/dpj')
          }
          break
      }
    }
  }
}
</script>

<style lang="less">
.info-content {
  height: 50px;
  background-color: red;
  display: flex;
  background-color: #f1f1f1;
  .info {
    flex: 1;
    text-align: center;
    line-height: 50px;
    color: #3e3e3e;
    font-weight: 520;
  }

  .infoed {
    border-bottom: 2px solid #ec592d;
    padding-bottom: 7px;
  }
}
</style>
