import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    window.localStorage.setItem('sq-cart', JSON.stringify(state.cates))
  })
}

export default new Vuex.Store({
  plugins: [myPlugin],
  state,
  getters,
  actions,
  mutations
})