export default {
    //添加到购物车
    addToCart(state, data) {
        let i
        if (state.cates.some((item, index) => {
                i = index
                return item.id === data.id
            })) {
            //如果查找到id
            state.cates[i].number++;
        } else {
            //如果查找不到id
            data.number = 1;
            state.cates.push(data)
        }
    },
    //计数++
    inCrement(state, id) {
        state.cates = state.cates.map(item => {
            if (item.id === id) {
                item.number++;
            }
            return item
        })
    },
    //计数--
    deCrement(state, id) {
        state.cates = state.cates.map(item => {
            if (item.id === id) {
                item.number--;
            }
            return item
        })
        state.cates = state.cates.filter(item => item.number > 0)
    },
    //输入框内容改变
    inputChange(state, data) {
        state.cates = state.cates.map(item => {
            if (item.id === data.id) {
                item.number = +data.value
            }
            return item
        })
    },
    //改变选择框
    checkedChange(state, data) {
        state.cates = state.cates.map(item => {
            if (item.id == data.id) {
                item.isChecked = data.checked
            }
            return item
        })
    },
    //改变是否显示首页返回
    changeBack(state, isShow = true) {
        state.isShowHeaderBack = isShow
    },
    //改变头标题
    changeHeaderTitle(state, title = "名鞋库") {
        state.headerTitle = title
    },
    loginSucces(state, userInfo) {
        state.userInfo = userInfo
    },

    //当全选改变时
    allCheckChange(state, Bool) {
        state.cates.map(item => {
            item.isChecked = Bool
            return item
        })
    }
}