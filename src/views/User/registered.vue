<template>
  <div class="new-Life">
    <div class="top">
      <div class="black" @click="$router.push('/login')">×</div>

      <p class="top-content">用户注册</p>
      <span class="top-span1"
        >已有账户?
        <router-link to="/login"><span class="top-span2">立即登录</span> </router-link></span
      >
    </div>

    <van-form @submit="onSubmit">
      <div class="wrapper">
        <div class="input-data">
          <input @blur="UserReg" required class="input" type="text" v-model="users.username" />
          <div class="underline" ref="userRef"></div>
          <label class="label">请输入6-18位/会员名/手机</label>
        </div>
      </div>
      <div class="wrapper" v-if="index2">
        <div class="input-data">
          <input @blur="PassReg" required class="input" type="password" v-model="users.password" />
          <div class="underline" ref="passRef"></div>
          <label class="label">请输入6-18位密码</label>
        </div>
      </div>

      <button class="loginBtn" ref="btnRef">
        立即注册
      </button>
    </van-form>
  </div>
</template>

<script>
import { registered } from '../../network/login'

export default {
  name: 'login',
  data() {
    return {
      users: {
        username: '',
        password: ''
      },
      userreg: /^[a-zA-Z0-9_-]{6,18}$/,
      Passreg: /^[a-zA-Z0-9_-]{6,18}$/,
      index2: false
    }
  },
  activated() {
    this.users.username = ''
    this.users.password = ''
    this.index2 = false
  },
  methods: {
    async onSubmit(values) {
      if (!this.isSubmit) return
      registered(this.users.username, this.users.password).then(win => {
        const res = win.data
        console.log(res)
        if (res.meta.status !== 201) {
          return this.$dialog.alert({
            title: '注册失败', // 加上标题
            message: '用户名已存在' // 改变弹出框的内容
          })
        }
        this.$dialog
          .alert({
            title: '炸毛小焦', // 加上标题
            message: '注册成功' // 改变弹出框的内容
          })
          .then(() => {
            // 点击确认按钮后的调用
            console.log('点击了确认按钮噢')
            this.$router.push('/login')
          })
      })
    },

    UserReg() {
      if (this.userreg.test(this.users.username)) {
        // this.$refs.userRef.style.color = 'green'
        this.$refs.userRef.className = 'underline'
        this.index2 = true
      } else {
        // this.$refs.userRef.style.color = 'red'
        this.$refs.userRef.className = 'error'
        this.index2 = false
      }
    },
    PassReg() {
      if (this.Passreg.test(this.users.password)) {
        // this.$refs.userRef.style.color = 'green'
        this.$refs.passRef.className = 'underline'
        this.$refs.btnRef.className = 'newBtn'
        this.isSubmit = true
      } else {
        // this.$refs.userRef.style.color = 'red'
        this.$refs.passRef.className = 'error'
        this.$refs.btnRef.className = 'loginBtn'
        this.isSubmit = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.new-Life {
  width: 100%;
  height: 100%;
  padding: 0 5vw;
  background-color: #ffffff;
  .top {
    display: flex;
    height: 60vw;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 5vw;

    .black {
      position: absolute;
      top: 2vw;
      font-size: 11vw;
      color: #000;
      font-weight: 400;
    }
    .top-content {
      font-size: 8vw;
      color: #000;
      padding: 0;
      height: 11vw;
      margin-bottom: 6px;
      background-color: #fff;
    }
    .top-span1 {
      color: #aaaaaa;
    }
    .top-span2 {
      margin-left: 5px;
      color: #de6430;
    }
  }

  .loginBtn {
    margin-top: 7vw;
    height: 12vw;
    width: 100%;
    border-radius: 10vw;
    border: 0;
    color: #fce2cc;
    // background-color: #f6cfa8;
    background: -webkit-linear-gradient(left, #f7d4aa, #f5c4a6);
  }
  .wrapper {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    background-color: #fff;
    padding: 5vw 0;

    .input-data {
      height: 30px;
      width: 100%;
      position: relative;
      .input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 17px;
        color: #000;
        background-color: #fff;
        border-bottom: 0.1vw solid silver;
      }
      .infoSpan {
        font-size: 2vw;
      }
      .input:focus ~ .label,
      .input:valid ~ .label {
        transform: translateY(-20px);
        font-size: 15px;
        color: #f6c9a7;
      }
      .underline {
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 100%;
      }

      .underline:before {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        background: -webkit-linear-gradient(left, #f7d4aa, #f5c4a6);
        transform: scaleX(0);
        transition: transform 0.5s ease;
      }
      .input:focus ~ .underline:before,
      .input:valid ~ .underline:before {
        transform: scaleX(1);
      }
      .label {
        position: absolute;
        bottom: 10px;
        left: 0;
        color: #cdcdcd;
        font-size: 15px;
        pointer-events: none;
        transition: all 0.3s ease;
      }
    }
  }
}

.error {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}

.error:before {
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(left, #e65036, #e60d0d);

  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.input:focus ~ .error:before,
.input:valid ~ .error:before {
  transform: scaleX(1);
}
.newBtn {
  margin-top: 7vw;
  height: 12vw;
  width: 100%;
  border-radius: 10vw;
  border: 0;
  color: #fce2cc;
  // background-color: #f6cfa8;
  background: -webkit-linear-gradient(left, #f6b565, #ec935b);
}
</style>
