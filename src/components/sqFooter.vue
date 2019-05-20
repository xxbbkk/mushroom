<template>
<div>
  <div class="sq-app">
    <!-- 遍历底部四个路由 -->
    <router-link
      class="sq-app-li" 
      v-for="nav in navs"
      :key="nav.name"
      :to="{name:nav.name}"
      tag="li"
    >
    <span class="iconfont" v-html="nav.meta.icon"></span>
    {{nav.meta.title}}</router-link>
  </div>
  <span class="sq-footer-count">{{sumCount | mt100}}</span>
</div>
</template>

<script>
import routes from '@/router/routes'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      // 过滤掉首页重定向的数据，留下需要的（四个）模块
      navs: ''
    }
  },
  created() {
    this.navs = routes.filter(item =>  item.meta.isTabItem === true)
  },
  computed: {
    ...mapGetters([
      'sumCount'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .sq-app {
    color: grey;
    height: 52px;
    width: 100%;
    display: flex;
    .router-link-exact-active,
    .router-link-active{
      color: #FF5777;
    }
    &-li{
      width: 25%;
      box-sizing: border-box;
      text-align: center;
      height: 100%;
      border-top: 1px solid #dedede;
      display: flex;
      flex-direction: column;
      padding-top:2px; 
      line-height: 25px;
      justify-content: center;
  }
  }
  .sq-footer-count {
    position: fixed;
    bottom: 10vw;
    right: 39vw;
    font-size: 12px;
    background: red;
    color: white;
    width: 28px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 8px;
    z-index:300;
  }
</style>
