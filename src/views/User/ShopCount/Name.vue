<template>
  <div class="info">
    <van-field required class="input" placeholder="请输入你的名称" v-model="Name" label="名称" />
    <van-button @click="GetInfo" class="btn" color="linear-gradient(to right, #ff6034, #ee0a24)">
      确认
    </van-button>
  </div>
</template>

<script>
import { getName } from '../../../network/login'
import { setCookie, getCookie } from '../../../common/utils'

export default {
  data() {
    return {
      Name: ''
    }
  },
  methods: {
    GetInfo() {
      const UserName = getCookie('username')
      const token = getCookie('token')
      if (this.Name !== '') {
        getName(UserName, this.Name, token).then(res => {
          // console.log(res)
          if (res.data.meta.status !== 201) return this.$toast.fail(res.data.meta.msg)
          // localStorage.setItem('name', res.data.data.name)
          setCookie(
            {
              name: res.data.data.name
            },
            1
          )
          this.$emit('NameOver', res.data.data.name)
          this.$toast.success('修改成功')
          this.Name = ''
        })
      } else {
        this.$toast.fail('不能输入空格！')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.info {
  background-color: #eee;

  padding: 50px;
  text-align: center;
  .input {
    border-radius: 15px;
    margin-bottom: 30px;
  }
  .btn {
    width: 50vw;
    border-radius: 10px;
  }
}
</style>
