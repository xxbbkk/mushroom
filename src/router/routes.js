//该文件配置路由参数
import sqFooter from '@/components/sqFooter.vue'

//引入模块使用的懒加载
const Index = () => import('../views/Index')
const Live = () => import('../views/Live')
const My = () => import('../views/My')
const Shop = () => import('../views/Shop')
const category = () => import('@/views/category')
const VhLogin = () => import('../views/VhLogin')
const sqProducts = () => import('@/components/sqProducts')
const VhList = () => import('@/components/VhList')
//导出的配置项
export default [
  //根目录访问，直接重定向到/index
  {
    path: '/',
    redirect: 'index',
    meta: {
      isTabItem: false,
    }
  }, {
    path: '/category',
    name: 'category',
    components: {
      default: category
    },
    children: [{
      path: ':cateId',
      component: sqProducts
    }],
    meta: {
      isTabItem: false,
      title: '商品'
    }
  }, {
    path: '/index',
    name: 'index',
    components: {
      //默认组件
      default: Index,
      //需要调用的组件，使用name=""调用
      footer: sqFooter
    },
    //路由的参数在route里，我们可以新建属性meta写我们需要的参数
    meta: {
      //isTabItem参数用于显示是否来自tabbar
      isTabItem: true,
      //显示文本参数
      title: '主页',
      //矢量图标参数
      icon: '&#xe65a;',
    }
  }, {
    path: '/shop',
    name: 'shop',
    components: {
      default: Shop,
      footer: sqFooter
    },
    meta: {
      isTabItem: true,
      title: '商城',
      icon: '&#xe658;'
    }
  }, {
    path: '/live',
    name: 'live',
    components: {
      default: Live,
      footer: sqFooter
    },
    meta: {
      isTabItem: true,
      title: '直播',
      icon: '&#xe656;'
    }
  }, {
    path: '/my',
    name: 'my',
    components: {
      default: My,
      footer: sqFooter
    },
    meta: {
      isTabItem: true,
      title: '我的',
      icon: '&#xe65d;'
    }
  }, {
    path: '/list/:cateId',
    name: 'list',
    components: {
      default: VhList
    }
  }, {
    path: '/login',
    name: 'login',
    components: {
      default: VhLogin
    }
  }]
