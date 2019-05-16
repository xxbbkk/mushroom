export default {
    sumCount: (state) => {
        return state.cates.reduce((total, item) => {
            return total += item.number
        }, 0)
    },
    isLogin: (state) => {
        return Boolean(state.userInfo.token)
    },
    //计算总价
    sumPrice: (state) => {
        return state.cates.reduce((sum, item) => {
            if (item.isChecked) {
                sum += item.price * item.number * 100
            }
            return sum
        }, 0)
    },
    //全选点击,没时间了待解决
    isAllChecked: (state) => {
        return state.cates.every(item => item.isChecked == true)
    }
}