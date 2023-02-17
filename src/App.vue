<template>
  <div class="h-screen flex flex-col items-center">
    <h1 class="font-bold text-4xl mt-6 mb-12">#todo</h1>
    <nav class="p-8 border-b w-3/4">
      <ul class="flex items-center justify-evenly">
        <li><router-link class="px-12" to="/">All</router-link></li>
        <li><router-link class="px-12" to="/active">Active</router-link></li>
        <li>
          <router-link class="px-12" to="/completed">Completed</router-link>
        </li>
      </ul>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
}
nav a.router-link-exact-active {
  /* padding: 0 3rem 2rem 3rem; */
  padding-bottom: 2rem;
  border-bottom: 5px solid red;
}
</style>
