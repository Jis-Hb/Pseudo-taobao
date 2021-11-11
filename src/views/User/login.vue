<template>
  <div class="new-Life">
    <div class="top">炸毛小焦</div>
    <div class="button">
      <van-form @submit="onSubmit">
        <van-field
          v-model="users.usernames"
          name="name"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="users.passwords"
          type="password"
          name="passworld"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >登入
            <van-dialog v-model="show" title="标题" message="注册成功"> </van-dialog>
          </van-button>
          <router-link to="/registered">
            <van-button round block type="info">注册</van-button>
          </router-link>
        </div>
      </van-form>
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
      }
    }
  },
  created() {},
  methods: {
    // 请求后端验证登入密码是否正确
    async onSubmit(value) {
      postLoginUser(this.users.usernames, this.users.passwords).then(res => {
        if (res.data.meta.status === 201) {
          localStorage.setItem('token', res.data.data.token)
          this.$bus.$emit('getUserName', res.data.data.username)
          this.$dialog
            .alert({
              title: '登入成功', // 加上标题
              message: `欢迎${res.data.data.username}用户访问` // 改变弹出框的内容
            })
            .then(() => {
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
    }
  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #eee;
}

.new-Life {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #eee;
  .top {
    text-align: center;
    line-height: 230px;
    height: 230px;
    color: #fff;
    font-size: 35px;
    background-color: #1d82fe;
    border-radius: 0 0px 25px 25px;
    z-index: 66;
  }
  .button {
    padding: 20px 20px 0 20px;
    width: 100%;
    bottom: 70px;
    height: 420px;
    .ali {
      text-align: center;
      margin-top: 40px;
      font-size: 13px;
      color: #c8c9cc;
    }
    .ali1 {
      text-align: center;
      margin-top: 20px;
      font-size: 13px;
      color: #c8c9cc;
    }
    .van-cell {
      margin-top: 25px;
      line-height: 25px;
      font-size: 17px;
      border-radius: 25px;
    }
    .van-button--block {
      margin-top: 30px;
    }
  }
}
</style>
