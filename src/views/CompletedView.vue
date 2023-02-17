<template>
  <div class="about">
      <form>
        <input type="text" placeholder="Add details"/>
        <button>Add</button>
      </form>

      <ul>
        <li class="check">
          <input type="checkbox" checked>
          <label>Teste... 2</label>
        </li>
      </ul>
  </div>
</template>

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
