
<template>
    <v-navigation-drawer v-model="drawer" permanent color="#493C56" :mini-variant.sync="mini" app dark >
      <v-list-item class="px-2 pt-1">
        <v-list-item-avatar>
          <v-img src="../assets/logo.png" alt="" class="mx-auto" />
        </v-list-item-avatar>
        <v-list-item-title class="ml-4 title white--text">
           controlPI
        </v-list-item-title>
      </v-list-item>

      <v-list nav >
        <template v-for="item in items">
          <v-list-group
          v-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.icon"
          active-class="white--text">

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title >
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
          v-for="(child, i) in item.children"
          :key="i"
          route :to="child.route"
          active-class="white--text">
          <v-list-item-action v-if="child.icon">
            <v-icon>{{child.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ child.text }}
            </v-list-item-title>
          </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else
        :key ="item.text"
        active-class="white--text"
        route
        :to="item.route"
        >
        <v-list-item-action >
          <v-icon color="rgb(146,132,164)">{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-title >
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
      </template>
      </v-list>
      <template v-slot:append>
   <div class="pa-2">
     <v-list dense flat>
         <v-list-item-group >
    <v-list-item
      v-for="(subitem, i) in subitems"
      :key="i"
    >
      <v-list-item-icon>
        <v-icon v-text="subitem.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="subitem.text"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</v-list>
   </div>
 </template>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Menu',
    props: {
      source: String
    },
    data: () => ({
      drawer: null,
      mini: false,
      fab:false,
      items: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard', route:'/' },
      ],
     subitems: [
       { text: 'Help', icon: 'mdi-account-question' },
       { text: 'Settings', icon: 'mdi-settings' },
     ],
      right: null,
    }),
  }
</script>
