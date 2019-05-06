import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import * as $http from './requests'
//引入mintui
import Mint from 'mint-ui';
Vue.use(Mint);

//挂载使用写好的插件，该插件为回顶部组件
import { backTop } from '@/components'
Vue.use(backTop)

//注册自定义指令v-back-top，传递参数都在binding.value里
Vue.directive('back-top', {
  inserted (el, binding) {
    document.querySelector(binding.value.scrollContainer).addEventListener('scroll',(e)=>{
      if(e.target.scrollTop > binding.value.distanceToShow){
        binding.value.toggleShow(true)
      }else {
        binding.value.toggleShow(false)
      }
    })
  }
})

Vue.prototype.$http = $http;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
