<template>
  <div class="showping-content">
    <div class="top">
      <img class="top-img" :src="topimg[0]" alt="" />
      <span class="top-title">{{ product.title }}</span>
      <span class="top-price">${{ product.realPrice }}</span>
    </div>
    <van-button class="btn" type="default" @click="pushshowping">加入购物车</van-button>
    <van-button class="btn1" type="default" @click="maxcount">+</van-button>
    <div class="count">x{{ count }}</div>
    <van-button class="btn2" type="default" @click="mincount">-</van-button>
  </div>
</template>

<script>
export default {
  name: 'showping',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    },
    topimg: {
      type: Array,
      default() {
        return []
      }
    },
    iid: {
      type: String,
      default: ''
    },
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      count: 1,
      check: false
    }
  },
  created() {},
  deactivated() {
    this.count = 1
  },
  methods: {
    maxcount() {
      if (this.count < 50) {
        this.count += 1
      }
    },
    mincount() {
      if (this.count > 1) {
        this.count--
      } else {
        this.$toast.fail('最少一件')
      }
    },
    pushshowping() {
      if (this.count > 0) {
        const Objproduct = {}
        Objproduct.images = this.topimg[0]
        Objproduct.title = this.product.title
        Objproduct.desc = this.product.desc
        Objproduct.price = Number(this.product.realPrice)
        Objproduct.iid = this.iid
        Objproduct.name = this.shop.name
        parseInt(this.count)
        Objproduct.count = this.count
        Objproduct.check = this.check
        // console.log(Objproduct)

        this.$store.commit('addCart', Objproduct)
        this.$router.push('/cart')
        this.$toast.success('加入成功')
      } else {
      }
    }
  }
}
</script>

<style lang="less" scoped>
.showping-content {
  position: relative;
  height: 100%;
  .top {
    position: relative;

    height: 125px;
    .top-img {
      margin: 10px;
      float: left;
      width: 120px;
      height: 100%;
      border-radius: 10px;
    }
    .top-desc {
      height: 30px;
      background-color: blue;
      position: absolute;
      top: 60px;
    }
    .top-title {
      position: absolute;
      top: 0;
      left: 130px;
      height: 45px;
      margin-top: 10px;
      padding: 12px;
      font-size: 15px;
      text-overflow: ellipsis;
      /* 弹性伸缩盒子模型显示 */
      display: -webkit-box;
      /* 限制在一个块元素显示的文本行数 */
      -webkit-line-clamp: 2;
      /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .top-price {
      position: absolute;
      left: 130px;
      bottom: 0px;
      margin-left: 20px;
      color: #f01226;
      font-size: 30px;
      font-weight: 700;
    }
  }
  .btn {
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 400px;
    background-color: #ff4224;
    border-radius: 20px;
  }
  .btn1 {
    position: absolute;
    right: 0;
    border-radius: 50%;
    bottom: 80px;
    background-color: #fff;
    width: 40px;
    height: 40px;
  }
  .btn2 {
    position: absolute;
    right: 80px;
    bottom: 80px;

    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .count {
    position: absolute;
    right: 40px;
    bottom: 80px;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
  }
}
</style>
