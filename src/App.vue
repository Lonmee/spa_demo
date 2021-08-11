<script setup>
</script>

<template class="flex-column">
  <router-view class="flex-1"></router-view>
  <nav class="bottom-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/subPage">subPage</router-link>
  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: calc(100vh);
}

.margin-reducer {
  margin: 0;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-1 {
  flex: 1;
}
.bottom-nav {
  display: flex;
  justify-content: space-evenly;
  align-content: flex-end;
}
</style>
