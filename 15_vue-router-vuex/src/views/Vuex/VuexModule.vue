<template>
  <section class="vuetest">
    <div class="container">
      <div class="title">
        <div v-if="header">
          <img class="logo" :src="header.src" />
          <h1>{{ header.title }}</h1>
        </div>
        <div class="descripted" v-if="currencyDate">
          <a v-if="day > 0" class="arrow left" @click="clickHandle(-1)">◀</a>
          <div class="menuItem white">
            <span class="number">{{ day + 1 }}</span>
            <span class="type">{{ currencyDate.type }}</span>
            <span class="link">
              <a :href="currencyDate.link">{{ currencyDate.title }}</a>
            </span>
          </div>
          <a v-if="day < 29" class="arrow right" @click="clickHandle(+1)">▶</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StoreModule from '@/store/storemodule.js'
export default {
  name: 'VuexModule',
  watch: {
    $route() {
      console.log(to, from)
      let day = parseInt(this.$route.params.day) - 1
      this.day = day
    },
  },
  computed: {
    day: {
      get() {
        return this.$store.state.module ? this.$store.state.module.day : 0
      },
      set(val) {
        // this.$store.state.day = val
        this.$store.commit('module/SETDAY', val) // 直接修改state
      },
    },
    header() {
      return this.$store.state.module ? this.$store.state.module.header : null
    },
    currencyDate() {
      return this.$store.state.module ? this.$store.getters['module/currencyDate'] : null
    },
  },
  mounted() {
    let first = parseInt(this.$route.params.day) - 1
    document.addEventListener('keyup', this.changeHandle)
    // this.day = first (存本地)
    this.$store.registerModule('module', StoreModule)
    this.$store.dispatch('module/GETLIST', first) // (存store) 使用dispatch操作store的actions
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
      // 網址取代
    },
    clickHandle(num) {
      let day = this.day
      day += num
      this.$router.replace({
        params: { day: day + 1 },
      })
    },
  },
  // 自己註冊/ 執行的事件, 要自己關掉
  beforeDestroy() {
    this.$store.unregisterModule('module')
    document.removeEventListener('keyup', this.changeHandle)
  },
}
</script>