<template>
  <div class="about">
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="check">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleCheck(todo)"
        />
        <label>{{ todo.descricao }}</label>
        <button @click="excluirTarefa(todo.id)">deletar</button>
      </li>
    </ul>

    <button @click="excluirTudo">Deletar tudo</button>
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
    ...mapMutations(["setCompleted", "excluirTarefa", "excluirTarefasConcluidas"]),
    toggleCheck(todo) {
      this.setCompleted({ id: todo.id, completed: !todo.completed });
    },
    excluirTudo() {
      this.excluirTarefasConcluidas();
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
