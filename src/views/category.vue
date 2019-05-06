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

<style lang="scss" scoped>

.sq-cate {
  font-size: 16px;
  display: flex;
  height: 100%;
  overflow: hidden; 
  &-left {
    overflow-x: hidden;
    background: #f1f1f1;
    color: #666666;
    width: 30%;
    box-sizing: border-box;
    > li{
    justify-content: center;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    height: 48px;
    &.router-link-active,
    &.router-link-exact-active {
          background: #fff;
    }
   }
  }
  &-right {
    overflow-x: hidden;
    width: 70%;
    box-sizing: border-box;
    &__top {
      position:fixed;
      right: 20px;
      bottom: 50px;
    }
  }
}

</style>
