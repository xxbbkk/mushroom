<template>
<div>
  <sqShopCard
    v-for="item in cates"
    :key="item.id"
    :title="item.title"
    :id="item.id"
    :isChecked="item.isChecked"
    :price="item.price"
    :number="item.number"
    :img="item.img"
  />
</div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Checkbox } from 'vant';
Vue.use(Cell).use(CellGroup).use(Checkbox);

import sqShopCard from '@/components/sqShopCard'
import { mapState } from 'vuex'
export default {
  components: {
    sqShopCard
  },
  computed: {
    ...mapState([
      'cates'
    ])
  }
}
</script>

<style lang="scss">

</style>
