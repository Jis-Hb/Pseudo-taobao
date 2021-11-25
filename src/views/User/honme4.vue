<template>
  <div class="boom-box">
    <div class="login-contner">
      <div class="box-left">
        <img
          src="http://img.alicdn.com/sns_logo/i2/O1CN01FCs34N28i1EcUFY3J_!!0-mytaobao.jpg_790x10000.jpg"
          alt=""
        />
      </div>
      <div class="box-right">
        <span class="login-name" @click="getNameClick">{{ Name }}</span>
        <p class="login-text" @click="offf">{{ Info }}</p>
        <span class="login-guanzu"><span>0</span> 关注</span>
        <span class="login-fensi"><span>0</span> 粉丝</span>
      </div>
    </div>
    <div class="center-info">
      <div class="info-top">
        <span class="info-top-sc">收藏<span>0</span></span>
        <span class="info-top-dy">订阅店铺<span>0</span></span>
        <span class="info-top-zj">足迹<span>0</span></span>
      </div>
      <div class="info-center" @click="moveShop">
        <div class="info-test">
          <span class="info-test-dd">我的订单</span>
          <span class="info-test-bb">查看全部</span>
        </div>
        <div class="info-logo">
          <span class="login-5">
            <div class="xbox-logo" v-if="fukuan !== 0">
              <span>{{ fukuan }}</span>
            </div>
            <svg class="icon logo1" aria-hidden="true">
              <use xlink:href="#icon-taobaozhongchoudisiqiqianbao"></use>
            </svg>
            <span>待付款</span>
          </span>
          <span class="login-5">
            <div class="xbox-logo" v-if="fahuo !== 0">
              <span>{{ fahuo }}</span>
            </div>
            <svg class="icon logo1" aria-hidden="true">
              <use xlink:href="#icon-taobaogouwuche_ios"></use>
            </svg>
            <span>待发货</span>
          </span>
          <span class="login-5">
            <div class="xbox-logo" v-if="shouhuo !== 0">
              <span>{{ shouhuo }}</span>
            </div>
            <svg class="icon logo1" aria-hidden="true">
              <use xlink:href="#icon-taobaozhongchoudisiqiqiche"></use>
            </svg>
            <span>待收货</span>
          </span>
          <span class="login-5">
            <div class="xbox-logo" v-if="pingjia !== 0">
              <span>{{ pingjia }}</span>
            </div>
            <svg class="icon logo1" aria-hidden="true">
              <use xlink:href="#icon-daipingjia"></use>
            </svg>
            <span>待评价</span>
          </span>
          <span class="login-5">
            <div class="xbox-logo" v-if="tuikuan !== 0">
              <span>{{ tuikuan }}</span>
            </div>
            <svg class="icon logo1" aria-hidden="true">
              <use xlink:href="#icon-tuikuan"></use>
            </svg>
            <span>退款/售后</span>
          </span>
        </div>
      </div>
    </div>
    <div class="boom2-box">
      <van-panel title="信息" desc="炸毛小焦" status="欢迎" class="vantput">
        <div class="vant-1">
          欢迎访问炸毛小焦
          <p class="info"><span>注意:</span>已支持修改名称,个性签名</p>
        </div>
      </van-panel>
      <van-cell title="退出登入" size="large" class="tuichu">
        <van-button class="tuichubtn" @click="remove">退出</van-button>
      </van-cell>
    </div>

    <!-- 个性签名弹出层 -->
    <van-popup v-model="infoshow" position="top" :style="{ height: '30%' }">
      <info @InfoOver="InfoOver"></info>
    </van-popup>
    <van-popup v-model="getName" position="top" :style="{ height: '30%' }">
      <Name @NameOver="NameOver"></Name>
    </van-popup>
  </div>
</template>

<script>
import info from './ShopCount/info.vue'
import Name from './ShopCount/Name.vue'

export default {
  name: 'haonme4',
  methods: {
    remove() {
      this.$router.push('/login')
      localStorage.removeItem('token')
      localStorage.removeItem('info')
      localStorage.removeItem('username')
      localStorage.removeItem('name')
    },
    moveShop() {
      this.$router.push('/dingdan')
    },
    offf() {
      this.infoshow = true
    },
    InfoOver(value) {
      this.infoshow = false
      this.Info = value
    },
    getNameClick() {
      this.getName = true
    },
    NameOver(value) {
      this.getName = false
      this.Name = value
    }
  },
  data() {
    return {
      fukuan: 0,
      fahuo: 0,
      shouhuo: 0,
      pingjia: 0,
      tuikuan: 0,
      show: false,
      username: '',
      Info: '',
      infoshow: false,
      getName: false,
      Name: ''
    }
  },
  created() {},
  components: {
    info,
    Name
  },
  activated() {
    const token = localStorage.getItem('token')

    if (token !== '') {
      this.username = localStorage.getItem('username')
      this.Info = localStorage.getItem('info')
      this.Name = localStorage.getItem('name')
    } else {
      localStorage.removeItem('token')
    }
    if (this.$store.state.shopObj.pingjia) {
      this.pingjia = this.$store.state.shopObj.pingjia
    }
  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #eee;
}
.boom-box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 10px;
  overflow-y: auto;
  background-color: #eee;
  .login-contner {
    background-color: #eeeeee;
    width: 100%;
    height: 180px !important;
    color: #fff;
    font-size: 19px;
    .box-left {
      width: 30%;
      height: 100%;
      float: left;

      img {
        width: 100px;
        height: 100px;
        margin-top: 40px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 75px;
      }
    }
    .box-right {
      float: left;
      height: 100%;
      width: 70%;
      padding: 35px 0px 35px 35px;
      .login-name {
        color: #080808;
        font-weight: 700;
        margin-bottom: 5vw;
      }
      .login-name::after {
        font-family: 'iconfont';
        content: '';
        font-size: 13px;
        margin-left: 15px;
        color: #080808;
      }

      .login-text {
        margin: 5vw 0;

        color: #9f9f9f;
        font-size: 13px;
      }

      .login-text::after {
        font-family: 'iconfont';
        content: '';
        margin-left: 15px;
        color: #080808;
      }
      .login-guanzu {
        border-right: 1px solid #9f9f9f;
        font-size: 15px;
        color: #9f9f9f;
        padding-right: 3vw;
        span {
          color: #080808;
        }
      }
      .login-fensi {
        font-size: 15px;
        color: #9f9f9f;
        margin-left: 3vw;

        span {
          color: #080808;
        }
      }
    }
  }
  .center-info {
    background-color: #fff;
    border-radius: 15px;
    padding: 0 10px 10px 10px;

    .info-top {
      height: 55px;
      line-height: 55px;
      display: flex;
      border-bottom: 1px solid #f6f6f6;

      text-align: center;
      .info-top-sc::before {
        font-family: 'iconfont';
        content: '';
        margin-right: 10px;
        margin-left: 5px;
      }
      .info-top-dy::before {
        font-family: 'iconfont';
        content: '';
        margin-right: 5px;
        margin-left: 5px;
      }
      .info-top-zj::before {
        font-family: 'iconfont';
        content: '';
        margin-right: 10px;
        margin-left: 5px;
      }
      .info-top-sc {
        display: flex;
        flex: 1;
        color: #080808;
        font-weight: 600;
        span {
          flex: 1;
          padding: 0 1vw;
          color: #6a6a6a;
          font-weight: 300;
          border-right: 1px solid #f6f6f6;
        }
      }
      .info-top-dy {
        flex: 1.3;
        color: #080808;
        font-weight: 600;
        display: flex;
        span {
          flex: 1;
          align-items: center;
          color: #6a6a6a;
          font-weight: 300;
          border-right: 1px solid #f6f6f6;
        }
      }
      .info-top-zj {
        display: flex;
        width: 30%;
        margin-left: 10px;
        color: #080808;
        font-weight: 600;

        span {
          flex: 1;
          color: #6a6a6a;
          font-weight: 300;
          width: 30px;
        }
      }
    }
    .info-test {
      height: 40px;
      line-height: 40px;
      margin-top: 5px;
      margin-bottom: 5px;
      padding: 0 5px;
      .info-test-dd {
        float: left;
        color: #080808;
        font-weight: 600;
        font-size: 15px;
      }
      .info-test-bb {
        float: right;
        font-size: 15px;
        color: #979797;
      }
      .info-test-bb::after {
        font-family: 'iconfont';
        content: '';
        margin-left: 10px;
        color: #979797;
      }
    }
    .info-logo {
      display: flex;
      height: 65px;
      line-height: 65px;
      .login-5 {
        flex: 1;
        position: relative;
        text-align: center;
        .xbox-logo {
          position: absolute;
          top: -3px;
          right: 9px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid #dc7a4b;
          span {
            text-align: center;
            position: absolute;
            top: -11px;
            right: 1px;
            color: #dc7a4b;
          }
        }
        .logo1 {
          font-size: 28px;
          width: 100%;
          height: 25px;
          float: left;
          line-height: 25px;
          margin-top: 5px;
          color: #141414;
        }
        span {
          text-align: center;
          font-size: 15px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          float: left;
          color: #717171;
        }
      }
    }
  }
  .boom2-box {
    .vantput {
      padding: 8px;
      margin-top: 25px;
      border-radius: 15px;
      height: 150px;
      .vant-1 {
        padding: 20px 15px 15px 15px;
        .info {
          margin-top: 5px;
          span {
            color: #f10a87;
            font-weight: 500;
          }
        }
      }
    }
    .tuichu {
      margin-top: 15px;
      border-radius: 15px;
      .tuichubtn {
        border-radius: 15px;
        background-color: #1d82fe;
        color: #fff;
        height: 35px;
        width: 85px;
      }
    }
  }
}
</style>
