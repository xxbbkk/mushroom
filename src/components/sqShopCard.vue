<template>
   <div class="sq-shop">
    <div class="sq-shop-left">
      <van-checkbox
        v-model="checked"
        @click="aCheckChange"
      />
    </div>
    <img class="sq-shop-img" :src="img" :alt="title">
    <div class="sq-shop-right">
      <van-cell-group class="group">
        <van-cell class="title" :title="title" />
      </van-cell-group>
      <div class="sq-shop-right__deta">
        <div>￥{{price | toFixed2}}</div>
        <div class="count">
          <button
            class="btn"
            @click="deCrement(id)"
          >-</button>
          <input class="input"
            v-model="number"
            @input="inputChange({
              id,
              value:number
            })"
            type="text"
          >
          <button
            class="btn"
            @click="inCrement(id)"
          >+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props:['id','number','title','price','isChecked','img'],
  data() {
    return {
      checked: this.$props.isChecked,
    }
  },
  methods: {
    ...mapMutations([
      'inCrement',
      'deCrement',
      'inputChange',
      'checkedChange'
    ]),
    aCheckChange() {
      this.checkedChange({checked:this.checked, id:this.id})
      this.$emit("aClick", this.$store.getters.isAllChecked)
    },
  }
}
</script>

<style lang="scss">
.sq-shop {
  margin:5px 0;
  display: flex;
  width: 100%;
  height: 40vw;
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
         margin-left:38%;
      }
    }
    .input {
      width: 48%;
      height: 20px;
      border:none;
      font-size: 14px;
      border-top: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
      box-sizing: border-box;
      text-align: center;
      line-height: 20px;
    }
    .btn {
      height: 20px;
      color: #666;
      border: 1px solid #dedede;
      box-sizing: border-box;
     
    }
    .title {
      font-size: 12px;
    }
  }
}
</style>
