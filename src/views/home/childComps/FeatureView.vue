<template>
  <div class="feature">
    <div class="Swpier">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="~assets/img/demo1.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/img/demo2.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/img/demo3.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/img/demo4.jpg" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="min-box">
      <img src="~assets/img/tb1.jpg" alt="" />
    </div>
    <div class="min1-box">
      <img src="~assets/img/tb2.jpg" alt="" />
    </div>
    <div class="min2-box">
      <img src="~assets/img/tb3.jpg" alt="" />
    </div>
    <div class="min3-box">
      <img src="~assets/img/tb4.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureView',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.feature {
  padding: 10px;
  margin: 10px;
  height: 440px;
  background-color: #fff;
  border-radius: 10px;

  .Swpier {
    float: left;
    background-color: blue;
    height: 270px;
    width: 50%;
    border-radius: 15px;
    margin-bottom: 10px;

    .my-swipe {
      color: #fff;
      font-size: 20px;
      height: 270px;
      width: 100%;
      border-radius: 10px;
      background-color: #39a9ed;
      .van-swipe-item {
        width: 100%;
        height: 100%;
        line-height: 150px;
        text-align: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .min-box {
    width: 48%;

    background-color: blue;
    height: 130px;
    float: right;
    margin-bottom: 10px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .min1-box {
    width: 48%;
    margin-left: 2px;
    background-color: blue;
    height: 130px;
    margin-bottom: 10px;
    border-radius: 10px;

    float: right;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .min2-box {
    width: 50%;
    margin-left: 1px;

    background-color: blue;
    height: 130px;
    float: right;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .min3-box {
    margin-right: 5px;
    width: 48%;
    background-color: blue;
    height: 130px;
    float: right;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>
