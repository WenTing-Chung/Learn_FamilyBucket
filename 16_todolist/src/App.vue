<template>
  <div id="app">
    <div id="nav">
      <router-link to="/all">全部</router-link> | <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    todoIndex() {
      return this.$store.getters
    },
  },
  mounted() {
    this.$store.dispatch('INIT_TODO')
  },
}
</script>

<style src="@/assets/style.css">
</style>
