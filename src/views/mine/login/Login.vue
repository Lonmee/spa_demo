<template>
  <div>
    <Header back="true" title="Login"/>
    <div class="flex-column top-header-margin">
      <div class="logo-container">
        <img id="logo" src="../../../appAss/img/logo@2x.png">
      </div>
      <div class="input">
        <div class="flex-row">
          <label>Name:</label>
          <input type="text" v-model="name">
        </div>
        <br/>
        <div class="flex-row">
          <label>password:</label>
          <input type="password" v-model="pwd">
        </div>
      </div>
      <hr>
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

<script setup>
import Header from "../../shared/Header.vue";
import {useStore} from "vuex";
import {ref} from "vue";
import router from "../../../route/Routes";

const
    name = ref(""),
    pwd = ref("");

const store = useStore();

function login() {
  store
      .dispatch("login", {'name': name.value, 'pin': pwd.value})
      .then(() => router.go(-1))
      .catch(alert);
}
</script>

<style lang="less" scoped>
#logo {
  width: 50%;
}

.logo-container {
  margin: 10% 0;
}

.input {
  padding: 0 20px;

  label {
    width: 100px;
    text-align: left;
  }

  input {
    width: 100%;
    text-align: left;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-width: 1px;
  }
}

div .item {
  padding: 10px 20px;
  height: 40px;
}
</style>
