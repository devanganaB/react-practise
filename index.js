const { app, BrowserWindow , ipcMain} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Enable Node integration
      contextIsolation: false,
    },
  });

  // Load React app
  mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));

  ipcMain.on("number", (event, value)=>{
    console.log(value)
  })

  // Open DevTools in development
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
