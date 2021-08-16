<script setup>
import {router} from "../../utils/Routes";

const navNames = router.getRoutes().filter((r, i) => i < 4).map(r => r.name);
const isNavOn = n => navNames.includes(n)
</script>

<template>
  <nav class="flex-row space-evenly btm-nav" v-show="isNavOn($route.name)">
    <router-link to="/">Home</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/mine">Mine</router-link>
  </nav>
</template>

<style scoped>
.btm-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, .8);
  padding: 6px 0;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
  -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
}
</style>
