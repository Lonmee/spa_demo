<script setup>
defineProps({back: String, title: String});
const backStr = '<'
</script>

<template>
  <div class="fixed-top flex-row alpha-white-bg box-shadow" style="padding: 6px 0">
    <a id="back-btn" v-if="back" @click="$router.back()">{{ backStr }}</a>
    <span @click.prevent id="title" :class="{fixed: back}">{{ title }}</span>
  </div>
</template>

<style scoped>
#back-btn {
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 8px;
}

#title {
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
}

#title.fixed {
  position: fixed;
  z-index: -1;
}
</style>

<style>
.top-header-margin {
  margin-top: 54px;
}
</style>
