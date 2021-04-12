<template>
  <div class="todo-list-item">
    <input :id="`item-${index}`" type="checkbox" :checked="todo.complete" />
    <label :for="`item-${index}`">
      <div class="item-left">
        <div class="item-check"></div>
        <span class="item-text">{{ todo.content }}</span>
      </div>
    </label>
    <img class="item-delete" src="../assets/cancel.jpg" @click.prevent="destoryHandler(index)" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      edit: '',
    }
  },
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
  computed: {
    todo() {
      return this.$store.state.todos[this.index]
    },
    complete: {
      get() {
        return this.todo.complete
      },
      set(val) {
        return this.$store.commit('UPDATE_TODO', {
          index: this.index,
          data: { content: this.todo.content, complete: val },
        })
      },
    },
  },
  methods: {
    destoryHandler(index) {
      if (confirm(`確定要刪除${this.todo.content}嗎`)) this.$store.commit('REMOVE_TODO', index)
    },
    editHandler() {
      this.edit = this.todo.content
      this.cache = this.todo.content
    },
  },
}
</script>
