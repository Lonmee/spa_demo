<script setup>
defineProps
({back: String, title: String});
const backStr = '<'
</script>

<template>
  <span class="back-btn" v-if="back" @click="$router.back()">{{ backStr }}</span>
  <span class="title">{{ title }}</span>
</template>

<style scoped>
.back-btn {
  position: absolute;
}
</style>
