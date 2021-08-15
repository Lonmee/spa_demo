<script setup>
import {router} from "../../utils/Routes";

const navNames = router.getRoutes().filter((r, i) => i < 4).map(r => r.name);
const isNavOn = n => navNames.includes(n)
</script>

<template>
  <nav class="flex-row space-evenly" v-show="isNavOn($route.name)">
    <router-link to="/">Home</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/mine">Mine</router-link>
  </nav>
</template>
