module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pages: {
  index: 'src/main.js', // your main window
  splash: 'src/splash/main.js' // your video window
},
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ['github']
      }
    }
  }
}
