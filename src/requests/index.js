//该文件用于配置axios
import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant';

Vue.use(Toast);

const ajax = new axios.create();

//拦截请求
ajax.interceptors.request.use((config) => {
  //加载时过渡动画
  Toast.loading({
    mask: true,
    message: '加载中...'
  });
  // console.log(config)
  return config
})

//拦截响应
ajax.interceptors.response.use((resp) => {
  //清除动画
  Toast.clear();
  // console.log(resp)
  return resp
})

//首页列表数据
export const getHomeList = () => {
  return ajax.get ('/api/tabs?sa=')
}
//rap2用户信息数据
export const getUser = () => {
  return ajax.get ('http://rap2api.taobao.org/app/mock/167519/todos/user')
}
