<template>
<div>
  <!-- 轮播图 -->
  <div class="vh-swiper">
    <van-swipe :autoplay="2000"
    class="vh-swipe">
 <van-swipe-item v-for="(image, index) in images" :key="index" class="vh-swiper-item">
    <img v-lazy="image" class="vh-img"/>
  </van-swipe-item>
</van-swipe>
</div>
<!-- 列表 -->
  <div class="vh-list">
    <ul>
      <router-link
      :to="`/list/${list.id}`"
      tag="li"
      v-for="list in vhList" 
      :key="list.id"
      v-cloak
      >
       <div class=vh-img>
      <img :src="list.imageUrl" alt="list.name">
      </div>
      <p>{{list.name}}</p>
      </router-link>
    <!-- <li v-for="list in vhList" 
    :key="list.id">
      <div class=vh-img>
      <img :src="list.imageUrl" alt="list.name">
      </div>
      <p>{{list.name}}</p>
    </li> -->
    </ul>
</div>
<!-- 用户信息 -->
<div class="vh-brance">
  <van-tabs 
  @click="toFind" 
  class="vh-brance__top"
  title-inactive-color = '#000'
  color = '#FF5777'
  >
  <van-tab title="发现"/>
  <van-tab title="关注"/>
  <van-tab title="流行"/>
</van-tabs>
  <div class="vh-brance__buttom">
    <VhUser 
     v-for="item in vhUser"
     :key="item.id"
    :id="item.id"
    :name="item.name"
    :title="item.title"
    :headPhoto="item.headPhoto"
    :clotheUrl="item.clotheUrl"
    :hot="item.hot"
     />
  </div>
</div>
</div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem,Lazyload,Tab,Tabs } from 'vant';

import VhUser from '@/views/VhUser'

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs);

export default {

data() {
    return {
      images: [
       'http://img1.lukou.com/static/p/commodity/img/20277746.jpeg',
        'https://img1.lukou.com/static/p/commodity/img/20190505-102451.jpeg'
        ],
        vhList:[],
        vhUser: []
    }
  },
  components: {
    VhUser
  },
  created () {
    //列表数据
   this.$http.getHomeList ()
   .then (resp => {
     const list = resp.data.data.list
     this.vhList = list.splice(2)
   }),
   //rap2模拟的用户数据
   this.$http.getUser ()
   .then (resp => {
     this.vhUser = resp.data.data
   })
  },
  methods: {
    //点击刷新用户数据
toFind () {
 this.data = this.vhUser.sort( () => {
   return (0.5-Math.random())
 })
}
}
}
</script>

<style lang="scss" scoped>
.vh {
&-swiper {
    width: 100%;
    padding-top: calc(100%*400/1080);
    position: relative;
}
&-swipe {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    img {
      max-width: 100%;
    }
}
&-list {
  width: 100%;

 ul{
  width: 100%;
  display: flex;
  flex-flow: wrap;
  li {
   width: 13%;
   margin:1% 3.3%;
   padding-top:calc(4/3);
   [v-cloak] {
     display: none;
   }
   .vh-img {
     width: 100%;
     padding-top:100%;
     border-radius: 50%;
     position: relative;
     overflow: hidden;
     img {
       max-width: 100%;
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
     }
   }
   p {
     line-height: 30px;
     text-align: center;
     color: #666;
     font-size:0.75em;
   }
  }
  }
}
&-brance {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &__top {
  width: 100%;
  padding-top: calc(1/10);
  font-weight: bold;
  border: 1px solid #e6e6e6;
  border-top:5px solid #f0f0f0; 
  display: flex;
  background: #fff;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 10;

}
}
}
</style>
