<template>
  <div class="container">
    <div class="SerchTopBar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center">
        <div class="centerLeft"><slot name="centerLeft"></slot></div>
        <div class="centerright"><slot name="centerright"></slot></div>
      </div>
      <div class="right">
        <slot class="RightSpan" name="right"></slot>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SerchTopBar'
}
</script>

<style lang="less" scoped>
.container {
  height: 90px;
  background-color: #d46551;
  padding: 0 10px;
  .SerchTopBar {
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
    background-color: #d46551;
    color: #fafdfb;
  }

  .center {
    align-self: center;
    flex: 1;
    display: flex;
    justify-content: center;
    justify-content: center;
    letter-spacing: 2px;

    .centerLeft {
      color: #f6fbee !important;
      font-weight: 100;
      font-size: 16px !important;
    }
    .centerright {
      font-weight: 500;
    }
    .centerLeft,
    .centerright {
      margin: 0 10px;
      font-size: 17px;
    }
  }

  .left {
    align-self: flex-start;
    width: 23vw;
  }
  .right {
    align-self: flex-end;
    width: 23vw;
  }
}
</style>
