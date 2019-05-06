import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import * as $http from './requests'

Vue.prototype.$http = $http;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
