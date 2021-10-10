<template>
  <div id="container" class="demo-tab flex-column align-items-center">
    <h4>User information</h4>
    <div id="content" class="flex-column">
      <div class="flex-row">
        <label>name:</label>
        <div>{{ info.name }}</div>
      </div>
      <div class="flex-row">
        <label>age:</label>
        <div>{{ info.age }}</div>
      </div>
      <div class="flex-row">
        <label>sex:</label>
        <div>{{ info.sex }}</div>
      </div>
      <div class="flex-row">
        <label>des:</label>
        <div>{{ infoStr }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

// const {info} = toRefs(useStore().state.users)
const info = computed(() => useStore().state.users.info);
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
