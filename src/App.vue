<template>
  <div id="nav">
    <router-link to="/">
      Arthur
    </router-link>
    <router-link to="/projects">Mes projets</router-link>
  </div>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.logo{
  width: 50px;
  height: 50px;
}

a{
  text-decoration: none;
  color: black;
}
</style>
