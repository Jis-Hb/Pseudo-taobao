<template>
  <div class="Info-content">
    <div class="one">
      <p class="three">
        <span class="three-one">${{ goods.realPrice }}</span>
        <span class="three-two">{{ goods.oldPrice }}</span>
        <span class="three-three" v-if="goods.discount"> {{ goods.discount }} </span>
      </p>
      <p class="two">{{ goods.title }}</p>
      <p class="foter">
        <span class="left">{{ goods.columns[0] }}</span>
        <span class="left">{{ goods.columns[1] }}</span>
        <span class="left">{{ goods.services[goods.services.length - 1].name }}</span>
      </p>
    </div>
    <div>
      <div class="just">
        <div class="tow-one" @click="baozhang">
          <b class="b1">保障:</b>
          <div class="center">
            <span v-for="(item, index) in goods.services.length - 1" :key="index">
              <img :src="goods.services[item - 1].icon" alt="" />
              {{ goods.services[item - 1].name }}
            </span>
          </div>
          <b class="b2">></b>
        </div>
        <div class="tow-three" @click="canshu">
          <b class="three-b1">参数:</b>
          <span class="pinpai">品牌 尺码...</span>
          <b class="three-b2">></b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail1Info',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    canshu() {
      this.$emit('canshu')
    },
    baozhang() {
      this.$emit('baozhang')
    }
  }
}
</script>

<style lang="less" scoped>
.Info-content {
  .one {
    position: relative;
    padding: 0 20px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 15px;
    z-index: 10;
    .three {
      height: 40px;
      line-height: 40px;
      margin-bottom: 8px;
      .three-one {
        font-size: 25px;
        color: #f01226;
        padding-right: 10px;
        font-weight: 500;
      }
      .three-two {
        font-size: 10px;
        text-decoration: line-through;
        padding-right: 20px;
      }
      .three-three {
        padding: 0 15px;
        text-align: center;
        line-height: 25px;
        display: inline-block;
        height: 25px;
        background-color: #fc5231;
        border-radius: 30px;
        color: #fff;
      }
    }
    .two {
      font-size: 15px;
      font-weight: 600;
      padding-bottom: 8px;
    }
    .foter {
      display: flex;
      padding: 20px 0;
      .left {
        flex: 1;
        font-size: 13px;
        color: rgb(190, 189, 189);
        text-align: center;
      }
    }
  }
  .just {
    background-color: #fff;
    border-radius: 10px;
    .tow-one {
      height: 40px;
      margin-top: 10px;
      text-align: left;
      font-size: 12px;
      overflow: hidden;
      border-top: #eee 1px solid;
      padding: 0 15px;
      position: relative;
      .b1 {
        float: left;
        line-height: 40px;
        font-size: 15px;
        color: #9b9b9b;
        font-weight: 600;
      }
      .b2 {
        position: absolute;
        right: 10px;
        line-height: 40px;
        margin-left: 30px;
        color: #9b9b9b;
        font-size: 16px;
        z-index: 999;
      }
      .center {
        width: 300px;
        height: 100%;
        float: left;
        display: flex;
        span {
          flex: 1;
          padding-left: 20px;
          line-height: 40px;
          color: #252525;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
    .tow-three {
      height: 40px;
      padding: 0 15px;
      position: relative;
      .three-b1 {
        float: left;
        line-height: 40px;
        font-size: 15px;
        color: #9b9b9b;
        font-weight: 600;
      }
      .pinpai {
        line-height: 40px;
        padding-left: 20px;
        font-size: 13px;
        color: #252525;
      }
      .three-b2 {
        position: absolute;
        right: 10px;
        line-height: 40px;
        margin-left: 30px;
        color: #9b9b9b;
        font-size: 16px;
        z-index: 999;
      }
    }
  }
}
</style>
