//该文件配置路由参数
import sqFooter from '@/components/sqFooter'
import sqHeader from '@/components/sqHeader'
import sqTop from '@/components/sqTop'

//引入模块使用的懒加载
const Index = () =>
    import ('../views/Index')
const My = () =>
    import ('../views/My')
const Shop = () =>
    import ('../views/Shop')
const category = () =>
    import ('@/views/category')
const VhLogin = () =>
    import ('../views/VhLogin')

const Details = () =>
    import ('@/views/Details')
const ShopCart = () =>
    import ('@/views/ShopCart')
const sqProducts = () =>
    import ('@/components/sqProducts')
const VhList = () =>
    import ('@/components/VhList')

const CateList = () =>
    import ('../views/CateList')
    //导出的配置项
export default [
    //根目录访问，直接重定向到/index
    {
        path: '/',
        redirect: 'index',
        meta: {
            isTabItem: false,
            isShowHeader: false,
        }
    }, {
        path: '/category',
        name: 'category',
        components: {
            default: category,
            header: sqTop,
            footer: sqFooter
        },
        children: [{
            path: ':cateId',
            component: sqProducts,
            meta: {
                isTabItem: false,
                title: '商品',
                isShowHeader: false,
            }
        }],
        meta: {
            isTabItem: false,
            title: '商品',
            isShowHeader: false,
        }
    }, {
        path: '/index',
        name: 'index',
        components: {
            //默认组件
            default: Index,
            //需要调用的组件，使用name=""调用
            footer: sqFooter,
            header: sqHeader
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
            footer: sqFooter,
            header: sqHeader
        },
        children: [{
            path: ':cateID',
            component: CateList
        }],
        meta: {
            isTabItem: true,
            title: '商城',
            icon: '&#xe658;'
        }
    }, {
        path: '/shopCart',
        name: 'shopCart',
        components: {
            default: ShopCart,
            footer: sqFooter,
            header: sqTop
        },
        meta: {
            isTabItem: true,
            title: '购物车',
            icon: '&#xe656;',
            isShowHeader: false,
            isRequireLogin: true,
        }
    }, {
        path: '/my',
        name: 'my',
        components: {
            default: My,
            footer: sqFooter,
            header: sqTop
        },
        meta: {
            isTabItem: true,
            title: '我的',
            icon: '&#xe65d;',
            isShowHeader: true,
            isRequireLogin: true,
        }
    }, {
        path: '/list/:cateId',
        name: 'list',
        components: {
            default: VhList,
            header: sqTop
        },
        meta: {
            isTabItem: false,
            title: '列表',
            isShowHeader: true
        }
    }, {
        path: '/login',
        name: 'login',
        components: {
            default: VhLogin,
            header: sqTop

        },
        meta: {
            isTabItem: false,
            title: '登录',
            isShowHeader: true,

        }
    }, {
        path: '/details/:id',
        name: 'details',
        components: {
            default: Details,
            header: sqTop
        },
        meta: {
            isTabItem: false,
            title: '详情',
            isShowHeader: true
        }
    }
]