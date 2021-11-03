<template>
  <div class="bz-Count">
    <div class="Top-Nav">基础服务</div>
    <div class="center-Nav" v-for="(item, index) in bzcount.services" :key="index">
      <img :src="item.icon" alt="" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baozhangCount',
  props: {
    bzcount: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less">
.bz-Count {
  .Top-Nav {
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    color: #191919;
  }
  .center-Nav {
    height: 70px;
    padding: 0 20px;
    img {
      float: left;
      margin-top: 25px;

      height: 20px;
      width: 20px;
      border-radius: 50%;
    }
    p {
      float: left;
      line-height: 70px;
      margin-left: 20px;
      color: #838383;
      font-size: 13px;
    }
  }
}
</style>
