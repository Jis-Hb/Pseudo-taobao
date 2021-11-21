<template>
  <div class="infor-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'infor-content'
}
</script>

<style lang="less" scoped>
.infor-content {
  position: relative;
  top: -35px;
  border-radius: 15px 15px 0 0;
  width: 100%;
  background: #fff;
  z-index: 9999;
}
</style>
