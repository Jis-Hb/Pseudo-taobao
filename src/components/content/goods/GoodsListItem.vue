<template>
  <div class="box">
    <div class="goodsitem" @click="itemClick">
      <div class="images">
        <img v-lazy="showImage" alt="" @load="imageLoad" />
      </div>

      <div class="goodsitemcount">
        <p>{{ goodsItem.title }}</p>
        <span class="price"><span class="price-left">￥</span>{{ goodsItem.price }}</span>
        <span class="collect">{{ goodsItem.cfav }}<span class="collect-Right">人付款</span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')

      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit('homeitemImageLoad')
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('datailitemImageLoad')
      // }
      // console.log(this.$bus)
    },
    itemClick() {
      if (this.goodsItem.iid) {
        this.$router.push('/detail/' + this.goodsItem.iid)
      } else {
        this.$router.push('/detail/' + this.goodsItem.item_id)
      }
    }
  }
}
</script>

<style lang="less">
.box {
  margin-top: 10px;
  padding-bottom: 10px;
  width: 47%;

  .goodsitem {
    height: 18.666667rem;
    .images {
      height: 15.866667rem;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }

    .goodsitemcount {
      font-size: 13px;
      text-align: center;
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 3px;
      }
      .price {
        margin-left: -6vw;
        padding-right: 4vw;
        font-weight: 500;
        font-size: 5vw;
        color: #e95825;

        .price-left {
          font-size: 12px !important;
          color: #e95825;
        }
      }
      .collect {
        color: #9f9f9f;
        span {
          font-size: 17px;
          color: #9f9f9f;
        }
      }
    }
  }
}
</style>
