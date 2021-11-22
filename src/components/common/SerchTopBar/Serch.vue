<template>
  <div class="serch">
    <span class="iconfont">&#xe60b;</span>
    <input class="input" type="text" placeholder="搜索" />
    <button class="serchBtn">搜索</button>
  </div>
</template>

<script>
export default {
  name: 'serch'
}
</script>

<style lang="less" scoped>
.serch {
  margin-top: 5px;
  border-radius: 12vw;
  height: 9vw;
  width: 100%;
  padding: 3px;
  background-color: #fff;
  display: flex;
  .iconfont {
    flex: 0.1;
    text-align: center;
    font-size: 5vw;
    line-height: 7vw;
    border-right: 1px solid #ccc;
    margin-right: 5px;
    font-weight: 600;
    color: #ca5124;
  }
  .input {
    flex: 0.9;
    height: 100%;
    border: none;
    color: rgba(0, 0, 0, 0.767);
  }
  .serchBtn {
    position: relative;
    background: -webkit-linear-gradient(left, #f8852c, #fc5a28);
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
</style>
