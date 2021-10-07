<template>
  <div class="home">
    <h1>Bonjour</h1>
    <h2>Ceci est une page de présentation des projets GitHub :)</h2>

    <div>
      <p>Lien vers des projets GitHub :</p>
      <router-link to="/projects">Mes projets</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
