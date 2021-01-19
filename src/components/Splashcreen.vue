
<template >
  <v-card height="450px" :style="{background: $vuetify.theme.themes.light.primary}">
    <p>Checking for updates</p>
  <v-footer
     padless
     absolute
     :style="{background: $vuetify.theme.themes.light.primary}"
   >
   <v-progress-linear
     indeterminate
     color="yellow darken-1"
     height="15"
   ></v-progress-linear>
 </v-footer>
</v-card>
</template>

<script>
  export default {
    name: 'Splashcreen',
  }
</script>
