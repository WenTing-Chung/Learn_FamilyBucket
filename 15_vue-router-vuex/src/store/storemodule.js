import axios from 'axios'

export default {
  // store 模組化 namespaced: true
  namespaced: true,
  strict: true,
  state: {
    day: 0,
    header: {
      title: 'Vuex',
      src: '/Excited-shark.png'
    },
    list: []
  },
  // state 資料先做處理, 類似 computed
  getters: {
    currencyDate(state) {
      return state.list[state.day]
    }
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
}
