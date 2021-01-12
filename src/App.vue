<template>
  <v-app>
    <v-main>
      <v-titlebar style="background:#D2DBE0" :platform="platform" :theme="theme"  :on-close="close" :on-maximize="toggleMaximize"
                  :on-minimize="minimize" :is-maximizable="isMaximizable" :is-closable="isClosable"
                  :is-minimizable="isMinimizable" :show-icon="false" :show-title="false">
      </v-titlebar>
      <Menu/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
export default {
  components: {
    Menu,
  },
  data() {
        return {
            platform: process.platform,
            theme: "light",
            isMaximizable: window.electronRemote.getCurrentWindow().isMaximizable(),
            isMinimizable: window.electronRemote.getCurrentWindow().isMinimizable(),
            isClosable: window.electronRemote.getCurrentWindow().isClosable(),
            showTitle: true,
            showIcon: true,
            menu: [
                {
                    label: "Item 1",
                    click:  function(){
                        console.log("Pressed item 1")
                    }
                },
                {
                    label: "Item 2",
                    click:  function(){
                        console.log("Pressed item 2")
                    }
                }
            ]
        }
    },
  methods: {
       close() {
           window.electronRemote.getCurrentWindow().close()
       },
       toggleMaximize() {
           let win = window.electronRemote.getCurrentWindow();
           if (win.isMaximized())
               win.unmaximize();
           else
               win.maximize();
       },
       minimize() {
           window.electronRemote.getCurrentWindow().minimize();
       }
   }
};
</script>
