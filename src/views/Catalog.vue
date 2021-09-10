<template>
  <div>
    <h2>Catalog</h2>
    <todo-list>
      <template #[slotName]="a">
        <i>{{ a.index }}</i>
        :
        <span>{{ a.item }}</span>
      </template>
      <template #[slotName2]="a">
        <i>{{ a.item }}</i>
        :
        <span>{{ a.index }}</span>
      </template>
    </todo-list>
  </div>
</template>

<script>
import TodoList from "./catalog/TodoList.vue";

export default {
  name: "Catalog",
  components: {TodoList},
  data() {
    return {
      slotName: 'default',
      slotName2: 'second'
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
