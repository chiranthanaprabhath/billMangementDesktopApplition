const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    icon: 'CG.png',
    webPreferences: {
      nodeIntegration: true
    },
  })
  win.setTitle("C.G Products (Pvt) Ltd.");
  win.loadFile('./dist/electron-app/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
