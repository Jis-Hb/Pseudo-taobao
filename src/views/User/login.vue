<template>
  <div class="new-Life">
    <div class="top">
      <p class="top-content">亲，欢迎登录</p>
      <span class="top-span1"
        >没有账户?
        <router-link to="/registered"><span class="top-span2">立即注册</span> </router-link></span
      >
    </div>

    <van-form @submit="onSubmit">
      <div class="wrapper">
        <div class="input-data">
          <input @blur="UserReg" required class="input" type="text" v-model="users.usernames" />
          <div class="underline" ref="userRef"></div>
          <label class="label">请输入/手机号/会员名</label>
        </div>
      </div>
      <div class="wrapper" v-if="index2">
        <div class="input-data">
          <input @blur="PassReg" required class="input" type="password" v-model="users.passwords" />
          <div class="underline" ref="passRef"></div>
          <label class="label">请输入验证密码</label>
        </div>
      </div>

      <button class="loginBtn" ref="btnRef">
        确认
        <van-dialog v-model="show" title="标题" message="注册成功"> </van-dialog>
      </button>
    </van-form>
    <div class="bottom">
      <van-checkbox v-model="checked"
        >已阅读并同意<span class="checkSpan">本网站只用于学习不涉及商业用途</span></van-checkbox
      >
      <div class="ali">本网站只用于学习,不涉及商业用途</div>
      <div class="ali1">赣ICP备:2021009620</div>
    </div>
  </div>
</template>

<script>
import { postLoginUser } from '../../network/login'

export default {
  name: 'login',
  data() {
    return {
      show: false,
      list: [],
      users: {
        usernames: '',
        passwords: ''
      },
      checked: false,
      userreg: /^[a-zA-Z0-9_-]{6,18}$/,
      Passreg: /^[a-zA-Z0-9_-]{6,18}$/,
      userSpan: '',
      index2: false,
      isSubmit: false
    }
  },
  activated() {
    this.users.usernames = ''
    this.users.passwords = ''
    this.index2 = false
  },
  methods: {
    // 请求后端验证登入密码是否正确

    async onSubmit(value) {
      if (!this.isSubmit) return
      if (!this.checked) return this.$toast.fail('请勾选同意协议并登入')
      postLoginUser(this.users.usernames, this.users.passwords).then(res => {
        if (res.data.meta.status === 201) {
          localStorage.setItem('token', res.data.data.token)
          localStorage.setItem('username', res.data.data.username)
          localStorage.setItem('info', res.data.data.info)
          localStorage.setItem('name', res.data.data.name)
          sessionStorage.setItem('token', 6666)
          this.$dialog
            .alert({
              title: '登入成功', // 加上标题
              message: '欢迎访问' // 改变弹出框的内容
            })
            .then(() => {
              // this.$store.commit('username', res.data.data.username)
              // 点击确认按钮后的调用
              this.$router.push('/my')
            })
        } else {
          this.$dialog.alert({
            title: '炸毛小焦', // 加上标题
            message: '用户名或密码不存在' // 改变弹出框的内容
          })
        }
      })
    },
    UserReg() {
      if (this.userreg.test(this.users.usernames)) {
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
      if (this.Passreg.test(this.users.passwords)) {
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
      height: 8vw;
      width: 100%;
      position: relative;
      .input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 5vw;
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
        height: 0.5vw;
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
        bottom: 2.5vw;
        left: 0;
        color: #cdcdcd;
        font-size: 15px;
        pointer-events: none;
        transition: all 0.3s ease;
      }
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 0 5vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vw;
    .van-checkbox {
      font-size: 10px;
      color: #cdcdcd;
    }
    .ali {
      text-align: center;
      margin-top: 20px;
      font-size: 13px;
      color: #c8c9cc;
    }
    .ali1 {
      text-align: center;
      margin-top: 10px;
      font-size: 13px;
      color: #c8c9cc;
    }
    .van-cell {
      margin-top: 20px;
      line-height: 25px;
      font-size: 17px;
      border-radius: 25px;
    }
  }
}

.error {
  position: absolute;
  bottom: 0;
  height: 0.5vw;
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
