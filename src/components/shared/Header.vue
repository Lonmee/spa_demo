<script setup>
defineProps
({back: String, title: String});
const backStr = '<'
</script>

<template>
  <span class="back-btn" v-if="back" @click="$router.back()">{{ backStr }}</span>
  <div class="row">
    <span class="title">{{ title }}</span>
  </div>
</template>

<style scoped>
.back-btn {
  position: absolute;
}
</style>
