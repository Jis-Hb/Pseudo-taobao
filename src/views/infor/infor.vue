<template>
  <div class="infor">
    <InForTop></InForTop>
    <InForContent>
      <div class="content-Top">
        <span class="iconfont span1">&#xe649;</span>
        <span class="iconfont span2">&#xe8c0;</span>
        <span class="iconfont span3">&#xe666;</span>
        <span class="iconfont span4">&#xe610;</span>
        <span class="iconfont span5">&#xe9b9;</span>
      </div>
      <router-link to="/InForClick">
        <div class="infos" @click="busInfor">
          <img class="RightImg" src="~assets/img/AI.jpg" alt="" />
          <div class="RightInfo">
            <p class="p1">{{ infoName }}</p>
            <p class="p2">
              {{ $store.state.ClickInfo.content ? $store.state.ClickInfo.content : '暂无消息' }}
            </p>
            <div class="biaoji" v-if="$store.state.ClickInfo.isShow !== 0">
              {{ $store.state.ClickInfo.isShow }}
            </div>
          </div>
        </div>
      </router-link>
    </InForContent>
  </div>
</template>

<script>
import InForTop from './News/infor-top'
import InForContent from './News/infor-content'
export default {
  name: 'infor',
  components: {
    InForTop,
    InForContent
  },
  data() {
    return {
      infoName: '炸毛小焦'
    }
  },
  methods: {
    busInfor() {
      this.$store.commit('InForName', this.infoName)
      this.$store.state.ClickInfo.isShow = 0
    }
  }
}
</script>

<style lang="less" scoped>
.infor {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .content-Top {
    height: 7vh;
    padding: 10px;
    .span1 {
      font-size: 20px;
      margin-right: 10px;
    }
    .span2 {
      font-size: 20px;
      margin-right: 10px;
    }
    .span3 {
      font-size: 20px;
      margin-right: 10px;
    }
    .span4 {
      font-size: 20px;
      margin-right: 10px;
    }
    .span5 {
      float: right;
      font-size: 20px;
      margin-right: 5px;
    }
  }
  .infos {
    height: 12vh;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    padding: 10px;
    .RightImg {
      flex: 0.1;
      height: 100%;
      width: 17vw;
      background-color: red;
      border-radius: 50%;
    }
    .RightInfo {
      flex: 0.9;
      padding: 5px 10px;
      .p1 {
        color: #000;
        font-weight: 600;
      }
      .p2 {
        margin-top: 10px;
        color: #9a9a9a;
      }
      .biaoji {
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
        background-color: #ca6b57;
        position: absolute;
        bottom: 8vw;
        right: 10vw;
        text-align: center;
        line-height: 5vw;
        color: #fff;
      }
    }
  }
}
</style>
