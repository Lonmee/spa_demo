<template>
  <div>
    <Header back="a" title="Signup"/>
    <div class="flex-column top-header-margin">
      <div class="item flex-row align-items-center">
        <label>name: </label>
        <input type="text" v-model="name" placeholder="昵称">
      </div>
      <div class="item flex-row align-items-center">
        <label>age: </label>
        <input type="text" v-model="age" placeholder="年龄">
      </div>
      <div class="item flex-row align-items-center">
        <label>sex: </label>
        <div id="radios" class="flex-row align-items-center">
          <div class="flex-row">
            <label>male</label>
            <input type="radio" checked="checked" name="Sex" value="male" v-model="sex">
            <label>female</label>
            <input type="radio" name="Sex" value="female" v-model="sex">
          </div>
        </div>
      </div>
      <div class="item flex-row align-items-center">
        <label>pin: </label>
        <input type="password" v-model="pin" placeholder="密码">
      </div>
      <div class="item flex-row align-items-center">
        <label>confirm: </label>
        <input type="password" v-model="comPin" placeholder="验证密码">
      </div>
      <button id="confirm" @click="signup">signup</button>
    </div>
  </div>
</template>

<script setup>
import Header from "../../shared/Header.vue";
import {ref} from "vue";
import router from "../../../route/Routes";
import {useStore} from "vuex";

const store = useStore();
const name = ref("")
const age = ref()
const sex = ref("male")
const pin = ref("")
const comPin = ref("")

const signup = () => {
  const params = {
    name: name.value,
    age: age.value,
    sex: sex.value,
    pin: pin.value
  };
  store
      .dispatch("signup", params)
      .then(() => router.go(-1))
      .catch(reason => alert(reason));
}
</script>

<style scoped>
div.item {
  height: 50px;
  justify-content: center;
}

label {
  width: 20%;
  text-align: left;
}

input {
  width: 60%;
  height: 1.8em;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: 1px;
}

#radios {
  width: 60%;
  height: 1.8em;
  padding: 0 4px;
}

#radios input {
  margin: 0
}

#radios div {
  width: 120%;
}

#confirm {
  margin-top: 40px;
  align-self: center;
  width: 80%;
  height: 30px;
}
</style>
