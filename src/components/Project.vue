<template>
  <li>
    <ul>
      <li>{{name}}</li>
      <li>{{created}}</li>
    </ul>
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
  ul{
    list-style-type: none;
  }
</style>