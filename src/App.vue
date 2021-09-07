<script setup>
import BtmNav from "./views/shared/BtmNav.vue";
import {useStore} from "vuex";

const {token} = useStore().state;
token && useStore()
    .dispatch('getUserInfo');
</script>

<template>
  <div>
    <router-view class="flex-1 content" @dblclick.prevent #="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <btm-nav/>
  </div>
</template>
