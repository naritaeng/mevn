<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ex1">ex1</router-link> |
    <router-link to="/ex2">ex2</router-link> |
    <router-link to="/ex3">ex3</router-link> |
    <router-link to="/ex4">ex4</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
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
  padding: 10px 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
