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
/>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      show: true
    }
  },

}
</script>

<style>

</style>
