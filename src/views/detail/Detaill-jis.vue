<template>
  <div id="detail" class="wrapper">
    <!-- 导航栏 -->
    <TopNav ref="topNav" :topList="centerList" class="topNav" @titleClick="titleClick"></TopNav>
    <BackTop @click.native="backClick" class="backTop" v-if="BackTop"></BackTop>
    <!-- 预览图片 -->
    <van-image-preview
      class-name="imgswiper"
      v-model="show"
      :images="topImage"
      :start-position="indez"
      @change="onChange(index)"
    />
    <!-- 轮播图 -->
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll">
      <DetailSwperNav :DetailSwper="topImage" @isshow="isshow($event, index)" />

      <div class="padding">
        <DetailInfoe :goods="Goods" @canshu="canShu" @baozhang="baozhang"></DetailInfoe>
        <van-popup
          v-model="canshuCount"
          round
          position="bottom"
          get-container="body"
          :style="{ height: '80%' }"
        >
          <ParamInfo :paramInfo="paramInfo" ref="Jis" />
        </van-popup>
        <van-popup
          v-model="baozhangCount"
          round
          position="bottom"
          get-container="body"
          :style="{ height: '80%' }"
        >
          <bzCount :bzcount="Goods"></bzCount>
        </van-popup>
        <CommentInfo
          ref="comment"
          :commentInfo="commentInfo"
          @pinglunimg="pinglunimg($event, index)"
        />
        <ShopInfo :ShopInfo="shop" />
        <GoodsInfos ref="goods" :detailInfo="detailInfo" @imageLoad="imageLoad" />
        <tuijian ref="tuijian" :goods="recommends" />
      </div>
    </Scroll>
    <van-image-preview
      class="pinglun"
      v-model="pinglun"
      :images="commentInfo.images"
      :start-position="indey"
    />
    <!-- 购买弹窗 -->
    <van-popup
      v-model="gouwuCount"
      round
      position="bottom"
      get-container="body"
      :style="{ height: '40%' }"
    >
      <DetailSubmit :shop="shop" :product="Goods" :topimg="topImage" :iid="iid"></DetailSubmit>
    </van-popup>
    <van-popup
      v-model="showpingCount"
      round
      position="bottom"
      get-container="body"
      :style="{ height: '40%' }"
    >
      <showping :shop="shop" :product="Goods" :topimg="topImage" :iid="iid"></showping>
    </van-popup>
    <!-- 底部 -->
    <Mill @showping="showping" @gouwu="gouwu"></Mill>
  </div>
</template>

<script>
import Mill from './child-jis/Detaill-mall.vue'
import TopNav from './child-jis/Detaill-topNav.vue'
import DetailSwperNav from './child-jis/Detail-swiper.vue'
import DetailInfoe from './child-jis/Detail-Info'
import ShopInfo from './child-jis/Detail-Shop.vue'
import GoodsInfos from './child-jis/DetailGoodsInfo.vue'
import ParamInfo from './child-jis/DetailParamInfo.vue'
import CommentInfo from './child-jis/DetailCommentInfo.vue'
import bzCount from './child-jis/Detail-baozhangCount.vue'
import tuijian from 'components/content/goods/GoodsList.vue'
import DetailSubmit from './child-jis/Detail-SubMit.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
import showping from './child-jis/Detail-Showping.vue'

import { debounce } from 'common/utils'
import Scroll from 'components/common/scroll/Scroll'
import { getDetail, GoodsInfo, Shop, GoodsParam, getRecommend } from 'network/detail'
export default {
  name: 'Detaill-jis',
  data() {
    return {
      iid: null,
      centerList: ['商品', '评论', '详细', '推荐'],
      topImage: [],
      Goods: {},
      shop: {},
      show: false,
      index: 0,
      showindex: 0,
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      pinglun: false,
      indey: 0,
      indez: 0,
      canshuCount: false,
      baozhangCount: false,
      recommends: [],
      gouwuCount: false,
      themeTopYs: [],
      itemImgListener: null,
      getThemeTopY: null,
      currentIndex: 0,
      BackTop: false,
      showpingCount: false,
      product: {}
    }
  },
  components: {
    TopNav,
    Mill,
    DetailSwperNav,
    DetailInfoe,
    ShopInfo,
    GoodsInfos,
    ParamInfo,
    Scroll,
    CommentInfo,
    bzCount,
    tuijian,
    DetailSubmit,
    BackTop,
    showping
  },

  methods: {
    onChange(index) {
      this.index = index
    },
    imgChange(index) {
      this.indey = index
    },
    isshow(val) {
      this.show = true
      this.indez = val
    },
    imageLoad() {
      this.$refs.scroll.refresh()
    },
    pinglunimg(val) {
      this.pinglun = true
      this.indey = val
    },
    canShu() {
      this.canshuCount = true
    },
    baozhang() {
      this.baozhangCount = true
    },
    gouwu() {
      this.gouwuCount = true
    },
    showping() {
      this.showpingCount = true
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    contentscroll(position) {
      const length = this.themeTopYs.length
      const positionY = -position.y
      // 2`position和主体中的值对比\
      if (position.y < -500) {
        this.BackTop = true
      } else {
        this.BackTop = false
      }
      for (let i = 0; i < this.themeTopYs.length; i++) {
        // if (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
        //   console.log(i)
        // }
        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY > this.themeTopYs[i] &&
            positionY <= this.themeTopYs[i + 1]) ||
          (i === length - 1 && positionY >= this.themeTopYs[i])
        ) {
          this.currentIndex = i
          this.$refs.topNav.centerIndex = this.currentIndex
        }
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  },
  deactivated() {
    this.$refs.topNav.centerIndex = 0
  },
  created() {
    this.getThemeTopY = debounce(() => {
      // 1`图片加载完成的事件监听
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
      this.themeTopYs.push(this.$refs.tuijian.$el.offsetTop)
      // console.log(this.themeTopYs)
    })
  },
  mounted() {
    // console.log(this.$refs.scroll)

    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = () => {
      // this.$refs.scroll.refresh()
      // console.log(111)

      this.getThemeTopY()

      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
  updated() {},
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  activated() {
    this.gouwuCount = false
    this.showpingCount = false

    this.$refs.scroll.scrollTo(0, 0, 0)
    setTimeout(() => {
      // 1`图片加载完成的事件监听
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
      this.themeTopYs.push(this.$refs.tuijian.$el.offsetTop)
      // console.log(this.themeTopYs)
    }, 2000)
    this.show = false
    // 1·保存传入的iid
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    // 根据iid请求数据
    getDetail(this.iid).then((res) => {
      const data = res.data.result
      // console.log(data)
      this.topImage = data.itemInfo.topImages

      // 2`获取商品信息
      this.Goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

      // 3`创建店铺信息
      this.shop = new Shop(data.shopInfo)

      // 4`获取店铺i西南西
      this.detailInfo = data.detailInfo

      // 5·获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // console.log(this.paramInfo)

      // 6`取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

      // 7`请求推荐数据
      getRecommend().then((res) => {
        this.recommends = res.data.data.list
      })

      // this.$nextTick(() => {
      //   // 根据最新的苏剧，对应的D哦没事已经被渲染出来
      //   // 但是图片依然是没有加载完(目前获取的offsetTop)是没有加上图片的高度是
      //   this.themeTopYs = []
      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.tuijian.$el.offsetTop)

      //   console.log(this.themeTopYs)
      // })
    })
    // 购物车对象
  }
}
</script>

<style lang="less" scoped>
.backTop {
  z-index: 999;
}
#detail {
  padding-bottom: 50px;
  position: relative;
  z-index: 9;
  background-color: #efefef;
  height: 100vh;
}

.content {
  height: calc(100% - 44px);
}
.padding {
  padding: 0 10px;
}
</style>
