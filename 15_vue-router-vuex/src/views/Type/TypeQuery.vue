<template>
  <section>
    <p>Query方法：{{ $route.query }}</p>
  </section>
</template>

<script>
export default {
  mounted() {
    let day = this.$route.query.iamquery
    this.day = day
  },
  watch: {
    $route(now, from) {
      console.log('now: ', now)
      console.log('from: ', from)
      let day = this.$route.query.iamquery
      this.day = day
    },
  },
}
</script>
