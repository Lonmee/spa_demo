<script>
export default {
  name: "Home",
  data() {
    return {
      foo: String
    }
  },
  methods: {}
}
</script>

<template>
  <div>
    <h2 class="title">Home</h2>
    <div>
      <button @click="$router.push('login')">Login</button>
    </div>
  </div>
</template>

<style scoped>

</style>
