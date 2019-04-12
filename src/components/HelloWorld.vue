<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      In adipisicing culpa nulla nulla cupidatat voluptate voluptate amet sint laboris id sit magna duis sunt in in dolore commodo occaecat exercitation consectetur reprehenderit in in aliqua exercitation voluptate incididunt.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
