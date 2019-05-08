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
    <img
      :src="item.image"
      alt=""
      class="sq-product-img"
    ><br>
    <span class="sq-product-text">{{item.title}}</span>
    <div class="sq-product-price">
      <span class="sq-product-price__origin">￥{{item.originPrice}}</span>
      <span class="sq-product-price__now">￥{{item.price}}</span>
    </div>
  </router-link>
  <div class="sq-product-more" v-if="!isEnd">没有更多了</div>
</div>
</template>

<script>
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
  created() {
  },
  methods: {
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
    padding-top:180px;
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &-img {
      width: 95%;
      height: 180px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &-price {
      display: flex;
      justify-content: space-between;
      margin: 5px;
      box-sizing: border-box;
      &__origin {
        display: block;
        color: grey;
        height: 30px;
        line-height: 30px;
        text-decoration: line-through;
      }
      &__now {
        height: 30px;
        line-height: 30px;
        color: red;
      }
    }
  }
  .sq-product-more {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
</style>
