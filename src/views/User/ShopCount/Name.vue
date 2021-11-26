<template>
  <div class="info">
    <van-field required class="input" placeholder="请输入你的名称" v-model="Name" label="名称" />
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
import { getName } from '../../../network/login'

export default {
  data() {
    return {
      Name: ''
    }
  },
  methods: {
    GetInfo() {
      const UserName = localStorage.getItem('username')
      const token = localStorage.getItem('token')
      if (this.Name !== '') {
        getName(UserName, this.Name, token).then(res => {
          // console.log(res)
          if (res.data.meta.status !== 201) return this.$toast.fail(res.data.meta.msg)
          localStorage.setItem('name', res.data.data.name)
          this.$emit('NameOver', res.data.data.name)
          this.$toast.success('修改成功')
          this.Name = ''
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
