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
        return ajax.get('/api/tabs?sa=')
    }
    //rap2用户信息数据
export const getUser = () => {
        return ajax.get('http://rap2api.taobao.org/app/mock/167519/todos/user')
    }
    //导出getDate请求方法
export const getDate = () => {
        return ajax.get('/api/tabs')
    }
    // 获取详情
export const getProductDetails = (id) => {
    return ajax.get(`/api/detail?id=${id}`)
}

//通过id请求产品
export const getProductsById = (cateId, start = 0) => {
    return ajax.get(`/api/tab/${cateId}?start=${start}`)
}

export const getProductList = (cateID, start = 0) => {
    return ajax.get(`/api/tab/${cateID}?start=${start}`)
}

//请求rap2的登录数据
export const getUserInfo = ({ username, password }) => {
    return axios.post('http://rap2api.taobao.org/app/mock/168140/222', { username, password })
}

// //请求验证码数据
// export const getVerificationCode = () => {
//     return axios.post('https://route.showapi.com/26-4', {
//         "showapi_appid": '89896',
//         "showapi_sign": "b378105819ec42c783cfa00cd00c9b38"
//     })
// }