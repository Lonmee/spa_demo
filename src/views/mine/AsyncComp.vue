<template>
  <div>
    <h4>User information</h4>
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
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const userInfo = computed(() => useStore().state.userInfo);
</script>

<style scoped>

</style>
