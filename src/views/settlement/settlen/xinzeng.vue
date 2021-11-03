<template>
  <div class="xinzeng">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'
export default {
  name: 'xinzeng',
  props: {
    dizhiItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      areaList,
      searchResult: [],
      shuju: {}
    }
  },
  methods: {
    onSave(content) {
      this.shuju = content
      this.$emit('dizhi', this.shuju)
    },
    onDelete() {
      this.$toast('delete')
    }
  }
}
</script>

<style></style>
