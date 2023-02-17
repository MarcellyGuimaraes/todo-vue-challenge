<template>

      <form>
        <input type="text" placeholder="Add details"/>
        <button>Add</button>
      </form>

      <ul>
        <li class="check">
          <input type="checkbox">
          <label>Teste... 1</label>
        </li>
        <li class="check">
          <input type="checkbox" checked>
          <label>Teste... 2</label>
        </li>
        <li class="check">
          <input type="checkbox">
          <label>Teste... 3</label>
        </li>
      </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
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
