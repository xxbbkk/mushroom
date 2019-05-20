<template>
<div class="vh-list">
    <div class="vh-list-top">
  <van-tabs
   color = "#FF5777"
   title-inactive-color = '#000'
   title-active-color = '#FF5777'
   @click="userHotList"
  >
  <van-tab title="综合"></van-tab>
  <van-tab title="销量"></van-tab>
  <van-tab title="新品"></van-tab>
  <van-tab title="价格"></van-tab>
</van-tabs>
</div>
<div class="vh-list-bottom">
    <ul
    v-infinite-scroll="getUserList"
     :infinite-scroll-disabled="loading"
     :infinite-scroll-distance="10"
     >
        <router-link
        v-for="list in userList" 
        :key="list.id"
        :to="`/details/${list.id}`"
        tag="li"
        class="vh-list-bottom__li"
        >
            <div class="vh-box">
            <div class="vh-box__img">
                <img :src="list.image" alt="">
            </div>
            <div class="vh-box-line">
            <b class="vh-box-line__hot">热卖</b>
            <span>{{list.title}}</span>
                </div>
                <strong>¥{{list.price}}</strong>
                <van-icon name="star-o" class="vh-box__icon" />
                <i class="vh-box__i">{{list.saleNum}}</i>
                </div>
        </router-link>
        <div class="vh-list-more" v-if="!isEnd" @click="getUserList">加载更多</div>
       <div class="vh-list-more" v-else>没有更多了</div>
       <back-top 
       class="vh-back-top"
        scroll-container=".vh-list-bottom"
        :distance-to-show="300"/>
    </ul>
</div>
</div>
</template>

<script>
import Vue from 'vue'
import { Tab,Tabs,Icon } from 'vant';
Vue.use(Tab).use(Tabs).use(Icon);
export default {
    name: 'list',
    data () {
       return {
            userList: [],
            isEnd: false,
            start: 0,
            loading: false
       }
    },
    // created () {
    //     const cateId = this.$route.params.cateId
    //   this.$http.getProductsById(cateId,this.start)
    //   .then(resp => {
    //     this.userList = [...this.userList,...resp.data.data.items.list]
    // })
    // },
     methods: {
         userHotList () {
             this.data = this.userList.sort( () => {
             return (0.5-Math.random())
             })
         },
    //该方法请求产品
    getUserList () {
      this.loading = true
      const cateId = this.$route.params.cateId
      this.$http.getProductsById(cateId,this.start)
      .then(resp => {
        resp.data.data.items.list = resp.data.data.items.list.filter(item => item.title != undefined)
        this.userList = [...this.userList, ...resp.data.data.items.list]
        this.isEnd = resp.data.data.items.isEnd
        this.start = resp.data.data.items.nextIndex
        this.loading = false
      })
    }
   },
   //在进入页面之前要先请求一次数据
//    beforeRouteEnter(to, from, next) {
//     next(vm => {
//       vm.getUserList()
//     })
//   },
  beforeRouteUpdate(to, from, next) {
    this.userList = [];
    this.start = 0;
    next()
   
    this.getUserList();
  }
}
</script>

<style lang="scss" scoped>
.vh {
    &-list {
        height: 100%;
        position: relative;
        &-top {
            border-top:1px solid rgb(190, 189, 189); 
            box-sizing: border-box;
            position: sticky;
            top: 0;
            z-index: 1;
        }
        &-bottom {
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            background-color: #f0f0f0;
           ul {
                width: 100%;
                display: flex;
                flex-flow: wrap;
                 margin-top: 2%;
            }
             &__li {
                     width: 47%;
                     height: 0;
                     padding-top:calc(100%*4/6);
                     padding-bottom: 1%;
                     margin: 1%;
                     position: relative;
                     border-radius: 2%;
                     box-sizing: border-box;
                     background-color: #fff;
                 }
        }
    }
    &-box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        &__img {
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
       &-line {
           width: 100%;
           height: 32px;
           padding: 2% 0;
           overflow: hidden;
           margin-bottom: 8%;
           
            &__hot {
            width: 15%;
            height: 10px;
            font-size: 12px;
            color: #fff;
            background: #FF743C;
            padding: 1% 2%;
            margin: 2%;
        }
        span {
            font-size: 12px;
            line-height: 18px;
        }
       }
       strong {
           font-weight: bold;
           font-size: 18px;
           margin-left: 5%;
           float: left;
       }
        &__icon {
          margin-left: 2%;
          float: right;
           color: #999;
           margin-right: 1%;
       }
       &__i {
           font-size: 14px;
            color: #999;
            line-height: 18px;
            float: right;
       }
    }
     &-list-more {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #666;
    font-size: 14px;
  }
  &-back-top {
      position:fixed;
      right: 10px;
      bottom: 50px;
  }
}
</style>
