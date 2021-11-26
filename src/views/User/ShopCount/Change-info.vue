<template>
  <div class="contner">
    <NavBar class="NavBar1">
      <div class="iconfont" slot="left" @click="back">&#xe60e;</div>
      <div class="iconfont NavBarCenter" slot="center">个人信息</div>
      <div class="iconfont NavBarRight" slot="right">&#xe9b9;</div>
    </NavBar>
    <div class="content">
      <div class="imgTop">
        <img
          class="Img"
          src="http://img.alicdn.com/sns_logo/i2/O1CN01FCs34N28i1EcUFY3J_!!0-mytaobao.jpg_790x10000.jpg"
          alt=""
        />
        <p class="ImgP">更换头像</p>
      </div>
      <div class="content-info infoUserName">
        炸毛账号
        <span class="UserSpan">{{ username }}</span>
      </div>
      <div class="content-info infoName" @click="nameClick">
        炸毛昵称
        <span class="NameSpan">{{ name }}</span>
      </div>
      <div class="content-info info" @click="infoClick">
        个性签名
        <span class="infoSpan">{{ info }}</span>
      </div>
    </div>
    <!-- 昵称修改弹窗 -->
    <van-dialog
      :showConfirmButton="false"
      :showCancelButton="false"
      v-model="NamShow"
      title="标题"
      show-cancel-button
    >
      <Name @NameOver="OkName"></Name>
    </van-dialog>
    <!-- 个性签名弹窗 -->
    <van-dialog
      :showConfirmButton="false"
      :showCancelButton="false"
      v-model="infoShow"
      title="标题"
      show-cancel-button
    >
      <info @NameOver="OkName"></info>
    </van-dialog>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Name from './Name.vue'
import info from './info.vue'
export default {
  name: 'Change-info',
  components: {
    NavBar,
    Name,
    info
  },
  data() {
    return {
      username: '',
      name: '',
      info: '',
      NamShow: false,
      infoShow: false
    }
  },
  activated() {
    this.username = localStorage.getItem('username')
    this.name = localStorage.getItem('name')
    this.info = localStorage.getItem('info')
  },
  methods: {
    back() {
      this.$router.back()
    },
    nameClick() {
      this.NamShow = true
    },
    OkName() {
      this.NamShow = false
      this.infoShow = false
      this.name = localStorage.getItem('name')
      this.info = localStorage.getItem('info')
    },
    infoClick() {
      this.infoShow = true
    }
  }
}
</script>

<style lang="less" scoped>
.contner {
  width: 100%;
  height: 100%;
  .NavBar1 {
    background-color: #ca6b57 !important;
    color: #fff !important;
  }
  .content {
    height: 100%;
    background-color: #fff;
    .imgTop {
      height: 50vw;
      width: 100%;
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .Img {
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
      }
      .ImgP {
        margin-top: 3vw;
        color: #dd7043;
      }
    }
    .content-info {
      height: 12vw;
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      align-items: center;
      font-weight: 500;
      padding: 0 2vw;

      .UserSpan,
      .NameSpan,
      .infoSpan {
        margin: 0 15vw;
        color: #787878;
      }
      .UserSpan {
      }
      .NameSpan::after,
      .infoSpan::after {
        position: absolute;
        padding: 0 2vw;
        right: 0;
        font-family: 'iconfont';
        content: '';
      }
    }
  }
}
</style>
