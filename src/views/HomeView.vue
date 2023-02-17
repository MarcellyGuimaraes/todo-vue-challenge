
<template>
  <div>
    <form>
    <input type="text" placeholder="Add details" />
    <button>Add</button>
  </form>

  <ul>
    <li class="check" v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.completed" />
      <label>{{ todo.descricao }}</label>
    </li>
  </ul>
  </div>
</template>

<script>
import {todos} from "../components/data";

export default {
  name: "HelloWorld",
  data() {
    return {
      todos: todos,
    };
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
