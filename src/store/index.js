import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, descricao: 'teste 1111', completed: false },
      { id: 2, descricao: 'teste 2222', completed: false },
      { id: 3, descricao: 'teste 3333', completed: false },
      { id: 4, descricao: 'teste 4444', completed: false },
      { id: 5, descricao: 'teste 5555', completed: false },
      { id: 6, descricao: 'teste 6666', completed: false },
    ],
  },
  getters: {},
  mutations: {
    setCompleted(state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id)
      if (todo) {
        todo.completed = payload.completed
      }
    },
    addTarefa(state, payload) {
      state.todos.push(payload)
    },
    excluirTarefa(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id)
      if (index !== -1) {
        state.todos.splice(index, 1)
      }
    },

    excluirTarefasConcluidas(state) {
      state.todos = state.todos.filter((todo) => !todo.completed)
    },
  },
  actions: {},
  modules: {},
})
