<template>
  <div class="top-header-margin">
    <Header title="Mine"/>
    <button @click="$router.push('login')">Login</button>
    <hr>
    <AsyncComp/>
  </div>
</template>

<script>

import {defineAsyncComponent} from "vue";
import Header from "./shared/Header.vue";

export default {
  name: "Mine",
  components: {
    Header,
    AsyncComp: defineAsyncComponent(() => import("./mine/AsyncComp.vue"))
  },
  setup(p, c) {
    console.log(p, c);
  }
}
</script>

<style scoped>

</style>
