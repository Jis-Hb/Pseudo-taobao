<template>
  <div class="topnav-content">
    <NavBar>
      <div slot="center" class="navbar-center">
        <ul>
          <li v-for="(item, index) in topList" :key="index" @click="onclick(index)">
            <span :class="{ centeron: index === centerIndex }">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div slot="left" @click="black" class="left">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  data() {
    return {
      centerIndex: 0
    }
  },
  components: {
    NavBar
  },
  props: {
    topList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    onclick(index) {
      this.centerIndex = index
      this.$emit('titleClick', index)
    },
    black() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.topnav-content {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #fff;
  .navbar-center {
    ul {
      display: flex;
      text-align: center;
      li {
        font-size: 15px;
        flex: 1;
        .centeron {
          color: #1d82fe;
          padding-bottom: 5px;
          border-bottom: 2px solid #1d82fe;
        }
      }
    }
  }
  .left {
    img {
      margin-top: 12px;
    }
  }
}
</style>
