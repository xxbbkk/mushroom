<template>
  <div class="sq-cate">
    <ul class="sq-cate-left">
      <router-link
        v-for="cate in list"
        :key="cate.id"
        tag="li"
        :to="`/category/${cate.id}`"
      >{{cate.name}}</router-link>
    </ul>
    <ul class="sq-cate-right">
      <router-view/>
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
  created () {
    this.$http.getDate()
    .then(resp => {
      this.list = resp.data.data.list
      this.$nextTick( () => {
        let { cateId = this.list[0].id } =this.$route.params
        this.$router.push(`/category/${cateId}`)
      })
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
  overflow: hidden;
  &-left {
    overflow-x: hidden;
    background: #f1f1f1;
    color: #666666;
    width: 30%;
    box-sizing: border-box;
    border-left: 2px solid #f1f1f1;
    > li{
    justify-content: center;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    height: 48px;
    &.router-link-active,
    &.router-link-exact-active {
          color: #26a2ff;
          background-color: #fff;
          border-left-color: #26a2ff;
        }
  }
  &-right {
    overflow-x: hidden;
    width: 70%;
    box-sizing: border-box;
  }
}
}
 

</style>
