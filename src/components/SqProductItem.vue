<template>
  
    <router-link :to="`/details/${id}`" class="sq-product-item" tag="div">
      <div class="sq-product-item_img">
        <img :src="imgSrc" :alt="title">
      </div>
      <p class="sq-product-item_title">{{title}}</p>
      <div class="sq-product-item__footer">
        <span class="price">￥{{price}}</span> 
       </div>
       <span
       class="btn"
       @click.stop="addToCart({
          id: id,
          title: title,
          img: imgSrc,
          price: price,
          isChecked: false
        })"
        >加入购物车</span>
    </router-link>
    
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SqProductItem',
  props: {
    id: Number,
    imgSrc: String,
    title: String,
    price: Number
  },
  methods: {
    ...mapMutations([
      'addToCart'
    ])
  }
}
</script>

<style lang="scss">
.sq-product-item {
  display: inline-block;
  width: 49%;
  padding: 8px;
  box-sizing: border-box;

  &_img {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;

    img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      max-width: 100%;
    }
  }
  &_title {
      width: 100%;
      height: 35px;
      line-height: 35px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      >.price {
        color: black;
        line-height: 30px;
        font-size: 14px;
        font-weight: bolder;
      }
      
    }
    >.btn {
        display: flex;
        padding: 5px;
        width: 100%;
        border-radius: 4px;
        color: rgb(255, 255, 255);
        background-color: rgb(255, 87, 119);
        justify-content: center;
      }
}
</style>
