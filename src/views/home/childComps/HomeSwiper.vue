<template>
  <Swiper class="Swiper" v-if="banners.length > 1">
    <Swiper-Item class="Swpier-item" v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img class="Swiper-img" :src="item.image" alt="" @load="imageLoad" />
      </a>
    </Swiper-Item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('SwiperImageLoad')
        this.isLoad = true
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  }
}
</script>

<style lang="less">
.Swiper {
  height: 170px;
  .Swpier-item {
    height: 170px;
    border-radius: 5px;

    .Swiper-img {
      height: 170px;
      border-radius: 5px;
    }
  }
}
</style>
