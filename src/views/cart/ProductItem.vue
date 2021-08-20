<template>
  <div>
    {{ product.value }}
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  inject: ['product'],
}
</script>

<style scoped>

</style>
