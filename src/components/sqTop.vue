<template>
<div>
  <van-nav-bar
    :title="headerTitle"
    v-if="isShowHeaderBack"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-nav-bar
    v-else
    :title="headerTitle"
    @click-left="onClickLeft"
  />
</div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant';
import { mapState } from 'vuex'

Vue.use(NavBar)
export default {
  methods: {
    onClickLeft(){
      this.$router.back();
    }
  },
  computed: {
    ...mapState([
      'headerTitle',
      'isShowHeaderBack'
    ])
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
