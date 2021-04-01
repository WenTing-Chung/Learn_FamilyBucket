<template>
  <section class="vuetest">
    <!-- <h2>Vuex 測試</h2>
    <div>
      <p v-if="list.length">Day：{{ day + 1 }}</p>
    </div> -->
    <div class="container">
      <div class="title">
        <img class="logo" :src="header.src" />
        <h1>{{ header.title }}</h1>
        <div class="descripted" v-if="list.length">
          <a v-if="day > 0" class="arrow left" @click="changeHandle(-1)">◀</a>
          <div class="menuItem white">
            <span class="number">{{ day }}</span>
            <span class="type">{{ list[day].type }}</span>
            <span class="link">
              <a :href="list[day].link">{{ list[day].title }}</a>
            </span>
          </div>
          <a v-if="day < 29" class="arrow right" @click="changeHandle(+1)">▶</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    day: {
      get() {
        return this.$store.state.day
      },
      set(val) {
        // this.$store.state.day = val
        this.$store.commit('SETDAY', val)
      },
    },
    header() {
      return this.$store.state.header
    },
    list() {
      return this.$store.state.list
    },
  },
  watch: {
    $route() {
      let day = parseInt(this.$route.params.day)
      this.day = day
    },
  },
  mounted() {
    let choose = parseInt(this.$route.params.day) || this.$store.state.day
    this.$store.dispatch('GETLIST', choose)
  },
  methods: {
    // 利用餘數左右切換
    changeHandle(change) {
      // (5 + (1 || -1) + 30) % 30
      this.day = (this.day + change + this.list.length) % this.list.length
      // this.$router.replace({
      //   params: { day: day + 1 },
      // })
    },
  },
}
</script>
