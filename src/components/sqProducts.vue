<template>
<div
  class="sq-pro"
  v-infinite-scroll="getProducts"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10"
>
  <router-link
    tag="li"
    v-for="item in products"
    :key="item.id"
    :to="`/details/${item.id}`"
    class="sq-product"
  >
  <div class="vh-img-box">
  <div class="vh-img">
    <img :src="item.image" alt="" >
    </div>
    <span class="sq-product-text">{{item.title }}</span>
    <div class="sq-product-price">
      <strong>￥{{item.price | toFixed2 }}</strong>
      <van-icon name="star-o" class="sq-product__icon" />
      <i class="sq-product__i">{{item.saleNum}}</i>
    </div>
    <div class="sq-product-btn">
      <van-button
        plain 
        type="danger"
        size="small"
        @click.stop="addToCart({
          id: item.id,
          title: item.title,
          img: item.image,
          price: item.price,
          isChecked: false
        })"
      >加入购物车</van-button>
    </div>
    </div>
  </router-link>
  <div class="sq-product-more" v-if="!isEnd">没有更多了</div>
</div>
</template>

<script>
import Vue from 'vue'
import { Button,Icon } from 'vant';
Vue.use(Button).use(Icon);

import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      products: [],
      //判断是否为最后一页
      isEnd: false,
      start: 0,
      //用于无限滚动
      loading: false
    }
  },
  methods: {
    ...mapMutations([
      'addToCart'
    ]),
    //该方法请求产品
    getProducts (){
      this.loading = true;
      let cateId = this.$route.params.cateId
      this.$http.getProductsById(cateId,this.start)
      .then((res) => {
        res.data.data.items.list = res.data.data.items.list.filter(item => item.title != undefined)
        this.products = [...this.products, ...res.data.data.items.list]
        this.isEnd = res.data.data.items.isEnd
        this.start = res.data.data.items.nextIndex
        this.loading = false
      })
    }
  },
  // //进入路由前先获取一次数据
  // beforeRouteEnter(to, from, next) {
  //   //改地方没有this，vm代表this。
  //   next(vm => {
  //     vm.getProducts()
  //   })
  // },
  beforeRouteUpdate(to, from, next) {
    next()
    //在路由更新前初始化数组和分页
    this.products = [];
    this.start = 0;
    this.getProducts();
  }
}
</script>

<style lang="scss">
  .sq-pro {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .sq-product {
    position: relative;
    width: 48%;
    height: 0;
    padding-top:calc(100%*850/1080);
    padding-bottom: 2%;
    margin:2% 1%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    &-text {
      height: 25px;
      font-size: 12px;
    }
    .vh-img-box {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
     .vh-img {
            width: 100%;
            height: 0;
            padding-top: 100%;
            position: relative;
            box-sizing: border-box;
            border-radius: 2%;
            img {
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
        }
    &-btn {
      padding: 0 18px;
      margin: 28% 8%;
    }
    &-price {

      margin: 8% 0;
      box-sizing: border-box;
     strong {
        font-weight: bold;
           font-size: 16px;
           float: left;
           color: #FF5577;
      }
    }
     &__icon {
          margin-left: 2%;
          float: right;
           color: #999;
           font-size: 12px;
       }
       &__i {
           font-size: 12px;
            color: #999;
            line-height: 14px;
            float: right;
       }
  }
  .sq-product-more {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #666;
    font-size: 14px;
  }
</style>
