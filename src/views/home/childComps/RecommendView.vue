<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  border-radius: 10px;
  border-bottom: 1px solid #eee;
  padding: 5px 10px;
  background-color: #fff;
  margin: 0 5px;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
