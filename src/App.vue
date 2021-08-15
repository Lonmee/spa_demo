<script setup>
import BottomNavigator from "./components/shared/BottomNavigator.vue";
</script>

<template>
  <router-view class="flex-1 content"/>
  <BottomNavigator/>
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

.align-items {
  align-items: center;
}

.space-between {
  justify-content: space-between;
}

.space-evenly {
  justify-content: space-evenly;
}

.space-around {
  justify-content: space-around;
}

.content {
  overflow: scroll;
}

.small-font {
  font-size: .8rem;
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
