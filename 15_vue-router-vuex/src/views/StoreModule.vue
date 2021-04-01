<template>
  <section class="vuetest">
    <!-- <h2>Vuex 測試</h2>
    <div>
      <p v-if="list.length">Day：{{ day + 1 }}</p>
    </div> -->
    <div class="container">
      <div class="title">
        <div v-if="header">
          <img class="logo" :src="header.src" />
          <h1>{{ header.title }} {{ day }}</h1>
        </div>
        <div class="descripted" v-if="list.length">
          <a v-if="day > 0" class="arrow left" @keyup="changeHandle(-1)">◀</a>
          <div class="menuItem white">
            <span class="number">{{ day }}</span>
            <span class="type">{{ list[day].type }}</span>
            <span class="link">
              <a :href="list[day].link">{{ list[day].title }}</a>
            </span>
          </div>
          <a v-if="day < 29" class="arrow right" @keyup="changeHandle(+1)">▶</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import storemodule from '@/store/storemodule.js'
export default {
  name: 'StoreModule',
  created() {
    this.$store.registerModule('list', storemodule)
  },
  mounted() {
    let first = parseInt(this.$route.params.day) + 1
    this.$store.dispatch('list/GETLIST', first)
    document.addEventListener('keyup', this.changeHandle)
  },
  computed: {
    day: {
      get() {
        return this.$store.state.list ? this.$store.state.list.day : 0
      },
      set(value) {
        this.$store.commit('list/SETDAY', value)
      },
    },
    header() {
      return this.$store.state.list ? this.$store.state.list.header : null
    },
    list() {
      return this.$store.state.list ? this.$store.state.list.list : []
    },
  },
  watch: {
    $router() {
      let day = parseInt(this.$route.params.day) + 1
      this.day = day
    },
  },
  methods: {
    changeHandle(e) {
      let day = this.day
      if (e.keyCode === 39) day = day < 29 ? day + 1 : day
      else if (e.keyCode === 37) day = day > 0 ? day + 1 : day
      this.$router.replace({
        params: { day: day + 1 },
      })
    },
  },
}
</script>
