<template>
<div class="sq-my">
  <van-cell-group>
    <van-cell :title="userInfo.diplayName" value="尊敬的会员欢迎你!" />
  </van-cell-group>
    <van-cell-group>
    <van-cell @click="outLogin" value="退出登录" />
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
  methods: {
    outLogin() {
      this.$router.push('/login')
      this.$store.state.userInfo = {
        'diplayName': '',
    }

    }
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
