<template>
  <div class="demo-tab">
    <p>This is comp b</p>
    <p>getData: {{ product }}</p>
  </div>
</template>

<script setup>
import {inject} from "vue";

const product = inject("product");
</script>

<style scoped>

</style>
