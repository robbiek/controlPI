<template>
  <v-app style="-webkit-app-region: drag">
    <Menu/>
    <Appbar/>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Appbar from './components/Appbar';

export default {
  components: {
    Menu,
    Appbar,
  }
};
</script>
