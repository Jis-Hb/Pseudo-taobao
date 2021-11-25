<template>
  <div class="box">
    <NoShopTop v-if="this.$store.state.cartList.length === 0"></NoShopTop>
    <ShopTop v-if="this.$store.state.cartList.length !== 0"></ShopTop>
    <div class="No" v-if="this.$store.state.cartList.length === 0">
      <img class="NoImg" src="~assets/img/No.jpg" alt="" />
      <span class="NoSpan1">购物车竟然是空的</span>
      <span class="NoSpan2">再忙，也要记得买点什么犒劳自己~</span>
    </div>
    <div class="content" v-for="(item, index) in $store.state.cartList" :key="index">
      <div class="center">
        <div class="show-box">
          <van-checkbox
            class="show-checkTop"
            @click="checkon($store.state.cartList, index)"
            v-model="item.check"
            icon-size="24px"
          ></van-checkbox>
          <p class="show-nameTop">{{ item.name }}</p>
          <div class="new-content">
            <van-checkbox
              class="new-checkTop"
              @click="checkon($store.state.cartList, index)"
              v-model="item.check"
              icon-size="24px"
            ></van-checkbox>
            <img class="new-images" :src="item.images" alt="" />
            <p class="new-title">{{ item.title }}</p>
            <p class="new-desc">{{ item.desc }}</p>
            <span class="new-price"><span class="onPrice">￥</span>{{ item.price }}</span>
            <div v-if="newtexts" @click="newtext" class="new-text" type="text">
              x{{ item.count }}
            </div>
            <van-field class="new-input" name="stepper">
              <template #input>
                <van-stepper v-if="newinput" v-model="item.count" />
              </template>
            </van-field>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="left">
          <van-submit-bar
            class="gogogo"
            decimal-length="2"
            :price="showPrice"
            :button-text="checkedlength"
            @submit="jiesuan"
          >
            <van-checkbox @click="checkonn($store.state.cartList)" v-model="checked"
              >全选</van-checkbox
            >
          </van-submit-bar>
        </div>
      </div>
    </div>
    <div class="tuijian">
      <div class="tuijianTop">→ 你可能还喜欢 ←</div>
      <GoodList :goods="GoodList"></GoodList>
    </div>
    <!-- <img
      class="gifimg"
      v-if="this.$store.state.cartList.length === 0"
      src="~assets/img/gouwu2.png"
      alt=""
    />

    <p v-if="this.$store.state.cartList.length === 0" class="imgfont">空空如也</p> -->
  </div>
</template>

<script>
import NoShopTop from './Shoping/NoShop-Top'
import ShopTop from './Shoping/Shop-Top'
import GoodList from 'components/content/goods/GoodsList.vue'
import { getHomeGoods } from 'network/home'

export default {
  name: 'haonme1',
  components: {
    ShopTop,
    NoShopTop,
    GoodList
  },
  data() {
    return {
      checked: false,
      stepper: 1,
      just: [false, false],
      newinput: false,
      newtexts: true,
      shubmits: {},
      GoodList: []
    }
  },
  creaed() {},
  mounted() {
    window.addEventListener('scroll', () => {
      this.newinput = false
      this.newtexts = true
    })
  },
  computed: {
    showPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.check
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count * 100
        }, 0)
    },
    checkedlength() {
      return `去结算( ${this.$store.state.cartList.filter(item => item.check).length} )`
    },
    checkedlengthss() {
      return this.$store.state.cartList.filter(item => item.check).length
    },
    submit() {
      return this.$store.state.cartList.filter(item => {
        return item.check
      })
    }
  },

  methods: {
    jis(item) {
      item.count++
      this.showPrice = item.price * 100
      this.showPrice = this.showPrice * item.count
    },
    jiss(item, index) {
      if (this.just[index]) {
        this.showPrice += item.price * 100
        this.showPrice = this.showPrice * item.count
      } else {
        this.showPrice = 0
      }
    },
    minjis(item) {
      if (item.count !== 1) item.count--

      this.showPrice = item.price * 100
      this.showPrice = this.showPrice * item.count
    },
    newtext() {
      this.newinput = true
      this.newtexts = false
    },
    checkon(item, index) {
      if (item.findIndex(item1 => item1.check === false) === -1) {
        this.checked = true
      } else {
        this.checked = false
      }
    },
    checkonn(item) {
      // console.log(item)
      // for (let i = 0; i < item.length; i++) {
      //   if (item[i].check === false) {
      //     item[i].check = true
      //   } else {
      //     item[i].check = false
      //   }
      // }
      item.forEach((item, index) => {
        console.log(item.check)
        if (this.checked === true) {
          item.check = true
        } else {
          item.check = false
        }
      })
    },
    jiesuan() {
      this.shubmits = this.submit
      this.shubmits.countPrice = this.showPrice
      this.shubmits.lengthss = this.checkedlengthss
      this.$store.commit('addSubmit', this.shubmits)
      if (this.shubmits.length >= 1) {
        this.$router.push('/settlement')
      } else {
        this.$toast.fail('您没有选中需要购买的商品')
      }
    },
    getHomeGoods() {
      getHomeGoods('pop', 1).then(res => {
        this.GoodList = res.data.data.list
      })
    }
  },
  created() {
    this.getHomeGoods()
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  margin: 0;
  background-color: #f0f0f0;
  .No {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30vw;
    .NoImg {
      margin-top: 3vw;
      width: 80px;
      height: 80px;
      margin-bottom: 3vw;
    }
    .NoSpan1 {
      color: #6d6d6d;
      margin-bottom: 2vw;
    }
    .NoSpan2 {
      color: #9a9a9a;
    }
  }
  .content {
    position: relative;
    top: -25vw;
    margin: 0 2vw;
    margin-top: 2vw;
    background-color: #fff;
    border-radius: 15px;
    padding: 10px;
    .gifimg {
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -25%);
      width: 150px;
      height: 200px;
    }
    .imgfont {
      position: absolute;
      color: #ff7f00;
      font-size: 25px;
      top: 50%;
      left: 46%;
      transform: translate(-50%, -50%);
      font-weight: 500;
    }
    .center {
      .show-box {
        padding: 3vw 0;
        background-color: #fff;
        margin-bottom: 1vw;

        .show-checkTop {
          display: block;
          float: left;
          width: 30px;
        }
        .show-nameTop {
          display: block;
          float: left;
          line-height: 7vw;
          height: 7vw;
          margin-left: 5px;
          font-weight: 700;
          font-size: 20px;
          color: #090909;
        }
        .show-nameTop::before {
          font-family: 'iconfont';
          content: '';
          color: #ed5d18;
          font-size: 5vw;
          margin-right: 1vw;
        }
        .show-nameTop::after {
          font-family: 'iconfont';
          content: '';
          font-size: 4vw;
          margin-left: 10px;
          color: #d1d1d1;
        }
        .new-content {
          position: relative;
          height: 100px;
          margin-top: 45px;
          margin-bottom: 5vw;

          .new-checkTop {
            position: absolute;
            top: 12vw;
            left: 0px;
            width: 30px;
          }
          .new-images {
            position: absolute;
            width: 26vw;
            height: 27vw;
            border-radius: 10px;
            top: 7px;
            left: 30px;
          }
          .new-title {
            position: absolute;
            height: 25px;
            top: 10px;
            right: 0px;
            line-height: 25px;
            overflow: hidden;
            width: 55vw;
            color: #090909;
            font-size: 17px;
            font-weight: 500;
          }
          .new-desc {
            position: absolute;
            height: 25px;
            line-height: 25px;
            top: 35px;
            right: 0;
            width: 190px;
            overflow: hidden;
            font-size: 12px;
            color: #c8c8c8;
          }
          .new-price {
            position: absolute;
            bottom: 0px;
            left: 37vw;
            font-size: 25px;
            color: #ed5d18;
            font-weight: 700;
            .onPrice {
              font-size: 12px;
            }
          }
          .new-input {
            position: absolute;
            right: 0;
            bottom: -10px;
            width: 35vw;
          }
          .new-text {
            position: absolute;
            z-index: 99;
            right: 48px;
            bottom: 1px;
            width: 30px;
            height: 25px;
            line-height: 23px;
            border-radius: 8px;
            text-align: center;
            background-color: #fff;
            border: 1px solid #ccc;
          }
        }
      }
    }

    .bottom {
      .gogogo {
        margin-bottom: 44px;
      }
    }
  }
  .tuijian {
    margin-top: 5vw;
    width: 100%;
    height: 100%;
    margin-bottom: 20vw;
    .tuijianTop {
      margin-top: -27vw;
      height: 13vw;
      line-height: 13vw;
      text-align: center;
      color: #e55526;
      font-weight: 500;
    }
  }
}
.van-submit-bar__bar {
  background-color: #f9f9f9 !important;
  border-top: 1px solid rgba(105, 105, 105, 0.1);
}
</style>
