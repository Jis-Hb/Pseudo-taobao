<template>
  <div class="box">
    <NavBar class="box-Top">
      <div slot="left">购物车</div>
    </NavBar>

    <img
      class="gifimg"
      v-if="this.$store.state.cartList.length === 0"
      src="~assets/img/gouwu2.png"
      alt=""
    />

    <p v-if="this.$store.state.cartList.length === 0" class="imgfont">空空如也</p>

    <div class="center" v-for="(item, index) in $store.state.cartList" :key="index">
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
          <span class="new-price">${{ item.price }}</span>
          <div v-if="newtexts" @click="newtext" class="new-text" type="text">x{{ item.count }}</div>
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
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'haonme1',
  components: {
    NavBar
  },
  data() {
    return {
      checked: false,
      stepper: 1,
      just: [false, false],
      newinput: false,
      newtexts: true,
      shubmits: {}
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
        .filter((item) => {
          return item.check
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count * 100
        }, 0)
    },
    checkedlength() {
      return `去结算( ${this.$store.state.cartList.filter((item) => item.check).length} )`
    },
    checkedlengthss() {
      return this.$store.state.cartList.filter((item) => item.check).length
    },
    submit() {
      return this.$store.state.cartList.filter((item) => {
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
    checkon(item, index) {},
    checkonn(item) {
      for (let i = 0; i < item.length; i++) {
        if (item[i].check === false) {
          item[i].check = true
        } else {
          item[i].check = false
        }
      }
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
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  position: absolute;
  width: 100vw;
  margin-top: 40px;
  padding-bottom: 110px;
  text-align: center;
  background-color: #f9f9f9;
  height: 100%;
  overflow-y: auto;
  background-color: #f9f9f9;

  .box-p {
    position: absolute;
    top: 5px;
    left: 16px;
  }
  .box-Top {
    background-color: #fafafa;
    border: 1px solid transparent;
    position: fixed;
    z-index: 9999;
    width: 100%;
    top: 0;
    color: #000000;
    font-size: 25px;
    font-weight: 900;
  }

  .center {
    padding: 10px 10px 0 10px;

    .show-box {
      padding: 10px 10px 20px 10px;
      background-color: #fff;
      border-radius: 10px;
      margin-top: 10px;
      box-shadow: 2px 2px 5px 5px rgba(17, 17, 17, 0.027);
      .show-checkTop {
        display: block;
        float: left;
        width: 30px;
      }
      .show-nameTop {
        display: block;
        float: left;
        line-height: 24px;
        height: 24px;
        margin-left: 5px;
        font-weight: 700;
        font-size: 20px;
        color: #090909;
      }
      .show-nameTop::after {
        content: '>';
        margin-left: 10px;
        color: #e1e1e1;
      }
      .new-content {
        position: relative;
        height: 100px;
        margin-top: 45px;
        .new-checkTop {
          position: absolute;
          top: 30px;
          left: 0px;
          width: 30px;
        }
        .new-images {
          position: absolute;
          width: 85px;
          height: 85px;
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
          width: 230px;
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
          left: 150px;
          font-size: 25px;
          color: #e7693d;
          font-weight: 700;
        }
        .new-input {
          position: absolute;
          right: 0;
          bottom: -10px;
          width: 125px;
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
  .gifimg {
    width: 150px;
    height: 200px;
    margin-left: 15px;
    margin-top: 80px;
  }

  .imgfont {
    color: #ff7f00;
    font-size: 25px;
    font-weight: 700;
    margin-right: 25px;
  }
  .bottom {
    .gogogo {
      margin-bottom: 49px;
    }
  }
}
.van-submit-bar__bar {
  background-color: #f9f9f9 !important;
  border-top: 1px solid rgba(105, 105, 105, 0.1);
}
</style>
