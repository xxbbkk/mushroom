import { getUserInfo } from '@/requests'
export default {
  loginAction (ctx, {username, password}) {
    getUserInfo ({username, password})
    .then(res => {
      ctx.state.userInfo = res.data.data
    })
  }
}