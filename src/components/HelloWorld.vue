<template>
    <h1>#todo</h1>
    <ul>
      <li>All</li>
      <li>Active</li>
      <li>Completed</li>
      <hr/>

      <form>
        <input type="text" placeholder="Add details"/>
        <button>Add</button>
      </form>

      <ul>
        <li class="check">
          <input type="checkbox">
          <label>Teste...</label>
        </li>
        <li class="check">
          <input type="checkbox">
          <label>Teste...</label>
        </li>
        <li class="check">
          <input type="checkbox">
          <label>Teste...</label>
        </li>
      </ul>
    </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    testMessage: String
  }
}
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
  display: block
}
</style>
