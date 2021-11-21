<template>
  <div class="info">
    <van-field
      required
      class="input"
      placeholder="请输入你的个性签名"
      v-model="info"
      label="个性签名"
    />
    <van-button @click="GetInfo" class="btn" color="linear-gradient(to right, #ff6034, #ee0a24)">
      确认
    </van-button>
  </div>
</template>

<script>
import { getInfo } from '../../../network/login'
import { getCookie, setCookie } from '../../../common/utils'

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
        const token = getCookie('token')
        const MyUsername = getCookie('username')
        getInfo(MyUsername, this.info, token).then(res => {
          if (res.data.meta.status !== 201) return this.$toast.fail(res.data.meta.msg)
          setCookie(
            {
              info: res.data.data.info
            },
            1
          )
          // localStorage.setItem('info', res.data.data.info)
          this.$emit('InfoOver', res.data.data.info)
          this.$toast.success('修改成功')
          this.info = ''
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
