<template>
<div class="vh-list">
    <div class="vh-list-top">
  <van-tabs
   color = "#FF5777"
   title-inactive-color = '#000'
   title-active-color = '#FF5777'
  >
  <van-tab title="综合"></van-tab>
  <van-tab title="销量"></van-tab>
  <van-tab title="新品"></van-tab>
  <van-tab title="价格"></van-tab>
</van-tabs>
</div>
<div class="vh-list-bottom">
    <ul>
        <li 
        v-for="list in userList" 
        :key="list.id"
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
        </li>
    </ul>
</div>
</div>
</template>

<script>
import Vue from 'vue'
import { Tab,Tabs,Icon } from 'vant';
Vue.use(Tab).use(Tabs).use(Icon);
export default {
    data () {
       return {
            userList: []
       }
    },
    created () {
        const cateId = this.$route.params.cateId
      this.$http.getProductsById(cateId,this.start)
      .then(resp => {
        this.userList = [...this.userList,...resp.data.data.items.list]
    })
    }
//      methods: {
//     //该方法请求产品
//     getUserList (){
//       const cateId = this.$route.params.cateId
//       this.$http.getProductsById(cateId,this.start)
//       .then(resp => {
//            console.log (resp + 'wegcuecu')
//         this.userList = [...this.products,...resp.data.data.items.list]
//         this.isEnd = resp.data.data.items.isEnd
//         this.start = resp.data.data.items.nextIndex
//       })
//     },
//     beforeRuteEnter (to,from,next) {
//         next ()
//     },
//     beforeRuteUptate (to,from,next) {
//         next ()
//     }
//   }
}
</script>

<style lang="scss" scoped>
.vh {
    &-list {
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
            overflow-x: hidden;
           background-color: #f0f0f0;
            ul {
                width: 100%;
                display: flex;
                flex-flow: wrap;
                 margin-top: 2%;
                 li {
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
}
</style>
