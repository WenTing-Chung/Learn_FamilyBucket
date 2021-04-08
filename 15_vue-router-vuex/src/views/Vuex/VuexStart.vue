<template>
  <section class="vuetest">
    <div class="container">
      <div class="title">
        <img class="logo" :src="header.src" />
        <h1>{{ header.title }}</h1>
        <div class="descripted" v-if="list.length">
          <a v-if="day > 0" class="arrow left" @click="clickHandle(-1)">◀</a>
          <div class="menuItem white">
            <span class="number">{{ day + 1 }}</span>
            <span class="type">{{ list[day].type }}</span>
            <span class="link">
              <a :href="list[day].link">{{ list[day].title }}</a>
            </span>
          </div>
          <a v-if="day < 29" class="arrow right" @click="clickHandle(+1)">▶</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VuexStart',
  watch: {
    $route() {
      let day = parseInt(this.$route.params.day) - 1
      this.day = day
    },
  },
  computed: {
    day: {
      get() {
        return this.$store.state.day
      },
      set(val) {
        // this.$store.state.day = val
        this.$store.commit('SETDAY', val) // 直接修改state
      },
    },
    header() {
      return this.$store.state.header
    },
    list() {
      return this.$store.state.list
    },
  },
  mounted() {
    let first = parseInt(this.$route.params.day) - 1
    document.addEventListener('keyup', this.changeHandle)
    // this.day = first (存本地)
    this.$store.dispatch('GETLIST', first) // (存store) 使用dispatch操作store的actions
  },
  methods: {
    changeHandle(e) {
      let day = this.day
      if (e.keyCode === 39) day = day < 29 ? day + 1 : day
      else if (e.keyCode === 37) day = day > 0 ? day - 1 : day
      // this.day = day (不會更新路由)
      this.$router.replace({
        params: { day: day + 1 },
      })
      // 網址隨時更動
    },
    clickHandle(num) {
      let day = this.day
      day = (day + num + this.list.length) % this.list.length
      this.$router.replace({
        params: { day: day + 1 },
      })
    },
  },
  // 自己註冊/ 執行的事件, 要自己關掉
  beforeDestroy() {
    document.removeEventListener('keyup', this.changeHandle)
  },
}
</script>