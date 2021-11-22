<template>
  <div class="infor-top">
    <div class="info">
      <span>消息(0)</span>
      <span class="weidu">清除未读</span>
      <span class="img"></span>
    </div>
    <div class="serch">
      <span class="iconfont">&#xe60b;</span>
      <input class="input" type="text" placeholder="搜索" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'inforTop'
}
</script>

<style lang="less" scoped>
.infor-top {
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  background-color: #ca6b57;

  padding: 15px 10px;
  .info {
    color: #fff;
    height: 10vw;
    line-height: 10vw;
    font-size: 20px;
    width: 100%;
    .weidu {
      font-size: 12px;
      margin-left: 10px;
      color: #e9aeab;
    }
    .weidu::before {
      font-family: 'iconfont';
      content: '';
      margin-right: 5px;
      color: #e9aeab;
    }
    .img {
      float: right;
    }
    .img::before {
      font-family: 'iconfont';
      content: '';
      font-size: 20px;
    }
    .img::after {
      font-family: 'iconfont';
      content: '';
      font-size: 20px;

      margin-left: 15px;
    }
  }
  .serch {
    margin-top: 10px;
    border-radius: 12vw;
    height: 10vw;
    width: 100%;
    padding: 5px;
    background-color: #fff;
    display: flex;
    .iconfont {
      flex: 0.1;
      text-align: center;
      font-size: 20px;
      color: #ca6b57;
      line-height: 7vw;
      border-right: 1px solid #ccc;
      margin-right: 5px;
      font-weight: 600;
    }
    .input {
      flex: 0.9;
      width: 100%;
      height: 100%;
      border: none;
      line-height: 15vw;
      color: #000;
    }
  }
}
</style>
