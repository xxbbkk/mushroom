<template>
  <div class="sq-header">
    <!-- 搜索标签 -->
    <router-link tag="div" to="/category" class="iconfont sq-header-icon">&#xe600;</router-link>
    <van-search class="sq-header-input" placeholder="请输入搜索关键词" v-model="value" />
    <router-link tag="div" to="/my" class="iconfont sq-header-icon">&#xe69a;</router-link>
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
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
  height: 52px;
  background: white;
  overflow: hidden;
  z-index: 100;
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
