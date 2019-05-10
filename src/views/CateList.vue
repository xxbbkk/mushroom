<template>
<div class="sq-mall">
 <div
    v-infinite-scroll="getData"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <SqProductItem
      v-for="item in productList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imgSrc="item.image"
      :price="item.price"
    /> 
  </div>
    <div v-if="isEnd" class="load-more-btn no-more">没有更多了</div>
    <!-- <div v-else class="load-more-btn" @click="getData">加载更多</div> -->
</div>
 
</template>

<script>
import SqProductItem from '@/components/SqProductItem'
export default {
  components: {
    SqProductItem
  },
  data () {
    return {
      productList: [],
      isEnd: false,
      start: 0
    }
  },
  methods: {
    getData () {
      this.loading = true
      const { cateID } = this.$route.params
     this.$http.getProductList(cateID,this.start).then(resp => {
       resp = resp.data.data
      this.productList = [...this.productList,...resp.items.list]
      this.isEnd = resp.items.isEnd
      this.start = resp.items.nextIndex
      this.loading = false
    })
    }
  },
  // 由于当前组件是一个动态路由所匹配的一个router-view，当动态路由发生改变的时候，该组件不会重新销毁在创建，
  //也就是说created只会执行一次，那么就造成一个严重的问题就是分类切换的时候数据不更新
  // 解决的方式有两种
  // created () {
  //   this.getData()
  // },
  // 第一种方式在watch里创建一个监听，监听$router的变换，再重新请求一次数据
  // watch: {
  //   $route() {
  //     this.getData()
  //   }
  // }

  // 第二种方式，使用router的生命周期（导航守卫）
  beforeDestroy (to, from, next) {
    //这里没有this，所以要通过next的回调里传递vm，这个vm就是this
    next(vm => {
      vm.getData()
    })
  },
  // 切换的时候会走beforRouteUpdate的生命周期，所以再取一次
  beforeRouteUpdate (to, from, next) {
    this.productlist = []
    this.start = 0
    next()
    this.getData()
    }
}
</script>

<style lang="scss" scoped>
.sq-mall {
  
  
  .load-more-btn {
  display: block;
  line-height: 32px;
  background-color: #ff5777;
  margin: 8px;
  text-align: center;
  border-radius: 3px;
  &.no-more {
    background-color: #eee;
    color: #999;
  }
}
}
</style>
