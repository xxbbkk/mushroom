<template>
  <div
    v-show="isShow"
    class="sq-dire iconfont"
    v-back-top="{
      scrollContainer,
      distanceToShow,
      toggleShow
    }"
    @click="getToTop"
  >
    &#xe6d7;
  </div>
</template>

<script>
export default {
  props: {
    scrollContainer: String,
    distanceToShow: Number
  },
  methods: {
    getToTop() {
      document.querySelector(this.scrollContainer).scrollTop = 0;
    },
    toggleShow(isShow) {
      this.isShow = isShow
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.sq-dire {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 30px;
  background: red;
  text-align: center;
  box-shadow: 0 0 10px black;
}
@font-face {
  font-family: 'iconfont';  /* project id 1169720 */
  src: url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.eot');
  src: url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.woff') format('woff'),
  url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.svg#iconfont') format('svg');
}
//矢量图样式
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
