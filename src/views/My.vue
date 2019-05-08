<template>
<div>
  <van-button @touchstart.stop="show = true">
  弹出默认键盘
</van-button>

<van-number-keyboard
  :show="show"
  extra-key="."
  close-button-text="完成"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
</div>
</template>

<script>
import Vue from 'vue'
import { NumberKeyboard } from 'vant';

Vue.use(NumberKeyboard);
export default {
  data() {
    return {
      show: true
    }
  },

  methods: {
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('delete');
    }
  }

}
</script>

<style>

</style>
