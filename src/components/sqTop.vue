<template>
  <van-nav-bar
  title="标题"
  left-text="返回"
  @click-left="onClickLeft"
/>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft(){
      window.history.go(-1)
    }
  }
}
</script>

<style>

</style>
