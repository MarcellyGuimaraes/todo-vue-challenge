<template>
  <div class="about">
    <ul>
      <li class="check" v-for="todo in incompleteTodos" :key="todo.id">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="updateTodoStatus(todo)"
        />
        <label>{{ todo.descricao }}</label>
        <button>Deletar</button>
      </li>
    </ul>

    <button>Deletar tudo</button>
  </div>
</template>

<script>
import { todos } from "../components/data";

export default {
  data() {
    return {
      todos: todos,
    };
  },
  computed: {
    incompleteTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
  },
  methods: {
    updateTodoStatus(todo) {
      todo.completed = !todo.completed;
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
