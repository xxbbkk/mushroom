<template>
<div>
  <van-cell-group class="vh-login">
  <van-field
  class="vh-login__user"
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    :value="username"
    @click-right-icon="$toast('question')"
  />
  
  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    :value="password"
    required
  />
</van-cell-group>
<van-button
  round
  class="vh-btn"
  @click="loginClick"
>登录</van-button>
</div>
</template>

<script>
import Vue from 'vue'
import { Field,Button } from 'vant';
import { mapActions,mapGetters } from 'vuex';

Vue.use(Field).use(Button);
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'loginAction'
    ]),
    loginClick() {
      const {username,password} = this
      this.loginAction({username,password})
    }
  },
  computed: {
    
    ...mapGetters([
      'isLogin'
    ])
  },
  watch: {
    isLogin() {
      if(this.isLogin) {
        const { from = '/index'} = this.$route.params
        this.$router.push(from)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vh {
    &-login {
        display: block;
        margin: 16% 0 10%;
        &__user {
            margin-bottom:5%; 
        }
    }
    &-btn {
        background-color: #FF5777;
        color: #fff;
        font-size: 18px;
        padding: 0 30%;
        margin-left: 16%;
    }
}

</style>