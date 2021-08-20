<template>
  <ul>
    <li v-for="(item, index) in items">
      <slot name="default" :item="item" :index="index"/>
      <slot name="second" :item="item" :index="index"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      items: ['Feed a cat', 'Buy mild']
    }
  },
}
</script>

<style scoped>

</style>
