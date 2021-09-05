<script setup>
import BtmNav from "./views/shared/BtmNav.vue";
</script>

<template>
  <router-view class="flex-1 content" @dblclick.prevent #="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <btm-nav/>
</template>
