<template>
  <div class="new-Life">
    <div class="top">炸毛小焦</div>
    <div class="button">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="name"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="passworld"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit"
            >注册
            <van-dialog v-model="show" title="标题" message="注册成功"> </van-dialog>
          </van-button>
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
      username: '',
      password: '',
      show: false
    }
  },
  methods: {
    onSubmit(values) {
      // this.$notify('注册成功')
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
    }
  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #eee;
}

.new-Life {
  .top {
    position: relative;
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
    position: absolute;
    padding: 60px 20px 0 20px;

    width: 100%;
    bottom: 70px;
    height: 420px;
    background-color: #f1f1f1;
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
