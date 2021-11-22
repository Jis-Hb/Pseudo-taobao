<template>
  <div class="container">
    <div class="Serch">
      <div class="SerchTop">
        <slot name="Serch-Serch"></slot>
      </div>
      <div class="info">
        <slot name="top-name"></slot>
      </div>
    </div>

    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
// import Serch from '../SerchTopBar/Serch.vue'
export default {
  name: 'SerchTmpelate',
  components: {
    // Serch
  }
}
</script>

<style lang="less" scope>
.container {
  width: 100%;
  height: 100%;
  .Serch {
    background-color: #c96a58;
    height: 25vw;
    padding: 10px;
    .SerchTop {
      display: flex;
      align-items: center;
      .back {
        height: 100%;
        margin-right: 10px;
        color: #fff;
      }
    }
    .info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 10vw;
      color: #fff;
    }
  }
  .content {
    position: relative;
    top: -10px;
    background-color: #fff;
    height: 87%;
    border-radius: 15px 15px 0px 0px;
    padding: 10px;
    overflow: scroll;
  }
}
</style>
