<template>
  <li class="item">
    <router-link :to="{ name: 'Project', params: { project_name: name }}" class="item">
      <ul>
        <li>{{name}}</li>
        <li>{{created.substr(0,10)}}</li>
      </ul>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'Project',
  props:{
    name: String,
    created: String
  }
}
</script>

<style scoped>
  .item{
    max-width: 800px;
    margin: 0 auto 20px auto;
  }

  ul{
    list-style-type: none;
    padding: 30px;
    border: 1px solid black;
  }
</style>