<template>
<div class="sq-cart">
  <div class="sq-cart-box">
    <sqShopCard
      v-for="item in cates"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :isChecked="item.isChecked"
      :price="item.price"
      :number="item.number"
      :img="item.img"
      @aClick= "receive"
    />
  </div>
  <van-submit-bar
    class="sq-cart-sum"
    :price="sumPrice"
    button-text="提交订单"
  >
    <van-checkbox v-model="allCheckBtn" @click="allCheckClick">全选</van-checkbox>
    <!-- <span slot="tip">
      你的收货地址不支持同城送, <span>修改地址</span>
    </span> -->
  </van-submit-bar>
</div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Checkbox, SubmitBar } from 'vant';
Vue.use(Cell).use(CellGroup).use(Checkbox).use(SubmitBar);


import sqShopCard from '@/components/sqShopCard'
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'shopCart',
  components: {
    sqShopCard
  },
  data() {
    return {
     allCheckBtn: this.$store.getters.isAllChecked
    }
  },
  computed: {
    ...mapState([
      'cates'
    ]),
    ...mapGetters([
      'sumPrice',
      'isAllChecked'
    ])
  },
  inject: ['reload'],
  methods: {
    receive(res) {
      this.allCheckBtn = res
    },
    allCheckClick() {
      this.$store.commit('allCheckChange', this.allCheckBtn)
      this.reload()
    }
  }
}
</script>

<style lang="scss">
.sq-cart {
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  &-box {
    overflow: scroll;
    flex: 1;
  }
  &-sum {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
