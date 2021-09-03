<script setup>
import Header from "../shared/Header.vue";
</script>

<script>
import {signUpReq} from "../../utils/Remote";

export default {
  methods: {
    signupHandler() {
      signUpReq({name: 'lonmee', age: 40, sex: 'male'})
    }
  }
}
</script>

<template>
  <div>
    <Header back="a" title="Signup"/>
    <div class="flex-column top-header-margin">
      <button @click="signupHandler"> signup</button>
    </div>
  </div>
</template>

<style scoped>

</style>
