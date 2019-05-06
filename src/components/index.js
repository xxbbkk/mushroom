import backTop from '@/components/backTop'
//需要直接在backTop上写一个方法.install用于开发插件，第一个参数为Vue
backTop.install = function (Vue, option) {
  Vue.component('backTop', backTop)
}
export {
  backTop
};