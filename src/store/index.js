import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  },
  getters: {},
  mutations: {
    setCompleted(state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id)
      if (todo) {
        todo.completed = payload.completed
        localStorage.setItem('todos', JSON.stringify(state.todos))
      }
    },
    addTarefa(state, payload) {
      state.todos.push(payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    excluirTarefa(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id)
      if (index !== -1) {
        state.todos.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(state.todos))
      }
    },
    excluirTarefasConcluidas(state) {
      state.todos = state.todos.filter((todo) => !todo.completed)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
  },
  actions: {},
  modules: {},
})
