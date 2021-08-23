<template>
  <div>
    <h2>Cart</h2>
    <input v-model="product"/>
    <CompA/>
    <hr/>
    <div id="dynamic-component-demo" class="demo">
      <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <keep-alive>
        <component :is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import CompA from "./cart/CompA.vue";
import CompB from "./cart/CompB.vue";
import DemoTab from "./cart/DemoTab.vue";
import TabHome from "./cart/TabHome.vue";
import TabPosts from "./cart/TabPosts.vue";
import TabArchive from "./cart/TabArchive.vue";
import {computed} from "vue";

export default {
  name: "Cart",
  components: {CompA, CompB, DemoTab, TabHome, TabPosts, TabArchive},
  data() {
    return {
      product: '',
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  provide() {
    return {
      product: computed(() => this.product)
    }
  }
}

</script>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #e0e0e0;
}
</style>
<style>
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
