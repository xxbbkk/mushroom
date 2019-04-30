<template>
  <div>
    <!-- 搜索标签 -->
    <van-search placeholder="请输入搜索关键词" v-model="value" />
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

<style>

</style>
