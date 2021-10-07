<template>
  <div class="home">
    <h1>Mes projets GitHub</h1>

    <div>
      <h2><a :href="profile.html_url">{{profile.login}}</a></h2>
      <img :src="profile.avatar_url" alt="">

      <router-link to="/projects">→ Vers mes projets ←</router-link>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'Home',
    mounted() {
      this.getProfile()
    },
    computed:{
      ...mapState('profile', ['profile']),
    },
    methods:{
      ...mapActions('profile', ['getProfile']),
    }
  }
</script>

<style scoped>
  div{
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div h2{
    margin-bottom: 20px;
  }

  div img{
    width: 350px;
    margin-bottom: 20px;
  }

  div a{
    text-decoration: underline;
    font-weight: bold;
  }
</style>