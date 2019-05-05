<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 2</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "shop",
  created() {
    
    this.$nextTick(() => {
      this.swiperInit();
    });
  },
  methods: {
    swiperInit() {
      new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    }
  }
};
</script>

<style lang="scss">
.swiper-container {
      width: 100%;
      height: 20%;
    }
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
</style>