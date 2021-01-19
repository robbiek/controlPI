'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { autoUpdater } from "electron-updater"
const isDevelopment = process.env.NODE_ENV !== 'production'
const windowStateKeeper = require('electron-window-state')
const electron = require('electron');
const ipc = electron.ipcRenderer;
const path = require('path');

//windows
let mainWindow
let splashWindow
//electron updater
autoUpdater.autoDownload = false;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

  function createWindow(devPath, prodPath) {
  // Create the browser window.

  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  })

    let mainWindow = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    'minWidth': 800,
    'minHeight': 600,
    'show':false,
    'frame': true,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true
    }
  })
  mainWindow.setMenu(null)
  mainWindowState.manage(mainWindow);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
     mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL + devPath)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    mainWindow.loadURL(`app://./${prodPath}`)
    //autoUpdater.checkForUpdatesAndNotify()
  }
   return mainWindow
}

  function createSplashWindow(devPath, prodPath) {

  let splashWindow = new BrowserWindow({

    'width': 375,
    'height': 450,
    'frame':false,
    'show' : true,
    'backgroundColor': '#344955',
  })
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    splashWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL + 'splash.html')
    //if (!process.env.IS_TEST) splashWindow.webContents.openDevTools()
  } else {
    splashWindow.loadURL(`app://./${prodPath}`)
  }

  splashWindow.on('closed', () => { splashWindow = null })
  return splashWindow
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  //create the windows
  mainWindow = createWindow('', 'index.html')
  splashWindow = createSplashWindow('', 'splash.html')

  //check for updates
  autoUpdater.checkForUpdates()

  //display splashscreen till main window is loaded unless there is an update available
  mainWindow.once('ready-to-show', () => {
    //download the update if there is one available
    autoUpdater.on('update-available', (info) => {
       autoUpdater.downloadUpdate()
    })
    //restart and install the update
    autoUpdater.on('update-downloaded', () => {
      setTimeout(() => { autoUpdater.quitAndInstall() }, 5100);
     })

    mainWindow.show()

    //destroy splash Splashcreen
    splashWindow.close()
  })
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
