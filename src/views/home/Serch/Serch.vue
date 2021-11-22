<template>
  <SerchTmpelate class="container">
    <div class="top-name-border-bottom" v-if="isclickSerch" slot="top-name">全部</div>
    <div v-if="isclickSerch" slot="top-name">天猫</div>
    <div v-if="isclickSerch" slot="top-name">上新</div>
    <div v-if="isclickSerch" slot="top-name">店铺</div>

    <div class="Serch-Top" slot="Serch-Serch">
      <div @click="back" class="iconfont back">&#xe60e;</div>
      <div class="serch">
        <span class="iconfont fangdajing">&#xe60b;</span>
        <input @input="value" v-model="inputValue" class="input" type="text" placeholder="搜索" />
        <span @click="inputValue = ''" v-if="inputValue !== ''" class="iconfont clear"
          >&#xe62f;</span
        >
        <button class="serchBtn" @click="clickSerch">搜索</button>
      </div>
    </div>
    <div slot="content" v-if="inputValue === '' && !isclickSerch">
      <div class="sousuo">
        <div class="Top-info">
          <span class="info1">搜索发现</span>
          <span class="iconfont info2">&#xe9b9;</span>
        </div>
        <div class="center-info">
          <span class="span1" @click="inputValue = '网红'">网红</span>
          <span class="span1" @click="inputValue = '2018'">2018</span>
          <span class="span1" @click="inputValue = '新品'">新品</span>
        </div>
      </div>
    </div>
    <div slot="content" v-if="inputValue !== '' && !isclickSerch">
      <ul class="Serch-info-Ul">
        <li
          @click="SearchForGoods(item.iid)"
          v-for="(item, index) in Serch"
          :key="index"
          class="Serch-info-li"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div slot="content" v-if="isclickSerch">
      <div class="Showscarcity">
        <div
          @click="scarcittClick(item.iid)"
          class="scarcity"
          v-for="(item, index) in Serch"
          :key="index"
        >
          <img class="scarcityImg" :src="item.show.img" alt="" />
          <p class="scarcittP">{{ item.title }}</p>
          <span class="Lprice"
            >￥<span class="Rprice">{{ item.price }}</span></span
          >
          <span class="cfav">{{ item.cfav }}人付款</span>
        </div>
      </div>
    </div>
  </SerchTmpelate>
</template>

<script>
import SerchTmpelate from 'components/common/SerchTmpelate/SerchTmpelate'
import { getHomeGoods } from 'network/home'

export default {
  name: 'Serch',
  components: {
    SerchTmpelate
  },
  data() {
    return {
      SerchList: [],
      inputValue: '',
      isclickSerch: false
    }
  },
  created() {
    this.getHomeGoods()
  },
  activated() {
    this.inputValue = ''
    this.isclickSerch = false
  },
  computed: {
    Serch() {
      return this.SerchList.filter((item, index) => {
        return item.title.indexOf(this.inputValue) !== -1
      })
    }
  },
  methods: {
    getHomeGoods() {
      getHomeGoods('pop', 1).then(res => {
        // console.log(res.data.data.list)
        res.data.data.list.forEach(item => {
          this.SerchList.push(item)
        })
      })
    },
    value() {
      this.isclickSerch = false
    },
    back() {
      this.$router.go(-1)
    },
    SearchForGoods(iid) {
      this.$router.push(`/detail/${iid}`)
    },
    scarcittClick(iid) {
      this.$router.push(`/detail/${iid}`)
    },
    clickSerch() {
      if (this.inputValue === '') return
      console.log(111)
      this.isclickSerch = true
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  .Serch-Top {
    display: flex;
    align-items: center;
    width: 100%;
    .back {
      height: 100%;
      margin-right: 10px;
      color: #fff;
    }
    .serch {
      margin-top: 1vw;
      border-radius: 12vw;
      height: 9vw;
      width: 100%;
      padding: 1vw;
      background-color: #fff;
      display: flex;
      .fangdajing {
        flex: 0.1;
        text-align: center;
        font-size: 5vw;
        line-height: 7vw;
        border-right: 1px solid #ccc;
        margin-right: 1vw;
        font-weight: 600;
        color: #ca5124;
      }
      .input {
        flex: 0.9;
        height: 100%;
        border: none;
        color: rgba(0, 0, 0, 0.767);
      }
      .clear {
        margin-top: 1vw;
        margin-right: 8vw;
        color: #aeaeae;
        transform: rotate(45deg);
        font-size: 5vw;
      }
      .serchBtn {
        position: relative;
        background: -webkit-linear-gradient(left, #f19a39, #ee6634);
        width: 60px;
        border: none;
        border-radius: 15px;
        color: #fff;
        height: 100%;
      }
      .serchBtn::before {
        position: absolute;
        font-family: 'iconfont';
        content: '';
        left: -7vw;
        border-right: 1px solid #ccc;
        padding-right: 5px;
        color: #646464;
      }
    }
  }

  .sousuo {
    height: 30vw;
    .Top-info {
      display: flex;
      justify-content: space-between;
      color: #0d0d0d;
      font-weight: 600;
    }
    .center-info {
      height: 25vw;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      .span1 {
        background-color: #f7f7f7;
        padding: 5px 10px;
        height: 7vw;
        border-radius: 30px;
        margin-right: 5px;
        margin-top: 5px;
      }
    }
  }
  .Serch-info-Ul {
    .Serch-info-li {
      border-bottom: 1px solid #ccc;
      padding-bottom: 5vw;
      height: 7vw;
      font-size: 6vw;
      overflow: hidden;
      margin-bottom: 5vw;
    }
    .Serch-info-li::before {
      font-family: 'iconfont';
      content: '';
      margin-right: 5px;
    }
  }
  .Showscarcity {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .scarcity {
      width: 45vw;
      margin-bottom: 3vw;

      .scarcityImg {
        width: 100%;
        height: 80%;
        border-radius: 10px;
      }
      .scarcittP {
        height: 4vw;
        overflow: hidden;
        color: #0d0d0d;
        margin: 2vw;
      }
      .Lprice {
        margin: 2vw;
        color: #e65620;
        font-size: 3vw;
        .Rprice {
          font-size: 5vw;
        }
      }
      .cfav {
        margin-left: 3vw;
        color: #979797;
      }
    }
  }
}
.top-name-border-bottom {
  border-bottom: 2px solid #fff;
  padding-bottom: 1vw;
}
</style>
