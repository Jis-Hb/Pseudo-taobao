<template>
  <div class="Cate-content">
    <NavBar class="Cate-Top">
      <div slot="center">商品分类</div>
    </NavBar>
    <scroll class="left">
      <van-sidebar @change="onChange" v-model="activeKey" class="item-color">
        <van-sidebar-item title="正在流行" />
        <van-sidebar-item title="裤子" />
        <van-sidebar-item title="裙子" />
        <van-sidebar-item title="内衣" />
        <van-sidebar-item title="女鞋" />
        <van-sidebar-item title="男友" />
        <van-sidebar-item title="包包" />
        <van-sidebar-item title="运动" />
        <van-sidebar-item title="配饰" />
        <van-sidebar-item title="运动" />
        <van-sidebar-item title="美妆" />
        <van-sidebar-item title="个性" />
        <van-sidebar-item title="安居" />
      </van-sidebar>
    </scroll>
    <scroll class="right">
      <Goods class="right-box" :goods="showGoods"></Goods>
    </scroll>
  </div>
</template>

<script>
import scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import Goods from 'components/content/goods/GoodsList.vue'
import { getHomeGoods } from 'network/home'
export default {
  name: 'Category',
  data() {
    return {
      activeKey: 0,
      goods: {
        pop: { list: [] }
      },
      currentType: 'pop',
      currentpage: 1
    }
  },
  components: {
    NavBar,
    scroll,
    Goods
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  mounted() {},
  created() {
    this.getHomeGoods(this.currentType, this.currentpage)
  },
  methods: {
    onChange(index) {
      this.currentpage = index + 1
      this.getHomeGoods(this.currentType, this.currentpage)
    },
    getHomeGoods(type, page) {
      getHomeGoods(type, page).then((res) => {
        // console.log(res)
        this.goods[this.currentType].list = res.data.data.list
      })
    }
  }
}
</script>

<style lang="less" scoped>
.Cate-content {
  .Cate-Top {
    background-color: #fff;
    color: #000000;
    position: absolute;
    top: 0;
    z-index: 666;
    width: 100%;
    border-bottom: 1px solid rgba(204, 204, 204, 0.157);
  }
  .right {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    width: 75%;
    background-color: #fff;
    .right-box {
    }
  }
  .left {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    width: 25%;
    .item-color {
      width: 100%;
    }
  }
}
</style>
