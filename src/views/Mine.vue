<script setup>
import Header from "./shared/Header.vue";
</script>

<template>
  <div class="top-header-margin">
    <Header title="Mine"></Header>
    <button @click="$router.push('login')">Login</button>
  </div>
</template>

<style scoped>

</style>
