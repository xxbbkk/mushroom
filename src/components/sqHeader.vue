<template>
  <div class="sq-header">
    <!-- 搜索标签 -->
    <div class="iconfont sq-header-icon">&#xe600;</div>
    <van-search class="sq-header-input" placeholder="请输入搜索关键词" v-model="value" />
    <div class="iconfont sq-header-icon">&#xe69a;</div>
  </div>
</template>

<script>
//引入搜索组件
import { Search } from 'vant';
import Vue from 'vue'

Vue.use(Search);
export default {
  
}
</script>

<style lang="scss">
.sq-header{
  display: flex;
  align-items: center;
  &-icon{
    width: 30px;
    font-size: 20px !important;
    display: flex;
    justify-content: center;
  }
  &-input{
    flex:1;
  }
}
</style>
