<template>
  <h1>#todo</h1>
  <nav>
    <router-link to="/">All</router-link> |
    <router-link to="/active">Active</router-link> |
    <router-link to="/completed">Completed</router-link> 
  </nav>
  <hr/>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
