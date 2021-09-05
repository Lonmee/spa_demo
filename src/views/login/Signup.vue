<script setup>
import Header from "../shared/Header.vue";
</script>

<script>
import {Cookie} from "../../utils/Cookie";
import {API} from "../../utils/Remote";
import axios from "axios";

export default {
  methods: {
    signUP() {
      const params = {name: 'lonmee', age: 40, sex: 'male'};
      const id = '';
      this.axios.post(API.USERS_V1 + id, params)
          .then(resp => {
            console.log(resp.data);
            // let token = "GH1.1.1689020474.1484362313";
            // this.$store.commit('setToken', {token});
            // Cookie.set('token', token);
            // this.$router.go(-1);
          })
          .catch(console.error);
    }
  }
}
</script>

<template>
  <div>
    <Header back="a" title="Signup"/>
    <div class="flex-column top-header-margin">
      <button @click="signUP">signup</button>
    </div>
  </div>
</template>

<style scoped>

</style>
