<template>
  <div class="container">
    <audio ref="muisc" src="@/assets/music/SendMuisc.mp3"></audio>
    <NavBar class="NavBar">
      <div class="iconfont" slot="left" @click="back">&#xe60e;</div>
      <div class="iconfont NavBarCenter" slot="center">{{ $store.state.InForName }}</div>
      <div class="iconfont NavBarRight" slot="right">&#xe9b9;</div>
    </NavBar>

    <div ref="contentInfoRef" class="contentInfo">
      <transition-group name="van-slide-up">
        <div
          :class="item.id === 1 ? 'Right' : 'Left'"
          v-for="(item, index) in InfoList"
          :key="index"
        >
          <img
            :src="
              item.id === 1
                ? require('@/assets/img/login/Just.jpg')
                : require('@/assets/img/AI.jpg')
            "
            :class="item.id === 1 ? 'Rightimg' : 'Leftimg'"
            alt=""
          />
          <div :class="item.id === 1 ? 'Rightjiantou' : 'Leftjiantou'"></div>
          <p :class="item.id === 1 ? 'Rightinfo' : 'Leftinfo'">{{ item.content }}</p>
        </div>
      </transition-group>
      <!--  <transition-group name="van-slide-up">
        <div class="Left" v-for="(item, index) in LeftInfo" :key="index">
          <img class="img" src="~assets/img/AI.jpg" alt="" />
          <div class="jiantou"></div>
          <span class="info">{{ item }}</span>
        </div>
      </transition-group>  -->
    </div>

    <div class="BottomInFo">
      <span class="iconfont rightIcon">&#xe62f;</span>
      <input
        @keyup.enter="Send"
        @click="ofSetTop"
        v-model.trim="BottomVal"
        class="input"
        type="text"
      />
      <button class="btn" @click="Send">发送</button>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'infor-Click',
  data() {
    return {
      InForName: '',
      BottomVal: '',
      RightImg: 'assets/img/login/Just.jpg',
      LeftImg: 'assets/img/AI.jpg',
      InfoList: []
    }
  },
  components: {
    NavBar
  },
  activated() {},
  created() {
    this.nihao()
  },
  watch: {
    InfoList() {
      this.$store.commit('ClickInfo', this.InfoList[this.InfoList.length - 1].content)
      if (this.$route.path === '/InForClick') return
      this.$store.state.ClickInfo.isShow = this.$store.state.ClickInfo.isShow + 1
    }
  },
  mounted() {},
  methods: {
    back() {
      this.$router.back()
    },
    Send() {
      if (this.BottomVal !== '') {
        this.Muisc()
        this.InfoList.push({ id: 1, content: this.BottomVal })
        this.$nextTick(() => {
          const msg = document.querySelector('.contentInfo')
          msg.scrollTop = msg.scrollHeight
        })
      }
      this.BottomVal = ''
    },
    nihao() {
      this.LeftInfo = []
      const p = new Promise(resolve => {
        setTimeout(() => {
          this.Muisc()
          this.InfoList.push({ id: 2, content: '你好' })
          resolve()
        }, 1000)
      })
      p.then(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            this.Muisc()

            this.InfoList.push({ id: 2, content: '我是炸毛小焦' })

            resolve()
          }, 1000)
        })
      }).then(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            this.Muisc()

            this.InfoList.push({ id: 2, content: '与我沟通吧' })

            resolve()
          }, 1000)
        })
      })
    },
    Muisc() {
      this.$refs.muisc.pause()
      this.$refs.muisc.currentTime = 0
      this.$refs.muisc.play()
    },
    ofSetTop() {}
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .NavBar {
    position: absolute;
    top: 0;
    width: 100% !important;
    background-color: rgba(236, 235, 233, 0.945);
    border-bottom: 1px solid #e2e2e2;
    z-index: 9999;
    .NavBarCenter {
      color: #24211c;
      font-size: 4vw;
      font-weight: 500;
    }
    .NavBarRight {
      font-size: 6vw;
    }
  }
  .contentInfo {
    flex: 1;
    background-color: #ededed;
    display: flex;
    flex-direction: column-reverse;
    overflow: scroll;
    padding-top: 15vw;
    padding-bottom: 15vw;

    .Left {
      display: flex;
      align-items: top;
      justify-content: start;
      padding: 2vw;
      .Leftimg {
        width: 13vw;
        height: 13vw;
        border-radius: 1vw;
      }
      .Leftinfo {
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 0 2vw;
        max-width: 70%;
        padding: 2vw;
        overflow: hidden;
        white-space: normal;
        word-break: break-all;
        border-radius: 2vw;
        color: #242424;
        font-weight: 500;
      }
      .Leftjiantou {
        height: 0;
        border: 2vw solid;
        border-color: transparent #fff transparent transparent;
        position: relative;
        top: 0%;
        right: -0.7%;
      }
    }
    .Right {
      display: flex;
      align-items: top;
      flex-direction: row-reverse;
      justify-content: end;
      padding: 2vw;
      transition: all 1s;
      .Rightinfo {
        background-color: #9eea6a;
        display: flex;
        align-items: center;
        padding: 2vw 2vw;
        max-width: 60%;
        overflow: hidden;
        white-space: normal;
        word-break: break-all;
        border-radius: 2vw;
        color: #242424;
        font-weight: 500;
      }
      .Rightimg {
        width: 13vw;
        height: 13vw;
        border-radius: 1vw;
      }
      .Rightjiantou {
        height: 0;
        border: 2vw solid;
        border-color: transparent transparent transparent #9eea6a;
        position: relative;
        top: 0%;
        left: -0.7%;
      }
    }
  }
  .BottomInFo {
    position: absolute;
    bottom: 0;
    border-top: 1px solid #e2e2e2;
    background-color: rgba(241, 239, 240, 0.945);
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 15vw;
    padding: 0 3vw;
    .rightIcon {
      font-size: 6vw;
    }

    .input {
      width: 70vw;
      height: 10vw;
      border: none;
      border-radius: 2vw;
      margin: 0 3vw;
      padding: 0 2vw;
    }

    .btn {
      background-color: rgba(241, 239, 240, 0.301);
      border: none;
      width: 10vw;
      height: 70%;
      padding: 3vw 0;
      border-radius: 10vw;
    }
    .btn:active {
    }
  }
}
</style>
