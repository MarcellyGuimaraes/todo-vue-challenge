<template>
  <div class="about">
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="check">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleComplete(todo)"
        />
        <label>{{ todo.descricao }}</label>
        <button @click="DELETE_TASK(todo.id)">deletar</button>
      </li>
    </ul>

    
    <div v-if="todos.length == 0">Não existem tarefas concluídas</div>
    <button v-if="todos.length !== 0" @click="excluirTodasConcluidas">Deletar tudo</button>
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
    ...mapMutations(["TOGGLE_COMPLETED_TASK", "DELETE_TASK", "DELETE_ALL_COMPLETED_TASKS"]),
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
h3 {
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
}
</style>
