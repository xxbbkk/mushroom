<template>
  <div class="sq-mall">
    <div class="back">
 
    <ul class="sq-mall-nav">

      <router-link 
      v-for="item in category"
      :key="item.id"
      class="sq-mall-nav_item1" 
      tag="li" 
      :to="`/list/${item.id}`"
      >
      <div class="sq-mall-nav__pic"><img :src="item.imageUrl" alt=""></div>
      <div class="sq-mall-nav__span">{{item.name}}</div>
      </router-link>
      <back-top
         class="sq-cate-right__top"
        scroll-container=".back"
        :distance-to-show="300"
      ></back-top>

    </ul>
    <div class="sq-mall-sort">
      <img class="sq-mall-sort__img" @click="addToGlobalCart" src="https://s10.mogucdn.com/mlcdn/c45406/181112_04h64bddba7932720jh8j025g9kk5_750x200.jpg" alt="">
    </div>
    <div class="sq-mall-like">
      <img class="sq-mall-like__img" src="https://s10.mogucdn.com/mlcdn/c45406/190426_4hlfgkc2ceaea67422ag73077lfce_1611x166.png_1000x9999.v1c7E.81.webp" alt="">
      <router-view></router-view>
    </div>
         
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      category: []
    }
  },
  created() {
    this.$http.getDate()
    .then(resp => {
      const {list} = resp.data.data
      this.category = list.splice(0,15)
      this.$nextTick()
      .then(() => {
        const {cateID= list[0].id} = this.$route.params
        this.$router.push(`/shop/${cateID}`)
      })
    })
  },
  methods: {
    addToGlobalCart () {
      console.log('添加到购物车',this.id)
    }
  }
}
</script>

<style lang="scss">
.sq-cate-right__top {
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 10;
}
.back {
  overflow-x: hidden;
}
.sq {
  &-mall {
    // height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    &-nav {
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
      padding: 10px 0;
      width: 100%;
      flex-wrap: wrap;

      &_item1 {
        width: 20%;
      
        >.pic {
              width: 100%;
              border-radius: 50%;
              height: 0;
              padding-top: 100%;
              position: relative;
         }
         img {
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                max-width: 100%;
            }
      }
      
      &__span {
         line-height: 30px;
         text-align: center;
         color: #666;
        }

        &_sq-cate-right__top {
        margin: 50px 0;
      }
    }

    &-sort {
      padding-top: 20px;
      width: 100%;

      &__item3 { 
        height: 19%;
        width: 19%;
        justify-content: space-around;
        
        background: red;
        &.router-link-active,
        &.router-link-exact-active {
          color: #fff;
        }
      }
      &__img {
            position: relative;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            max-width: 100%;
      }
    }

      &-pop {
      background: #bb3b;
    }

    &-like {
      background: #fff;
      flex: 1;
      &__img {
        width: 100%;
      }
    }
    }
    }
</style>
