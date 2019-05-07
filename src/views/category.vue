<template>
  <div class="sq-cate">
    <ul class="sq-cate-left">
      <li
        v-for="cate in list"
        :key="cate.id"
      >{{cate.name}}</li>
    </ul>
    <ul class="sq-cate-right">
        <li>
          <img src="" alt="">
          <p>上新</p>
        </li>
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
      //console.log(this.list)
    })
  }
}
</script>

<style lang="scss" scoped>

.sq-cate {
  font-size: 16px;
  display: flex;
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
    }
  }
  &-right {
    width: 70%;
    box-sizing: border-box;
  }
}

</style>
