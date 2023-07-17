<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/public">미세먼지 정보(공공API)</router-link> |
    <router-link to="/trans">번역기(기업API)</router-link> |
    <router-link to="/live">실시간 음원정보(crawiling)</router-link>
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
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
