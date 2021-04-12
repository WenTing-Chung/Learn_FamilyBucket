import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import '@/assets/css/all.css'

sync(store, router)
Vue.config.productionTip = false
// 可以使用 v-focus 達成 focus 狀態
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  },
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
