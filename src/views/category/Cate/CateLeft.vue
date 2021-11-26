<template>
  <div class="CateLeft">
    <div class="Cate">
      <ul>
        <li
          :class="{ clickName: clickCount === index }"
          v-for="(item, index) in LeftName"
          :key="item.maitKey"
          @click="LeftClick(index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CateLeft',
  props: {
    LeftName: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {},

  data() {
    return {
      clickCount: 0
    }
  },
  methods: {
    LeftClick(index) {
      this.clickCount = index
      this.$emit('selectItem', index)
    }
  }
}
</script>

<style lang="less" scoped>
.CateLeft {
  .Cate {
    width: 30vw;
    height: 87vh;
    overflow: scroll;
    background-color: #f3f3f3;
    text-align: center;
    ul > li {
      height: 45px;
      line-height: 45px;
      font-size: 14px;
    }
  }
  margin: 43px 0;
}
.clickName {
  font-weight: 700;
  border-left: 5px solid #ff9900;
  background-color: #fff;
}
::-webkit-scrollbar {
  width: 0px;

  height: 0px;

  background-color: #f5f5f5;
}
::-webkit-scrollbar-track {
}
</style>
