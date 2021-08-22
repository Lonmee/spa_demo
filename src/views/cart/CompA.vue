<template>
  <div class="demo-tab">
    <h4>provide & inject</h4>
    <p>This is comp a</p>
    <CompB/>
  </div>
</template>

<script>
import CompB from "./CompB.vue";

export default {
  name: "CompA",
  components: {CompB}
}
</script>

<style scoped>

</style>
