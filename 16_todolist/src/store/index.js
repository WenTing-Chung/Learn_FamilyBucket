import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS = {
  load() {
    return JSON.parse(localStorage.getItem('todoList') || [])
  },
  save(data) {
    localStorage.setItem('todoList', JSON.stringify(data))
  },
}

const filter = {
  all(todos) {
    return todos
  },
  active(todos) {
    return todos.filter((todo) => {
      return !todo.complete
    })
  },
  complete(todos) {
    return todos.filter((todo) => {
      return todo.complete
    })
  },
}

export default new Vuex.Store({
  strict: true, // 避免直接修改 state
  state: {
    todos: [
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: true },
    ],
  },
  getters: {
    // 當前狀態的所有索引
    todoIndex(state) {
      return filter[state.route.name](state.todos).map((todo) => state.todos.indexOf(todo))
    },
  },
  mutations: {
    // 取得資料
    SET_TODO(state, data) {
      state.todos = data
      // save LocalStorage (儲存更新LocalSorer)
      LS.save(state.todos)
    },
    // 新增資料
    ADD_TODO(state, data) {
      state.todos.push(data)
      LS.save(state.todos)
    },
    // 更新資料
    UPDATE_TODO(state, { index, data }) {
      state.todos[index] = data
      LS.save(state.todos)
    },
    // 刪除資料
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1)
      LS.save(state.todos)
    },
  },
  actions: {
    INIT_TODO({ commit }) {
      // load LocalStorage (讀取LocalStorage資料)
      commit('SET_TODO', LS.load())
    },
  },
  modules: {},
})
