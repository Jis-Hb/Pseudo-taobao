<template>
  <div class="Comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-top">
      <span class="comment-top1">宝贝评价({{ commentInfo.isAnonymous }})</span>
      <span class="comment-top2">查看全部 ></span>
    </div>
    <div class="comment-bor" v-if="commentInfo.extraInfo != undefined">
      <span class="comment-border" v-for="(item, index) in commentInfo.extraInfo" :key="index">{{
        item.substring(item.indexOf(':') + 1, item.length)
      }}</span>
    </div>
    <div class="offuser">
      <span class="user-img">
        <img :src="commentInfo.user.avatar" alt="" />
      </span>
      <div class="div1">{{ commentInfo.user.uname }}</div>
      <div class="div2">{{ commentInfo.created | showDate }}</div>
    </div>
    <div class="pingjia">
      {{ commentInfo.content }}
    </div>
    <p class="data">{{ commentInfo.style }}</p>
    <div class="images">
      <img
        v-for="(item, index) in commentInfo.images"
        :key="index"
        :src="item"
        alt=""
        @click="pinglunImg(index)"
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
  name: 'DetailComment',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(Value) {
      // 1·将时间戳转成Date对象
      const date = new Date(Value * 1000)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  data() {
    return {}
  },
  created() {
    this.pinglun = false
  },
  methods: {
    pinglunImg(index) {
      this.$emit('pinglunimg', index)
    }
  }
}
</script>

<style lang="less" scoped>
.Comment-info {
  margin-top: 10px;
  padding: 0 10px;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  .pinglun {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999999;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .comment-top {
    height: 45px;
    background-color: #fff;
    line-height: 45px;
    .comment-top1 {
      float: left;
      color: #111111;
      font-size: 15px;
      font-weight: 700;
    }
    .comment-top2 {
      float: right;
      color: #d9613b;
      font-size: 13px;
    }
  }
  .comment-bor {
    height: 40px;
    line-height: 40px;
    .comment-border {
      width: 95px;
      height: 20px;
      background-color: #fdebe7;
      color: #111111;
      border-radius: 20px;
      padding: 5px 15px;
    }
  }
  .offuser {
    margin-top: 10px;
    height: 50px;
    .div1 {
      float: left;
      margin-left: 10px;
      width: 70%;
      display: inline;
      height: 25px;
      line-height: 25px;
      font-size: 16px;
      color: #111111;
      font-weight: 600;
    }
    .div2 {
      float: left;
      margin-left: 10px;
      width: 70%;
      display: inline;
      height: 25px;
      line-height: 25px;
      font-size: 11px;
    }

    .user-img {
      display: inline-block;
      width: 50px;
      height: 100%;
      float: left;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .pingjia {
    line-height: 30px;
    margin-left: 15px;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 400;
    color: black;
  }
  .data {
    margin: 10px 15px;
    font-size: 14px;
    text-align: left;
    color: rgb(189, 187, 187);
  }
  .images {
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 10px;

    img {
      width: 80px;
      height: 80px;
      padding-right: 1px;
    }
    img:last-child {
      padding-right: 0;
    }
  }
}
</style>
