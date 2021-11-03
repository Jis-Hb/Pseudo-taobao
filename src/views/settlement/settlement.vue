<template>
  <div class="settlement">
    <topNav @click.native="blcak"></topNav>
    <div class="settle">
      <div class="shouhuo" @click="shouhuodizhi" v-if="this.$store.state.dingdan.id === undefined">
        <img src="../../assets/img/shouhuo.jpg" alt="" />
        <p class="shouhuo-p">请填写收货地址</p>
      </div>

      <div @click="shouhuodizhi" class="dingdan" v-if="this.$store.state.dingdan.id !== undefined">
        <img src="~assets/img/shouhuo.jpg" alt="" />
        <span class="shouhuo-p">{{ $store.state.dingdan.name }}</span>
        <span class="dingdan-tel"> {{ $store.state.dingdan.tel }}</span>
        <span class="dingdan-address">{{ $store.state.dingdan.address }}</span>
      </div>
      <div class="content" v-for="(item, index) in $store.state.submitList" :key="index">
        <p class="content-name">{{ item.name }}</p>
        <div class="content-login">
          <img class="login-images" :src="item.images" alt="" />
          <p class="login-p">{{ item.title }}</p>
          <p class="login-desc">{{ item.desc }}</p>
          <span class="login-price">${{ item.price }}</span>
          <span class="login-count">x{{ item.count }}</span>
          <span class="login-counted">购买数量</span>
          <van-field class="new-input" name="stepper">
            <template #input>
              <van-stepper v-model="item.count" />
            </template>
          </van-field>
        </div>
      </div>
    </div>
    <van-submit-bar class="tijiao" :price="Price" button-text="提交订单" @submit="tijiao" />
  </div>
</template>

<script>
import topNav from './settlen/TopNav.vue'

export default {
  name: 'settlement',
  data() {
    return {
      shopObj: {},
      homeCount: 0
    }
  },
  components: {
    topNav
  },
  computed: {
    Price() {
      return this.$store.state.submitList.reduce((preValue, item) => {
        return preValue + item.price * item.count * 100
      }, 0)
    }
  },
  methods: {
    blcak() {
      // console.log(this.$store.state.dingdan)
      this.$router.go(-1)
    },
    shouhuodizhi() {
      this.$router.push('/pushdizhi')
    },
    tijiao() {
      if (this.$store.state.dingdan.id !== undefined) {
        this.shopObj = this.$store.state.submitList
        this.shopObj.oldPrice = this.Price
        this.homeCount += 1
        // this.shopObj.shouhuo = this.homeCount
        this.shopObj.pingjia = this.homeCount
        console.log(this.shopObj)
        this.$store.commit('shopObj', this.shopObj)
        this.$router.push('/my')
        this.$toast.success('支付成功')
        this.$router.push('/my')
      } else {
        this.$toast.fail('请添加地址')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.settlement {
  margin-bottom: 55px;
  .tijiao {
    z-index: 9999;
  }
  .settle {
    padding: 0 15px;
    .shouhuo {
      height: 50px;
      background-color: #fff;
      margin-top: 15px;
      border-radius: 10px;

      img {
        float: left;
        width: 40px;
        height: 40px;
        margin-left: 10px;
        margin-top: 5px;
      }
      .shouhuo-p {
        float: left;
        width: 280px;
        line-height: 50px;
        margin-left: 30px;
      }
      .shouhuo-p::after {
        content: '>';
        color: #c5c5c5;
        float: right;
        font-size: 18px;
        margin-left: 10px;
      }
    }
    .dingdan {
      height: 100px;
      background-color: #fff;
      border-radius: 10px;
      padding: 15px 15px 15px 5px;
      position: relative;
      img {
        position: absolute;
        margin-top: 15px;
      }
      .shouhuo-p {
        position: absolute;
        left: 70px;
        top: 20px;
        color: #303030;
        font-weight: 600;
      }
      .dingdan-tel {
        position: absolute;
        left: 150px;
        top: 20px;
        color: #959595;
      }
      .dingdan-address {
        position: absolute;
        top: 50px;
        left: 70px;
        width: 280px;
      }
    }
    .content {
      margin-top: 10px;
      height: 200px;
      background-color: #fff;
      border-radius: 15px;
      padding: 10px;
      .content-name {
        height: 30px;
        line-height: 30px;
        color: #3f3f3f;
        font-weight: 600;
      }

      .content-login {
        margin-top: 15px;
        position: relative;
        height: 110px;
        padding: 0 10px;
        .login-images {
          width: 100px;
          height: 110px;
          border-radius: 10px;
        }
        .login-p {
          position: absolute;
          width: 180px;
          height: 35px;
          top: 0px;
          right: 40px;
          overflow: hidden;
        }
        .login-price {
          position: absolute;
          width: 20px;
          right: 15px;
          top: 5px;
          color: #000000;
          font-size: 15px;
        }
        .login-count {
          position: absolute;
          right: 15px;
          top: 25px;
          color: #adadad;
          font-size: 15px;
        }
        .login-desc {
          position: absolute;
          width: 150px;
          height: 25px;
          top: 40px;
          right: 70px;
          overflow: hidden;
          font-size: 11px;
          color: #adadad;
        }
        .login-counted {
          position: absolute;
          bottom: 0;
          left: 130px;
        }
        .new-input {
          z-index: 9;
          position: absolute;
          bottom: -5px;
          width: 125px;
          right: 10px;
          height: 40px;
        }
      }
      .content-price {
        height: 50px;
      }
    }
  }
}
</style>
