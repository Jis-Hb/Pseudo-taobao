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
        <div class="infos">
          <span class="shouhuo-p">{{ $store.state.dingdan.name }}</span>
          <span class="dingdan-tel"> {{ $store.state.dingdan.tel }}</span>
        </div>
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

    <transition name="van-fade">
      <div ref="zhezhaoRef" class="zhezhao" @click="zhezhaoClick($event)" v-if="show">
        <!-- 验证密码 -->
        <!-- 密码输入框 -->
        <div class="div">
          <van-password-input
            class="PaawordInput"
            :gutter="5"
            :value="value"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
            :show="showKeyboard"
            ref="InputRef"
          />
        </div>

        <van-number-keyboard
          ref="NumberRef"
          class="numberkeyboard"
          v-model="value"
          @input="Over"
          @hide="show = false"
          :show="showKeyboard"
          @blur="showKeyboard = false"
        />
        <!-- 数字键盘 -->
      </div>
    </transition>
  </div>
</template>

<script>
import topNav from './settlen/TopNav.vue'

export default {
  name: 'settlement',
  data() {
    return {
      shopObj: {},
      homeCount: 0,
      value: '',
      showKeyboard: false,
      show: false
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
    zhezhaoClick(ev) {
      if (ev.target === this.$refs.zhezhaoRef) {
        this.show = false
      }
    },
    showON(e) {
      console.log(e)
    },
    Over(e) {
      setTimeout(() => {
        if (this.value === '123456') {
          this.show = false
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
        } else if (this.value.length === 6 && this.value !== '123456') {
          this.show = false
          this.value = ''
          this.$toast.fail('密码错误')
        }
      }, 0)
    },
    tijiao() {
      this.show = true
      this.$toast.fail('密码123456')
      if (this.$store.state.dingdan.id !== undefined) {
      } else {
        this.show = false
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

      .infos {
        margin-top: 10px;
        display: flex;
        height: 20px;
        padding-left: 65px;
        .shouhuo-p {
          color: #303030;
          font-weight: 600;
        }
        .dingdan-tel {
          margin-left: 20px;
          color: #959595;
        }
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
          width: 90px;
          height: 100px;
          border-radius: 10px;
        }
        .login-p {
          position: absolute;
          width: 170px;
          height: 34px;
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
          width: 130px;
          height: 24px;
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
.zhezhao {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(246, 246, 246, 0.966);
  z-index: 99999;
  .PaawordInput {
    position: absolute;
    top: 25vw;
    z-index: 99999;
  }
  .numberkeyboard {
    position: absolute;
    bottom: 0;
    z-index: 99999;
  }
}
.van-password-input__security li {
  background-color: rgba(0, 0, 0, 0.226);
}
</style>
