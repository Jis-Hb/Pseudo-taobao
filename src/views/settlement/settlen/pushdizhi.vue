<template>
  <div class="push-cotent">
    <topNav @click.native="blcak"></topNav>
    <van-address-list
      v-model="chosenAddressId"
      default-tag-text="默认"
      :list="list"
      @select="move"
      @add="onAdd"
      @edit="onEdit"
    />
    <div style="text-align: center" v-if="list.length === 0">您还没有添加收货地址</div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '80%' }">
      <xinzeng :dizhiItem="olditem" @dizhi="dizhi"></xinzeng>
    </van-popup>
    <div class="btn">
      <van-button @click="wancheng" class="btn1" type="default">完成</van-button>
    </div>
  </div>
</template>

<script>
import topNav from './TopNav.vue'
import xinzeng from './xinzeng.vue'
export default {
  name: 'push-content',
  data() {
    return {
      chosenAddressId: '1',
      show: false,
      list: [],
      id: 0,
      item: {},
      olditem: {}
    }
  },
  components: {
    topNav,
    xinzeng
  },
  methods: {
    blcak() {
      this.$router.go(-1)
    },
    onAdd() {
      this.show = true
      this.$toast('新增地址')
    },
    onEdit(item, index) {
      this.show = true
    },
    dizhi(val) {
      this.id += 1
      const dizhi = {}
      dizhi.address = val.province + val.city + val.county + val.addressDetail
      dizhi.id = this.id
      dizhi.name = val.name
      dizhi.tel = val.tel
      dizhi.isDefault = val.isDefault
      this.list.push(dizhi)
      this.show = false
    },
    move(item, index) {
      this.item = item
      console.log(this.item)
    },
    wancheng() {
      this.$router.go(-1)

      this.$store.commit('addDingdan', this.item)
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  position: absolute;
  bottom: 55px;
  width: 100%;
  height: 45px;
  background-color: #fff;
  .btn1 {
    margin-left: 20px;
    width: 90%;
    margin-top: 4px;
    border-radius: 17px;
    background-color: #f9f9f9;
  }
}
</style>
