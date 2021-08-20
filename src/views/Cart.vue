<template>
  <div>
    <h2>Cart</h2>
    <input v-model="product"/>
    <product-item/>
  </div>
</template>

<script>
import ProductItem from "./cart/ProductItem.vue"
import {computed, ref} from "vue";

export default {
  name: "Cart",
  components: {ProductItem},
  data() {
    return {
      product: ref('abcd')
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

</style>
