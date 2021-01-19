import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { preset } from 'vue-cli-plugin-vuetify-preset-crane/preset'

Vue.use(Vuetify);

export default new Vuetify({
  preset,
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        white: '#ffffff',
      },
    },
  },
});
