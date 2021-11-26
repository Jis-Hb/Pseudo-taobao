<template>
  <div class="boom-box">
    <div class="login-contner">
      <div class="contner">
        <div class="box-left">
          <img
            src="http://img.alicdn.com/sns_logo/i2/O1CN01FCs34N28i1EcUFY3J_!!0-mytaobao.jpg_790x10000.jpg"
            alt=""
          />
        </div>
        <div class="box-right">
          <span class="login-name"
            >{{ Name }}
            <span @click="$router.push('/setting')" class="iconfont NameSpan">&#xe70f;</span>
          </span>
          <p class="login-text">{{ Info }}。</p>
          <div class="login-box">
            <span class="login-guanzu"> 关注&nbsp; <span>0</span></span>
            <span class="login-fensi"> 粉丝&nbsp; <span>0</span></span>
          </div>
        </div>
      </div>
      <div class="info-top">
        <span class="TopSpan info-top-sc iconfont ">&#xe617;<span class="onSpan">收藏</span></span>
        <span class="TopSpan info-top-dy iconfont "
          >&#xe618;<span class="onSpan">订阅店铺</span></span
        >
        <span class="TopSpan info-top-zj iconfont ">&#xe61b;<span class="onSpan">足迹</span></span>
        <span class="TopSpan info-top-zj iconfont ">&#xe8c0;<span class="onSpan">消息</span></span>
      </div>
    </div>
    <div class="center-Content">
      <div class="center-info">
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
    </div>

    <!-- 个性签名弹出层 -->
    <!-- <van-popup v-model="infoshow" position="top" :style="{ height: '30%' }">
      <info @InfoOver="InfoOver"></info>
    </van-popup>
    <van-popup v-model="getName" position="top" :style="{ height: '30%' }">
      <Name @NameOver="NameOver"></Name>
    </van-popup> -->
  </div>
</template>

<script>
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
    }
    // offf() {
    //   this.infoshow = true
    // },
    // InfoOver(value) {
    //   this.infoshow = false
    //   this.Info = value
    // },
    // getNameClick() {
    //   this.getName = true
    // },
    // NameOver(value) {
    //   this.getName = false
    //   this.Name = value
    // }
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
.boom-box {
  width: 100%;
  height: 100%;
  // padding: 0 10px;
  background-color: #eee;
  .login-contner {
    background: linear-gradient(
      to bottom,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d4614d,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d4614d,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d4614d,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d46551,
      #d4614d,
      #e4b0a6,
      #ebd1ce,
      #f1f1f1
    );
    height: 80vw;
    .contner {
      display: flex;
      width: 100%;
      height: 40vw;
      color: #fff;
      font-size: 19px;
      .box-left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 40vw;
        text-align: center;
        img {
          width: 80%;
          height: 60%;
          border-radius: 75px;
        }
      }
      .box-right {
        height: 40vw;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .login-name {
          color: #fff;
          height: 8vw;
          line-height: 8vw;
          font-weight: 500;
          .NameSpan {
            font-family: 'iconfont';
            content: '';
            position: absolute;
            right: 2vw;
            font-size: 8vw;
            color: #fff;
          }
        }

        .login-text {
          height: 8vw;
          line-height: 8vw;
          color: #fccfc0;
          font-size: 13px;
        }

        .login-text::after {
          font-family: 'iconfont';
          content: '';
          color: #fccfc0;
        }
        .login-box {
          .login-guanzu {
            border-right: 1px solid #fccfc0;
            font-size: 15px;
            color: #fccfc0;
            padding-right: 3vw;
            span {
              color: #fccfc0;
            }
          }
          .login-fensi {
            font-size: 15px;
            color: #fccfc0;
            margin-left: 3vw;

            span {
              color: #fccfc0;
            }
          }
        }
      }
    }
    .info-top {
      display: flex;
      padding: 0 10vw;
      justify-content: space-between;
      height: 15vw;
      color: #fdf8fc;
      .TopSpan {
        display: flex;
        font-size: 7vw;
        flex-direction: column;
        align-items: center;
        color: #fdf8fc;
        .onSpan {
          margin-top: 2vw;
          font-size: 4vw;
        }
      }
    }
  }
  .center-Content {
    position: relative;
    top: -20vw;
    padding: 0 2vw;
    .center-info {
      background-color: #fff;
      border-radius: 15px;
      padding: 0 2.6vw 2.6vw 2.6vw;

      .info-test {
        height: 10.6vw;
        line-height: 10.6vw;
        margin-top: 1.3vw;
        margin-bottom: 1.3vw;
        padding: 0 1.3vw;
        .info-test-dd {
          float: left;
          color: #080808;
          font-weight: 600;
          font-size: 4vw;
        }
        .info-test-bb {
          float: right;
          font-size: 4vw;
          color: #979797;
        }
        .info-test-bb::after {
          font-family: 'iconfont';
          content: '';
          margin-left: 2.6vw;
          color: #979797;
        }
      }
      .info-logo {
        display: flex;
        height: 17.3vw;
        line-height: 17.3vw;
        .login-5 {
          flex: 1;
          position: relative;
          text-align: center;
          .xbox-logo {
            position: absolute;
            top: 0.8vw;
            right: 2.4vw;
            width: 4.8vw;
            height: 4.8vw;
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
        padding: 2.1vw;
        margin-top: 6.6vw;
        border-radius: 4vw;
        height: 40vw;
        .vant-1 {
          padding: 5.3vw 4vw 14vw 4vw;
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
}
</style>
