<template>
  <div class="Cate-content">
    <NavBar class="Cate-Top">
      <div slot="center">商品分类</div>
    </NavBar>

    <CateLeft @selectItem="selectItem" class="left-content" :LeftName="LeftName"></CateLeft>
    <CateItem class="right-content" :subcategories="showSubcategory"></CateItem>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CateLeft from './Cate/CateLeft.vue'
import CateItem from './Cate/CateItem.vue'
import { CateLeftList, getSubcategory } from '../../network/category.js'

export default {
  name: 'Category',
  data() {
    return {
      LeftName: [],
      RightItemList: [],
      currentIndex: -1
    }
  },
  components: {
    NavBar,
    CateLeft,
    CateItem
  },
  created() {
    this.CateLeftList()
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.RightItemList[this.currentIndex].subcategories
    }
  },
  methods: {
    CateLeftList() {
      CateLeftList().then(res => {
        this.LeftName = res.data.data.category.list
        for (let i = 0; i < this.LeftName.length; i++) {
          this.RightItemList[i] = {
            subcategories: {}
          }
        }
        this.getSubcategory(0)
      })
    },
    getSubcategory(index) {
      this.currentIndex = index
      const mailKey = this.LeftName[index].maitKey
      getSubcategory(mailKey).then(res => {
        this.RightItemList[index].subcategories = res.data.data
        this.RightItemList = { ...this.RightItemList }
        console.log(this.RightItemList)
      })
    },
    selectItem(index) {
      this.getSubcategory(index)
    }
  }
}
</script>

<style lang="less" scoped>
.Cate-content {
  display: flex;
  background-color: #fff;

  .Cate-Top {
    background-color: #ca6b57;
    color: #fff;
    position: absolute;
    top: 0;
    z-index: 666;
    width: 100%;
    border-bottom: 1px solid rgba(204, 204, 204, 0.157);
  }
}
.right-content {
  margin-top: 43px;
  overflow: scroll;
  height: 86vh;
  flex: 1;
}
.felt-content {
  flex: 1;
}
</style>
