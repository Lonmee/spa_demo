<script setup>
defineProps({back: String, title: String});
const backStr = '<'
</script>

<template>
  <div class="fixed-top flex-row alpha-white-bg box-shadow" style="padding: 6px 0">
    <a id="back-btn" v-if="back" @click="$router.back()">{{ backStr }}</a>
    <span @click.prevent id="title">{{ title }}</span>
  </div>
</template>

<style scoped>
#back-btn {
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 8px;
}

#title {
  position: fixed;
  z-index: -1;
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
}
</style>
