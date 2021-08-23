<script setup>

</script>

<template>
  <div class="demo-tab">
    <p>This is comp b</p>
    <p>getData: {{ product }}</p>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "CompB",
  inject: ["product"]
}
</script>

<style scoped>

</style>
