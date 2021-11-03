<template>
  <div class="new-Life">
    <div class="top">炸毛小焦</div>
    <div class="button">
      <van-form @submit="onSubmit">
        <van-field
          v-model="usernames"
          name="name"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="passwords"
          type="password"
          name="passworld"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit"
            >登入
            <van-dialog v-model="show" title="标题" message="注册成功"> </van-dialog>
          </van-button>
          <router-link to="/registered">
            <van-button round block type="info">注册</van-button>
          </router-link>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      usernames: '',
      passwords: '',
      show: false,
      list: []
    }
  },
  created() {},
  methods: {
    onSubmit(value) {
      console.log(this.list)
      console.log(value)
      if (value.name === 'admin' && value.passworld === '123456') {
        localStorage.setItem('token', 'Bearer xxx')
        this.$dialog
          .alert({
            title: '炸毛小焦', // 加上标题
            message: '登入成功' // 改变弹出框的内容
          })
          .then(() => {
            // 点击确认按钮后的调用
            console.log('点击了确认按钮噢')
            this.$router.push('/my')
          })
      } else {
        this.$dialog
          .alert({
            title: '炸毛小焦', // 加上标题
            message: '用户名或密码不存在' // 改变弹出框的内容
          })
          .then(() => {
            // 点击确认按钮后的调用
            this.$dialog
              .alert({
                title: '测试账号', // 加上标题
                message: 'admin&&123456' // 改变弹出框的内容
              })
              .then(() => {
                // 点击确认按钮后的调用
              })
          })
        // 登入失败
        localStorage.removeItem('token')
      }
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
