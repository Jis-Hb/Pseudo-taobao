<template>
  <div class="contener">
    <NavBar class="NavBar1">
      <div class="iconfont" slot="left" @click="back">&#xe60e;</div>
      <div class="iconfont NavBarCenter" slot="center">设置</div>
      <div class="iconfont NavBarRight" slot="right">&#xe9b9;</div>
    </NavBar>
    <div class="content">
      <div class="infor" @click="$router.push('/Change-info')">
        <div class="imgs">
          <img
            src="http://img.alicdn.com/sns_logo/i2/O1CN01FCs34N28i1EcUFY3J_!!0-mytaobao.jpg_790x10000.jpg"
            alt=""
          />
        </div>
        <div class="info">
          <p class="p1">11{{ username }}</p>
          <p class="p2">炸毛账号:&nbsp;{{ name }}</p>
        </div>
      </div>
    </div>
    <div class="back">
      <van-cell title="退出登入" size="large" class="tuichu">
        <van-button class="tuichubtn" @click="remove">退出</van-button>
      </van-cell>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

export default {
  name: 'setting',
  data() {
    return {
      username: '',
      name: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    back() {
      this.$router.back()
    },
    remove() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  activated() {
    this.username = localStorage.getItem('username')
    this.name = localStorage.getItem('name')
  }
}
</script>

<style lang="less" scoped>
.contener {
  width: 100%;
  height: 100vh;
  .NavBar1 {
    background-color: #ca6b57 !important;
    color: #fff !important;
  }
  .content {
    width: 100%;
    height: 25vw;
    background-color: #fff;
    .infor {
      height: 25vw;
      border-bottom: 1px solid #ccc;
      display: flex;
      .imgs {
        width: 25vw;
        height: 100%;
        padding: 2vw;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .info {
        padding: 0 3vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .p1 {
          font-size: 5vw;
        }
        .p2 {
          margin-top: 4vw;
          color: #a5a5a5;
          font-size: 3vw;
        }
      }
    }
    .infor::after {
      font-family: 'iconfont';
      content: '';
      line-height: 25vw;
      position: absolute;
      right: 5vw;
    }
  }
  .back {
    .tuichu {
      position: relative;
      bottom: 0;
      margin-top: 15px;
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
