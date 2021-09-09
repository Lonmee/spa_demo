<template>
  <div class="top-header-margin flex-column align-content-center">
    <Header title="Mine"/>
    <div class="flex-row space-evenly" v-if="token === ''">
      <button @click="$router.push('login')">Login</button>
      <button @click="$router.push('signup')">Signup</button>
    </div>
    <div class="flex-column align-items-center" v-else>
      <p>token: {{ token }}</p>
      <button id="logout" @click="store.commit('clearToken')">Logout</button>
    </div>
    <hr>
    <AsyncComp/>
    <address>北京石景山 古城南里一号楼703</address>
  </div>
</template>

<script setup>
import {store} from "../utils/Store";
</script>

<script>
import {defineAsyncComponent} from "vue";
import Header from "./shared/Header.vue";

export default {
  name: "Mine",
  components: {
    Header,
    AsyncComp: defineAsyncComponent(() => import("./mine/AsyncComp.vue"))
  },
  computed: {
    token() {
      return this.store.state.token;
    }
  }
}
</script>

<style scoped>
#logout {
  width: 80%;
}
</style>
