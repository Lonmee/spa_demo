<script>
export default {
  methods: {
    isNavOn() {
      return ['/', '/catalog', '/cart', '/mine'].includes(this.$route.path)
    }
  }
}
</script>

<template>
  <router-view class="flex-1 content"></router-view>
  <nav class="bottom-nav" v-show="isNavOn()">
    <router-link to="/">Home</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/mine">Mine</router-link>
  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: calc(100vh);
}

.margin-reducer {
  margin: 0;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-1 {
  flex: 1;
}

.space-between {
  justify-content: space-between;
}

.bottom-nav {
  display: flex;
  justify-content: space-evenly;
}

.content {
  overflow: scroll;
}

.small-font{
  font-size: .8rem;
}
</style>
