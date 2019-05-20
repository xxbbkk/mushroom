<template>
  <div class="sq-cate">
    <ul class="sq-cate-left">
      <router-link

        tag="li"
        v-for="cate in list"
        :key="cate.id"
        :to="`/category/${cate.id}`"
      >{{cate.name}}</router-link>
    </ul>
    <ul class="sq-cate-right">

      <router-view></router-view>
      <back-top
        class="sq-cate-right__top"
        scroll-container=".sq-cate-right"
        :distance-to-show="300"
      ></back-top>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'category',
  data () {
    return {
      list: []
    }
  },
  created() {
    this.$http.getDate()
    .then(resp => {
      this.list = resp.data.data.list


      //刷新页面时进入上一的选择，默认第一个
      let { cateId=this.list[0].id } = this.$route.params
      this.$router.push(`/category/${cateId}`)

    })
  }

}
</script>

<style lang="scss">

.sq-cate {
  width: 100%;
  height: 100%;
  font-size: 16px;
  display: flex;
  height: 100%;
  overflow: hidden; 
  &-left {
    overflow-x: hidden;
    background: #F6F6F6;
    color: #666666;
    font-size: 14px;
    width: 26%;
    box-sizing: border-box;
    border-left: 3px solid #F6F6F6;
    > li{
    justify-content: center;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    height: 48px;
    &.router-link-active,
    &.router-link-exact-active {
          background: #fff;
          color: #FF5577;
          border-left: 3px solid #FF5577;
          font-weight: bold;
    }
   }
  }
  &-right {
    overflow-x: hidden;
    flex:1;
    box-sizing: border-box;
    &__top {
      position:fixed;
      right: 10px;
      bottom: 50px;
    }
  }
}

 

</style>
