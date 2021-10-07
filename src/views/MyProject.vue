<template>
  <div>
    <h1>{{project.name}}</h1>

    <ul>
      <li><a :href="project.html_url">Lien</a></li>
      <li>Description : {{project.description != null ? project.description : "Il n'y a pas de description disponible"}}</li>
      <li>Crée le : {{project.created_at}}</li>
      <li>Modifié le : {{project.updated_at}}</li>
      <li>Crée le : {{project.created_at}}</li>
      <li>Nombre d'abonnés : {{project.subscribers_count}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'Project',
    data(){
      return {
        project_name: this.$route.params.project_name
      }
  },
    mounted() {
      this.getProject(this.project_name)
    },
    computed:{
      ...mapState('projects', ['project']),
    },
    methods:{
      ...mapActions('projects', ['getProject']),
    }
  }
</script>

<style scoped>
</style>