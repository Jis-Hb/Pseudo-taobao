<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f9f9f9;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
