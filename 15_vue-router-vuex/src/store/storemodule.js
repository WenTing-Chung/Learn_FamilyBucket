// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

// Vue.use(Vuex)
// export default new Vuex.Store({
//   namespaced: true,
//   state: {
//     day: 1,
//     header: {
//       title: 'Vuex',
//       src: '/Excited-shark.png'
//     },
//     list: []
//   },
//   mutations: {
//     SETDAY(state, day) {
//       state.day = day
//     },
//     SETLIST(state, list) {
//       state.list = list
//     }
//   },
//   actions: {
//     GETLIST(content, data) {
//       content.commit('SETDAY', data)
//       return axios.get('/list.json').then(res => {
//         content.commit('SETLIST', res.data)
//       })
//     }
//   },
//   modules: {}
// })
