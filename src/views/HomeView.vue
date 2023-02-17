
<template>
  <div>
    <form @submit.prevent="adicionarTarefa">
      <input v-model="newTask" type="text" placeholder="Add details" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li class="check" v-for="todo in todos" :key="todo.id">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleComplete(todo.id)"
        />
        <label>{{ todo.descricao }}</label>
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
  data() {
    return {
      newTask: "",
    };
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
