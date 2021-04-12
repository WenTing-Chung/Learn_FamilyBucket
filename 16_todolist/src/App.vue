<template>
  <div id="app">
    <div id="nav">
      <router-link to="/all">全部</router-link> | <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>
    <TodoInput />
    <div class="list">
      <TodoListItem v-for="(item, index) in todoIndex" :key="index" :index="item" />
    </div>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue'
import TodoListItem from '@/components/TodoListItem.vue'

export default {
  components: {
    TodoInput,
    TodoListItem,
  },
  computed: {
    todoIndex() {
      return this.$store.getters.todoIndex
    },
  },
  mounted() {
    this.$store.dispatch('INIT_TODO')
  },
}
</script>
