<template>
<div>
  <div class="vh-login">
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

<div >
  <van-field
    class="vh-yzm"
    center
    clearable
    label="验证码"
    v-model="yzm"
    placeholder="请输入验证码"
  >
    <van-button slot="button" size="small" type="primary">{{num}}</van-button>
  </van-field>
</div>
</div>
<van-button
  round
  class="vh-btn"
  @click="loginClick"
>注册</van-button>
</div>

</template>

<script>
import Vue from 'vue'
import { Field,Button } from 'vant';
import { mapActions,mapGetters } from 'vuex';
import Joi from '@hapi/joi'
import { Toast } from 'vant';
import {userRegister} from '@/requests/index.js'

Vue.use(Toast);
Vue.use(Field).use(Button);

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required().error(()=>'用户名不符合规范'),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).error(()=>'密码不符合规范'),
})

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      num: '',
      yzm:''
    }
  },
  created() {
    //验证码界口，不过出了点问题
    // getVerificationCode().then(res => {
    //   console.log(res)
    // })
    this.num = Math.floor(Math.random()*10000)+''
  },
  methods: {
    ...mapActions([
      'loginAction'
    ]),
    loginClick() {
      const {username,password} = this
      const result = Joi.validate({ username, password }, schema);
      if (result.error === null) {
        if(this.yzm == this.num){
            userRegister({username,password})
            .then(resp => {
              Toast(resp.data.res_message)
               if(resp.data.res_code == '1'){
                 this.$router.push('/login')
               }
            })
        //   this.loginAction({username,password}, schema)
        }else{
          Toast('验证码不正确');
        }
      } else {
        Toast('用户名或者密码不符合规范');
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
        padding:0 32%;
        margin-left: 16%;
    }
}
.vh-yzm {
  margin-top: 3%;
}

</style>