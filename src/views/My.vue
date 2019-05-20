<template>
<div class="sq-my">
  <div class="sq-my-img"><img :src="userInfo.avatar"></div>
  <van-cell-group>
    <van-cell :title="userInfo.diplayName" value="尊敬的会员欢迎你!" />
  </van-cell-group>
</div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);

export default {
  computed: {
    ...mapState([
      'userInfo'
    ])
  },

}
</script>

<style lang="scss">
.sq-my{
  padding: 10% 2%;
  &-img {
    width: 100vw;
    text-align: center;
    img {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
