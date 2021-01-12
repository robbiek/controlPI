
<template>
  <v-card
    height="100%"
    width="100%"
    color="#fff"
    class=""
  >
    <v-navigation-drawer permanent color="primary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title white--text">
            <v-icon dark >
              mdi-cellphone-link
        </v-icon >
             roPI


          </v-list-item-title>
          <v-list-item-subtitle class="white--text">

            
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon color="secondary">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  class="white--text" >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    name: 'Menu',

    data: () => ({
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    }),
  }
</script>
