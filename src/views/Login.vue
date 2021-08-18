<script setup>
import Header from "./shared/Header.vue";
// const post = await fetch(`/api/post/1`).then((r) => r.json())

// const props = withDefaults(defineProps(), {
//   mc: '86'
// })
const props = defineProps({
  mc: String
})
</script>

<script>
import Remote from "../utils/Remote";
import {Cookie} from "../utils/Cookie";

export default {
  name: "Login",
  data() {
    return {
      cdId: NaN,
      cd: 0,
      phoneNumber: '',
      smsCode: '',
      pin: '',
      selected: ''
    }
  },
  unmounted() {
    isNaN(this.cdId) || clearInterval(this.cdId);
  },
  methods: {
    sendSms() {
      let params = {
        u_id: '+' + (this.mc || '86') + '-' + this.phoneNumber,
        type: 'staff'
      }
      Remote.sendVerifySmsLoginReq(params)
          .then(r => this.smsCode = r)
          .catch(e => console.log('error: ' + e));
      this.cd = 59;
      this.cdId = setInterval(() => {
        this.cd -= 1;
        if (this.cd == 0) {
          clearInterval(this.cdId);
          this.cdId = NaN;
        }
      }, 1000);
    },

    login() {
      let params = {
        sso_login_agent: "shop",
        sso_user_id: '+' + (this.mc || '86') + '-' + this.phoneNumber,
        sso_user_pwd: "ed2e19985ad3a06c810efa1e53e70832" // md5 twice
      }
      Remote.loginReq(params)
          .then(r => {
            r;
            let token = "GH1.1.1689020474.1484362313";
            this.$store.commit('setToken', {token});
            Cookie.set('token', token);
            this.$router.go(-1);
          })
          .catch(e => console.log('json parse error: ' + e));
    }
  }
}
</script>

<template>
  <div>
    <Header
      back="true"
      title="Login"
    />
    <div class="flex-column top-header-margin">
      <div class="logo-container">
        <img
          id="logo"
          src="src/assets/LOGO@2x.png"
        >
      </div>
      <div class="flex-row item">
        <button
          style="width: 20%"
          @click="$router.push('login-area')"
        >
          +{{ mc || '86' }}
        </button>
        <input
          v-model="phoneNumber"
          class="flex-1"
          type="number"
          maxlength="11"
          placeholder="手机号码"
        >
      </div>
      <div
        class="flex-row item"
        style="padding-bottom: 2px"
      >
        <input
          v-model="smsCode"
          class="flex-1"
          type="number"
          placeholder="短信验证码"
        >
        <button
          style="width: 40%"
          :disabled="cd > 0"
          @click="sendSms"
        >
          获取验证码{{ cd > 0 ? '(' + cd + ')' : '' }}
        </button>
      </div>
      <div
        class="flex-row space-between small-font item flex-1"
        style="padding-top: 2px"
      >
        <router-link to="signup">
          没有账号请点此注册
        </router-link>
        <router-link to="pin-recover">
          忘记密码?
        </router-link>
      </div>
      <div class="flex-row item">
        <button
          class="flex-1"
          @click="login"
        >
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#logo {
  width: 50%;
}

.logo-container {
  margin: 10% 0;
}

div .item {
  padding: 10px 20px;
  height: 40px;
}
</style>
