import Vue from 'vue'
import Splash from './splash.vue'
import vuetify from '../plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
//import '../src/assets/css/main.css'
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Splash)
}).$mount('#app')
