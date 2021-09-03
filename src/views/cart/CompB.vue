<script setup>

</script>

<template>
  <div class="demo-tab">
    <p>This is comp b</p>
    <p>getData: {{ product }}</p>
  </div>
</template>

<script>
import {inject, toRef} from "vue";

export default {
  name: "CompB",
  inject: ["product"],
  data() {
    return {
      b: 2
    }
  }
}
</script>

<style scoped>

</style>
