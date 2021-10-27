<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #100418;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #120818;
}

#nav a.router-link-exact-active {
  color: #8d42b9;
}
</style>
