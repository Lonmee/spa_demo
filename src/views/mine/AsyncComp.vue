<template>
  <div id="container" class="demo-tab flex-column align-items-center">
    <h4>User information</h4>
    <div id="content" class="flex-column">
      <div class="flex-row">
        <label>name:</label>
        <div>{{ userInfo.name }}</div>
      </div>
      <div class="flex-row">
        <label>age:</label>
        <div>{{ userInfo.age }}</div>
      </div>
      <div class="flex-row">
        <label>sex:</label>
        <div>{{ userInfo.sex }}</div>
      </div>
      <div class="flex-row">
        <label>des:</label>
        <div>{{ infoStr }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const userInfo = computed(() => useStore().state.users.info);
const infoStr = computed(() => useStore().getters.userInfo);
</script>

<style scoped>
#container {
  width: 70%;
  align-self: center;
}

#content {
  width: 60%;
}

#content div div {
  width: 50%;
  text-align: left;
  padding-left: 10px;
}

label {
  width: 50%;
  text-align: right;
  padding-right: 10px;
}
</style>
