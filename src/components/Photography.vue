<template>
  <div class="photography">
    <h1>Photo {{ $routes.params.id }}</h1>
    <p>
      In adipisicing culpa nulla nulla cupidatat voluptate voluptate amet sint laboris id sit magna duis sunt in in dolore commodo occaecat exercitation consectetur reprehenderit in in aliqua exercitation voluptate incididunt.
    </p>
  </div>
</template>

<script>
export default {
  name: 'photo',
  props: {
    photoId
  }
}
</script>