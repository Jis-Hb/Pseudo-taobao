<template>
  <div id="home" class="wrapper">
    <SerchTop class="home-nav ">
      <div slot="left"><span class="left-Span">签到</span></div>
      <div slot="centerLeft">订阅</div>
      <div slot="centerright">推荐</div>
      <div @click="show = true" slot="right"><span class="right-Span">作者码</span></div>
      <router-link to="/Serch">
        <Serch></Serch>
      </router-link>
    </SerchTop>
    <!-- 作者码弹出框 -->
    <van-dialog v-model="show" title="与作者联系" show-cancel-button>
      <img class="Myimg" src="@/assets/img/my1.jpg" />
    </van-dialog>
    <Tab-Control
      :titles="Control"
      class="tab2-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    />

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentscroll"
      :pullUpLoad="true"
      @pullingUp="Loadmore"
    >
      <HomeSwiper class="Swiper" :banners="banners" @SwiperImageLoad="SwiperImageLoad" />
      <Recommend-View :recommends="recommend" />
      <Feature-View />
      <Tab-Control :titles="Control" class="tab-control" @tabClick="tabClick" ref="tabControl2" />
      <Good-List :goods="showGoods" class="clear-fix" />
      <van-loading color="#1d82fe" size="24px" class="loading">加载中...</van-loading>
    </scroll>
    <BackTop @click.native="backClick" v-show="isshow"></BackTop>
  </div>
</template>

<script>
import SerchTop from 'components/common/SerchTopBar/SerchTopBar'
import Serch from 'components/common/SerchTopBar/Serch'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop.vue'
import { itemListenerMixin } from 'common/mixin'

import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  name: 'haonme1',
  components: {
    SerchTop,
    Serch,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      Control: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isshow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      ItemImgListener: null,
      show: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  mixins: [itemListenerMixin],
  mounted() {},
  created() {
    //  1·请求多个数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 300)

          break
        case 1:
          this.currentType = 'new'
          this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 300)

          break
        case 2:
          this.currentType = 'sell'
          this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 300)
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 800)
    },
    contentscroll(position) {
      // 1·判断BcakTop 是否显示
      this.isshow = -position.y > 1000
      // 2·决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    Loadmore() {
      setTimeout(() => {
        this.getHomeGoods(this.currentType)
      }, 1300)
    },
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        // res => pop 前30 page：
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
    SwiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  destroyed() {
    console.log('再见')
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('itemImageLoad', this.ItemImgListener)
  }
}
</script>

<style scoped>
#home {
  padding-bottom: 46px;
  padding: 0;
  height: 100vh;
  background-color: #eeeeee;
}
.wrapper {
}
.Swiper {
  margin: 2px;
  margin-bottom: 5px;
  height: 170px;
  overflow: hidden;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.tab-control {
  position: sticky;
  top: 90px;
  background-color: #fff;
}
.content {
  /* height: calc(100vh - 93px); */
  position: absolute;
  top: 91px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab2-control {
  z-index: 999;
}
.left-Span {
  padding: 1vw;
  padding-left: 2vw;
  border-radius: 6vw;
  background-color: #b6594b;
}
.left-Span::before {
  font-family: 'iconfont';
  content: '';
  font-size: 15px;
  margin-right: 5px;
  background-color: #f3772c;
  width: 20px;
  height: 2px;
}
.right-Span {
  background-color: #b6594b;
  padding: 0.6vw;
  padding-left: 2vw;
  border-radius: 6vw;
}
.right-Span::before {
  font-family: 'iconfont';
  content: '';
  font-size: 15px;
  margin-right: 5px;
  background-color: #f3772c;
}
.Myimg {
  height: 400px;
}
</style>
