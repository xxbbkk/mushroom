<template>
  <van-nav-bar
  title="标题"
  left-text=" 返回"
  class="vh-color"
  left-arrow
  @click-left="onClickLeft"
/>
</template>

<script>
import Vue from 'vue'
import { NavBar,Icon } from 'vant';

Vue.use(NavBar).use(Icon);
export default {
  methods: {
    onClickLeft(){
      window.history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar__text {
  color: #FF5577;
  font-weight: 500;
}
.van-icon {
  color: #FF5577;
  font-weight: 500;
}
</style>
