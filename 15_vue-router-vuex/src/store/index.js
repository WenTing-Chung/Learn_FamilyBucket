import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // 嚴謹模式
  strict: true,
  state: {
    day: 0,
    header: {
      title: 'Vuex',
      src: '/Excited-shark.png'
    },
    list: []
  },
  mutations: {
    SETDAY(state, day) {
      state.day = day
    },
    SETLIST(state, list) {
      state.list = list
    }
  },
  actions: {
    GETLIST(context, data) {
      context.commit('SETDAY', data)
      return axios.get('/list.json').then(res => {
        context.commit('SETLIST', res.data)
      })
    }
  },
  modules: {}
})
