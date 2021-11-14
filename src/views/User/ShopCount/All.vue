<template>
  <div class="All-content">
    <div v-if="$store.state.shopObj.pingjia === undefined" class="dpj-content">
      没有查询到信息！
    </div>
    <div class="All-box" v-for="(item, index) in $store.state.shopObj" :key="index">
      <p class="name">
        <span class="name-left">{{ item.name }}</span>
        <span class="name-right">交易成功</span>
      </p>
      <div class="center">
        <div class="left">
          <img :src="item.images" alt="" />
        </div>
        <div class="right">
          <p class="title">
            <span class="title-left">{{ item.title }}</span>
            <span class="title-right">￥{{ item.price }}</span>
          </p>
          <div class="desc">
            <div class="desc-left">{{ item.desc }}</div>
            <div class="desc-right">x{{ item.count }}</div>
          </div>
          <div class="all-price">
            <span class="price-left">总价￥{{ item.price }}</span>
            <span class="price-right">实付款￥{{ item.price * item.count }}</span>
          </div>
        </div>
        <div class="bottom">
          <span class="span1">更多</span>
          <span class="span3">加入购物车</span>
          <span class="span4">评价</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.All-content {
  margin-top: 10px;
  padding: 10px;
  text-align: center;

  .All-box {
    background-color: #fff;
    border-radius: 15px;
    padding: 0 10px;
    padding-bottom: 10px;
    margin-bottom: 15px;

    .name {
      height: 40px;
      line-height: 40px;
      .name-left {
        float: left;
        font-size: 18px;
        color: #0d0d0d;
        font-weight: 600;
      }
      .name-left::before {
        font-family: 'iconfont';
        content: '';
        color: #0d0d0d;
        margin-right: 5px;
      }
      .name-left::after {
        font-family: 'iconfont';
        content: '';
        margin-left: 10px;
        color: #c5c5c5;
        font-size: 16px;
        line-height: 40px;
      }
      .name-right {
        float: right;
        color: #d56017;
        margin-top: 1px;
      }
    }
    .center {
      padding: 10px;

      .left {
        float: left;
        width: 100px;
        height: 100px;
        margin-top: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
      }
      .right {
        float: right;
        width: 210px;
        padding: 10px 0;
        .title {
          .title-left {
            float: left;
            width: 170px;
            overflow: hidden;
            height: 20px;
            line-height: 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #111111;
            font-weight: 600;
          }
          .title-right {
            float: right;
            color: #111111;
            font-weight: 600;
          }
        }
        .desc {
          .desc-left {
            margin-top: 10px;
            float: left;
            width: 140px;
            overflow: hidden;
            height: 20px;
            line-height: 20px;
            font-size: 13px;
            color: #9a9a9a;
            font-weight: 600;
          }
          .desc-right {
            margin-top: 13px;
            font-size: 13px;
            float: right;
            color: #9a9a9a;
            font-weight: 600;
          }
        }
        .all-price {
          height: 30px;
          margin-top: 70px;
          display: flex;
          .price-left {
            float: left;
            flex: 1;
            margin-left: 10px;
            color: #939393;
            font-weight: 700;
            line-height: 30px;
          }
          .price-right {
            flex: 1;

            text-align: center;
            float: left;
            line-height: 30px;
            color: #070707;
            font-weight: 700;
          }
        }
      }
    }
    .bottom {
      margin-top: 130px;
      width: 100%;
      line-height: 30px;
      height: 30px;
      .span1 {
        float: left;
        color: #9c9c9c;
      }
      .span3 {
        float: left;
        margin-left: 90px;
        padding: 0 10px;
        text-align: center;
        color: #070707;
        font-weight: 500;
        font-size: 18px;
        border: 1px solid #d2d2d2;
        border-radius: 30px;
      }
      .span4 {
        float: right;
        padding: 0 20px;
        margin-left: 10px;
        text-align: center;
        border: 1px solid #d68365;
        color: #d68365;
        border-radius: 30px;
      }
    }
  }
}
</style>
