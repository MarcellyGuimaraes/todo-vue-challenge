
<template>
  <div class="pt-7">
    <form @submit.prevent="adicionarTarefa" class="flex items-center pb-5">
      <div class="relative w-full">
        <input
          v-model="newTask"
          type="text"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            pl-10
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Search"
          required
        />
      </div>
      <button
        type="submit"
        class="
          p-2.5
          ml-2
          text-sm
          font-medium
          text-white
          bg-blue-700
          rounded-lg
          border border-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
      >
        Adicionar
      </button>
    </form>
    <ul>
      <li class="check pb-1" v-for="todo in todos" :key="todo.id">
        <input
          type="checkbox"
          class="mr-3"
          :checked="todo.completed"
          @change="toggleComplete(todo)"
        />
        <label class="text-xl">{{ todo.descricao }}</label>
      </li>
    </ul>
    <div v-if="todos.length == 0">Não existem tarefas</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_COMPLETED_TASK", "ADD_TASK"]),
    toggleComplete(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        this.TOGGLE_COMPLETED_TASK({ id, completed: !todo.completed });
      }
    },
    adicionarTarefa() {
      console.log("Adicionar clicado");
      if (this.newTask) {
        this.ADD_TASK({
          id: this.todos.length + 1,
          descricao: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
  },
};
</script>
