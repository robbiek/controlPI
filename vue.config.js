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
      nodeIntegration: true,
      preload: 'src/preload.js',
      builderOptions: {
        publish: ['github']
      }
    }
  }
}
