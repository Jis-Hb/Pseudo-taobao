import { debounce } from 'common/utils'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = () => {
      // this.$refs.scroll.refresh()
      // console.log(111)

      refresh()
      // 1`图片加载完成的事件监听
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}
