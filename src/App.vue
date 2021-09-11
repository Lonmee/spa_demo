<script setup>
import BtmNav from "./views/shared/BtmNav.vue";
import {useStore} from "vuex";

const {token} = useStore().state;
token && useStore()
    .dispatch('getUserInfo');

const symB = Symbol('b');
const obj = {
  a: 1,
  [symB]: 2,
  c: 3
}
const arr = [1,
  2,
  3];
arr.map((v, i, a) => console.log(v, i, a));
Array.from(arr);
console.log(Object.keys(obj));
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
