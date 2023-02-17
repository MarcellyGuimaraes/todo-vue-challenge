
<template>
  <div>
    <form @submit.prevent="adicionarTarefa">
      <input v-model="novaTarefa" type="text" placeholder="Add details" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li class="check" v-for="todo in todos" :key="todo.id">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleCompleted(todo.id)"
        />
        <label>{{ todo.descricao }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    ...mapMutations(["setCompleted", "addTarefa"]),
    toggleCompleted(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        this.setCompleted({ id, completed: !todo.completed });
      }
    },
    adicionarTarefa() {
      if (this.novaTarefa) {
        this.addTarefa({
          id: this.todos.length + 1,
          descricao: this.novaTarefa,
          completed: false,
        });
        this.novaTarefa = "";
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
