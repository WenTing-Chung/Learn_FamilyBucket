<template>
  <div class="todo-input">
    <!-- 使用 v-focus 達成預設 focus 狀態 -->
    <input
      v-model.trim="todo"
      v-focus
      type="text"
      placeholder="請輸入代辦事項"
      @keyup.enter="inputHandler"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    }
  },
  methods: {
    inputHandler() {
      if (!this.todo) return
      this.$store.commit('ADD_TODO', {
        content: this.todo,
        complete: false,
      })
      this.todo = ''
    },
  },
}
</script>
