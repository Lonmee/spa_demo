<script setup>
import Header from "./shared/Header.vue";

const foo = {a: 1, b: 2};
</script>

<template>
  <div class="top-header-margin">
    <Header title="Mine"/>
    <button @click="$router.push('login')">Login</button>
  </div>
</template>

<style scoped>

</style>
