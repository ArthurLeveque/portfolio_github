<template>
  <div class="about">
    <ul>
      <project v-for="(project, index) in projects" :key="index" :name="project.name" :created="project.created_at"></project>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  import Project from '../components/Project.vue'

  export default {
    name: 'Projects',
    components: {Project},
    mounted() {
      this.getProjects()
    },
    computed:{
      ...mapState('projects', ['projects']),
    },
    methods:{
      ...mapActions('projects', ['getProjects']),
    }
  }
</script>

<style scoped>
  ul{
    list-style-type: none;
  }
</style>