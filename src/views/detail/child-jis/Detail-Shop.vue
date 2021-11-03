<template>
  <div id="Shop-Info">
    <div class="Shop-one">
      <div class="Shop-tip">
        <div class="Shop-tip-img">
          <img :src="ShopInfo.logo" alt="" />
          <span>{{ ShopInfo.name }}</span>
        </div>
        <div class="Shop-center">
          <div class="Shop-center-left">
            <span>
              <p>{{ ShopInfo.sells }}</p>
              <p>总销量</p>
            </span>
            <span>
              <p>{{ ShopInfo.goodsCount }}</p>
              <p>全部宝贝</p>
            </span>
          </div>
          <div class="Shop-center-rghit">
            <tr class="onspan" v-for="(item, index) in ShopInfo.score" :key="index">
              <td class="name">{{ item.name }}</td>
              <td class="score" :class="{ 'score-better': item.isBetter }">{{ item.score }}</td>
              <td class="better" :class="{ 'better-more': item.isBetter }">
                <span>{{ item.isBetter ? '高' : '低' }}</span>
              </td>
            </tr>
          </div>
        </div>
        <div class="bottom">
          <div class="enter-shop">进店逛逛</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data() {
    return {}
  },
  props: {
    ShopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
#Shop-Info {
  margin-top: 10px;
  margin-bottom: 10px;
}
.Shop-one {
  height: 280px;
  background-color: #fff;
  margin-top: 5px;
  border-radius: 10px;
  padding: 20px 10px 0 10px;
}
.Shop-tip {
  height: 90px;
}
.Shop-tip-img {
  overflow: hidden;
  color: red;
}
.Shop-tip-img > img {
  float: left;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.Shop-tip-img > span {
  display: inline-block;
  line-height: 50px;
  color: #626262;
  margin-left: 20px;
  font-size: 15px;
}
.Shop-center {
  display: flex;
  height: 130px;
  padding: 10px;
}
.Shop-center-left {
  flex: 1;

  display: flex;
  width: 50%;
  height: 90px;
  padding: 10px 0;
}
.Shop-center-left > span {
  float: left;
  display: block;
  flex: 1;
  height: 100%;
}
.Shop-center-left > span > p {
  display: block;
  text-align: center;
  height: 50%;
  line-height: 40px;
}
.Shop-center-left > span > p:nth-child(1) {
  font-size: 18px;
  font-weight: 700;
}
.Shop-center-left > span > p:nth-child(2) {
  font-size: 12px;
  font-weight: 700;
}
.Shop-center-left > span:nth-child(2) {
  border-right: 2px solid #ccc;
}
.Shop-center-rghit {
  flex: 1;
  height: 100%;
}
.Shop-center-rghit .onspan {
  padding-left: 30px;
  display: block;
  height: 33%;
  width: 100%;
}
.Shop-center-rghit .onspan > td {
  padding-right: 7px;
}
.Shop-center-rghit .score {
  color: #5ea732;
  margin-right: 5px;
}

.Shop-center-rghit .score-better {
  color: #f13e3a;
  width: 38px;
  text-align: center;
  margin: 0 10px;
}

.Shop-center-rghit .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.Shop-center-rghit .better-more span {
  background-color: #f13e3a;
}
.bottom {
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.enter-shop {
  margin: 10px auto;
  width: 150px;
  line-height: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #eee;
}
</style>
