<!-- app bar -->
<template>
  <v-app-bar app light>
    <v-app-bar-nav-icon @click.stop="mini = !mini" class="clickable"></v-app-bar-nav-icon>
    <v-toolbar-title style="width:300px" class="ml-0 pl-4">
      <span class="hidden-sm-and-down">controlPI test update</span>
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>
<script>
  export default {
    name: 'Appbar'
  }
</script>
