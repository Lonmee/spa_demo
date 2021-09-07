<template>
  <div>
    <h4>User information</h4>
    <div class="flex-row">
      <label>name:</label>
      <div>{{ userInfo['name'] }}</div>
    </div>
    <div class="flex-row">
      <label>age:</label>
      <div>{{ userInfo }}</div>
    </div>
    <div class="flex-row">
      <label>sex:</label>
      <div>{{ userInfo }}</div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const userInfo = computed(() => useStore().state.userInfo);

/*
 * watch(userInfo, (oldVal, newVal) => {
 *   console.log(oldVal)
 *   console.log(newVal)
 *   console.log(name.value)
 * }, {
 *   deep: true
 * });
 */
</script>

<style scoped>

</style>
