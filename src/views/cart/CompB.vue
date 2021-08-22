<template>
  <div class="demo-tab">
    <p>This is comp b</p>
    <p>{{ product }}</p>
  </div>
</template>

<script>
export default {
  name: "CompB",
  inject: ["product"]
}
</script>

<style scoped>

</style>
