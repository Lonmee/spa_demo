<script setup>
import BtmNav from "./views/shared/BtmNav.vue";
</script>

<template>
  <router-view class="flex-1 content" @dblclick.prevent #="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <btm-nav/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* once using */
body {
  margin: 0;
}

/* fixed using */
.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
}

.fixed-btm {
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* flex using */
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

.align-items-center {
  align-items: center;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.space-evenly {
  justify-content: space-evenly;
}

/* public using */
.alpha-white-bg {
  background-color: rgba(255, 255, 255, .8);
}

.box-shadow {
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
  -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
}

input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #CBCBCB;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #CBCBCB;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #CBCBCB;
}

input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #CBCBCB;
}
</style>
