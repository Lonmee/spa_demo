<script setup>
import Header from '/src/components/shared/Header.vue'
defineProps({mobileCode: String})
</script>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      phoneNumber: '',
      smsCode: '',
      pin: '',
      selected: ''
    }
  },
  methods: {
    go(path) {
      this.$router.push({path});
    },
    sendSms() {
      axios.request({
        baseURL: 'http://www.eyolo.com:8081/', url: '/security/sendVerifySmsLogin', params: {
          u_id: this.mCode + this.phoneNumber,
          type: 'staff'
        }
      })
          .then(r => console.log('code sent :', r))
          .catch(e => console.log('code error: ', e));
    },
    login() {
      fetch('http://192.168.24.20:8081/sso/client/login', {
        method: 'POST',
        body: JSON.stringify({
          sso_login_agent: "shop",
          sso_user_id: "+86-15901424668",
          sso_user_pwd: "ed2e19985ad3a06c810efa1e53e70832"
        })
      })
          .then(r => r.json()
              .then(j => console.log(j))
              .catch(e => console.log('json parse error: ' + e)))
          .catch(e => console.log(e))
    }
  }
}
</script>

<template>
  <div class="flex-column">
    <Header back="true" title="Login"/>
    <div class="logo-container">
      <img id="logo" src="src/assets/LOGO@2x.png">
    </div>
    <button @click="go('/login-area', state)">国码:+{{ mobileCode || '86' }}</button>
    <input type="number" maxlength="11" placeholder="手机号码" v-model="phoneNumber">
    <input type="number" placeholder="短信验证码" v-model="smsCode">
    <button @click="sendSms" id="countdown_sms"> 获取验证码</button>
    <button @click="go('/signup')">没有账号请点此注册</button>
    <button @click="go('/pin-recover')">忘记密码?</button>
    <button @click="login()"> 登录</button>
  </div>
</template>

<style scoped>
#logo {
  width: 50%;
}

.logo-container {
  margin: 60px 0;
}
</style>
