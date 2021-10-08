<script setup>
import Header from "../../shared/Header.vue";
</script>

<template>
  <div>
    <Header back="true" title="Login"/>
    <div class="flex-column top-header-margin">
      <div class="logo-container">
        <img id="logo" src="../../../appAss/img/logo@2x.png">
      </div>
      <div class="flex-row item">
        <button style="width: 20%" @click="$router.push('login-area')">
          +{{ mc || '86' }}
        </button>
        <input v-model="phoneNumber"
               class="flex-1"
               type="number"
               maxlength="11"
               placeholder="手机号码">
      </div>
      <div class="flex-row item"
           style="padding-bottom: 2px">
        <input v-model="smsCode"
               class="flex-1"
               type="number"
               placeholder="短信验证码">
        <button style="width: 40%"
                :disabled="cd > 0"
                @click="sendSms">
          获取验证码{{
            cd > 0 ?
                '(' + cd + ')' :
                ''
          }}
        </button>
      </div>
      <div class="flex-row space-between small-font item flex-1"
           style="padding-top: 2px">
        <router-link to="signup">
          没有账号请点此注册
        </router-link>
        <router-link to="pin-recover">
          忘记密码?
        </router-link>
      </div>
      <div class="flex-row item">
        <button class="flex-1" @click="login">
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
