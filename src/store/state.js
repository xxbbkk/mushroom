export default {
    cates: JSON.parse(window.localStorage.getItem('sq-cart')) || [],
    isShowHeaderBack: false,
    headerTitle: '名鞋库',
    userInfo: JSON.parse(window.localStorage.getItem('sq-login')) || {
        'diplayName': '',
    },
    isLoggin: false
}