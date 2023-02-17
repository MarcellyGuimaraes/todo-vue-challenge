<template>
  <div class="completed p-7">
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="check pb-1">
        <input
          type="checkbox"
          class="mr-3"
          :checked="todo.completed"
          @change="toggleComplete(todo)"
        />
        <label class="mr-4 text-xl">{{ todo.descricao }}</label>

        <button
          class="
            focus:outline-none
            text-white
            bg-red-600
            hover:bg-red-700
            focus:ring-4 focus:ring-red-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            mr-2
            mb-2
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
          "
          @click="DELETE_TASK(todo.id)"
        >
          Deletar
        </button>
      </li>
    </ul>

    <div v-if="todos.length == 0">Não existem tarefas concluídas</div>
    <button
      class="
        focus:outline-none
        text-white
        bg-red-600
        hover:bg-red-700
        focus:ring-4 focus:ring-red-300
        font-medium
        rounded-lg
        text-sm
        px-5
        py-2.5
        mr-2
        mb-2
        mt-4
        dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
      "
      v-if="todos.length !== 0"
      @click="excluirTodasConcluidas"
    >
      Deletar tudo
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      todos: (state) => state.todos.filter((todo) => todo.completed),
    }),
  },
  methods: {
    ...mapMutations([
      "TOGGLE_COMPLETED_TASK",
      "DELETE_TASK",
      "DELETE_ALL_COMPLETED_TASKS",
    ]),
    toggleComplete(todo) {
      this.TOGGLE_COMPLETED_TASK({ id: todo.id, completed: !todo.completed });
    },
    excluirTodasConcluidas() {
      this.DELETE_ALL_COMPLETED_TASKS();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.check {
  display: block;
} */
</style>
