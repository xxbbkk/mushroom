<template>
   <div class="sq-shop">
    <div class="sq-shop-left">
      <van-checkbox v-model="checked"/>
    </div>
    <img class="sq-shop-img" :src="img" :alt="title">
    <div class="sq-shop-right">
      <van-cell-group>
        <van-cell class="title" :title="title" />
      </van-cell-group>
      <div class="sq-shop-right__deta">
        <div>￥{{price}}</div>
        <div class="count">
          <button class="btn">-</button>
          <input class="input" :value="number" type="text">
          <button class="btn">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['id','number','title','price','isChecked','img']
}
</script>

<style lang="scss">
.sq-shop {
  display: flex;
  width: 100%;
  height: 30vw;
  &-left {
    width: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-img {
    width: 25vw;
    height: 25vw;
    padding: 2vw 0;
  }
  &-right {
    width: 55vw;

    &__deta {
      display: flex;
      margin: 8px 4px;
      justify-content: space-between;
      align-items: center;
      .count {
        display: flex;
      }
    }
    .input {
      width: 20vw;
      height: 20px;
      border:none;
      border-top: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
      box-sizing: border-box;
      text-align: center;
      line-height: 20px;
    }
    .btn {
      height: 20px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
    }
    .title {
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
