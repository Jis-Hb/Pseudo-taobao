<template>
  <div class="info">
    <van-field
      required
      class="input"
      placeholder="请输入你的个性签名"
      v-model="info"
      label="个性签名"
    />
    <div>
      <van-button @click="NoBtn" class="NoBtn">
        取消
      </van-button>
      <van-button @click="GetInfo" class="btn" color="linear-gradient(to right, #ff6034, #ee0a24)">
        确认
      </van-button>
    </div>
  </div>
</template>

<script>
import { getInfo } from '../../../network/login'

export default {
  data() {
    return {
      info: ''
    }
  },
  methods: {
    GetInfo() {
      console.log(this.info)
      if (this.info !== '') {
        const token = localStorage.getItem('token')
        const MyUsername = localStorage.getItem('username')
        getInfo(MyUsername, this.info, token).then(res => {
          if (res.data.meta.status !== 201) return this.$toast.fail(res.data.meta.msg)
          localStorage.setItem('info', res.data.data.info)
          this.$emit('NameOver', res.data.data.info)
          this.$toast.success('修改成功')
          this.info = ''
        })
      } else {
        this.$toast.fail('不能输入空格！')
      }
    },
    NoBtn() {
      this.$emit('NameOver')
    }
  }
}
</script>

<style lang="less" scoped>
.info {
  background-color: #fff;

  padding: 2vw;
  text-align: center;
  .input {
    margin-bottom: 2vw;
  }
  .btn {
    width: 30vw;
    border-radius: 10px;
  }
  .NoBtn {
    width: 30vw;
    border-radius: 10px;
    background-color: #fff !important;
    color: #000 !important;
    margin-right: 2vw;
  }
}
</style>
