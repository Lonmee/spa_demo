<template>
  <div class="top-header-margin flex-column align-content-center">
    <Header title="Mine"/>
    <div class="flex-row space-evenly" v-if="token === undefined">
      <button @click="$router.push('login')">Login</button>
      <button @click="$router.push('signup')">Signup</button>
    </div>
    <div class="flex-column align-items-center" v-else>
      <p>token: {{ token }}</p>
      <button id="logout" @click="commit('clearToken')">Logout</button>
    </div>
    <hr>
    <AsyncComp/>
    <address>北京石景山 古城南里一号楼703</address>
    <div>
      <h3>3rd login</h3>
      <label>wechat:</label>
      <input type="text">
    </div>
  </div>
</template>

<script setup>
import {computed, defineAsyncComponent} from "vue";
import {useStore} from "vuex";
import Header from "./shared/Header.vue";

const {state, commit} = useStore();
const AsyncComp = defineAsyncComponent(() => import("./mine/AsyncComp.vue"));
const token = computed(() => state.users.token);
</script>

<style scoped>
#logout {
  width: 80%;
}
</style>
