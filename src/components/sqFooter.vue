<template>
  <div class="sq-app">
    <!-- 遍历底部四个路由 -->
    <router-link
      class="sq-app-nav" 
      v-for="nav in navs"
      :key="nav.name"
      :to="{name:nav.name}"
      tag="li"
    >
    <span class="iconfont" v-html="nav.meta.icon"></span>
    {{nav.meta.title}}</router-link>
  </div>
</template>

<script>
import routes from '@/router/routes'

export default {
  data() {
    return {
      // 过滤掉首页重定向的数据，留下需要的（四个）模块
      navs: routes.filter(item =>  item.meta.isTabItem === true)
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
  .sq-app {
    color: grey;
    &-nav {
      display: flex;
      flex-direction: column;
      padding-top:2px; 
      line-height: 25px;
    }
  }
</style>
