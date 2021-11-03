<template>
  <div id="Swiper-content">
    <van-swipe
      :stop-propagation="false"
      class="my-swipe swipers"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="(item, index) in DetailSwper"
        :key="index"
        class="an-swipe-item "
        @click="onimg(index)"
      >
        <img :src="item" alt="" class="img-swiper" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

export default {
  name: 'Detail-Swiper',
  data() {
    return {
      current: 0
    }
  },
  props: {
    DetailSwper: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    // Swiper,
    // SwiperItem
  },
  methods: {
    onimg(index) {
      this.$emit('isshow', index)
    }
  }
}
</script>

<style scoped>
.swipers {
  height: 350px;
  border: 1px solid #eee;
  border-radius: 0px 0px 5px 5px;
}

.swipers > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.van-swipe-item {
  top: 0;
  color: #fff;
  font-size: 50px;
  line-height: 150px;
  text-align: center;
  background-color: transparent;
}
.van-overflow-hidden {
  z-index: 999;
}
</style>
