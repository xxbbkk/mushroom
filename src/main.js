import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import * as $http from './requests'
import stroe from './store'
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

//引入vuex
import store from "@/store"

//全局混入
Vue.mixin ({
  filters: {
    //判断数字是否大于100，显示99+
    mt100(data) {
      if(Number.isInteger(data)) {
        if(data > 99){
          return '99+'
        }else{
          return data
        }
      }else {
        return data
      }
    },
    //保留两位小数
    toFixed2 (value) {
      return value.toFixed(2)
    }
  }
})

//全局导航守卫
router.beforeEach((to, from, next) => {
  if(to.meta.isRequireLogin) {
    if(store.getters.isLogin) {
      next()
    }else {
      next({
        name: 'login',
        params: {
          from: to.path
        }
      })
    }
  } else {
    next()
  }
  //显示隐藏返回
  if(to.meta.isShowHeader) {
    store.commit('changeBack')
  }else{
    store.commit('changeBack',false)
  }
  //切换标题的文字
    store.commit('changeHeaderTitle',to.meta.title)
  next()
})

//

Vue.prototype.$http = $http;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  stroe,
  render: h => h(App),
}).$mount('#app')
