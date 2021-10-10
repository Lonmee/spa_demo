<script setup>
import BtmNav from "./views/shared/BtmNav.vue";
import {useStore} from "vuex";

const {state: {users: {token}}, dispatch} = useStore();
token && dispatch('getUserInfo');
document.title = `SPA @ ${import.meta.env.MODE}`;
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
