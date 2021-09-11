<script setup>
import {router} from "../../utils/Routes";

const navNames = router.getRoutes()
    .filter((r, i) => i < 4)
    .map(r => r.name);
const isShowNav = n => navNames.includes(n);
</script>

<template>
  <div
      v-show="isShowNav($route.name)"
      id="nav"
      class="fixed-btm flex-row space-evenly alpha-white-bg box-shadow"
  >
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/catalog">
      Catalog
    </router-link>
    <router-link to="/cart">
      Cart
    </router-link>
    <router-link to="/mine">
      Mine
    </router-link>
  </div>
</template>

<style scoped>
#nav {
  background-color: rgba(255, 255, 255, .8);
  padding: 6px 0;
}

#nav a {
  /*color: #2a2b2c;*/
}

#nav a.router-link-exact-active {
  color: #a56ce3;
}
</style>

<style>
.btm-nav-margin {
  margin-bottom: 30px;
}
</style>
