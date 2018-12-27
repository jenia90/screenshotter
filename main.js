const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    // Create the browser window.
    win = new BrowserWindow({ width: 300, height: 200 });
    // and load the index.html of the app.
    win.loadFile('index.html');
  })

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })