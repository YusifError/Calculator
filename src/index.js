const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
        icon: path.join(__dirname, '/assets/icon.png'),
        resizable: false
    })

    win.setMenuBarVisibility(false);
    win.setTitle('Calculator');
    win.loadFile('src/index.html');
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());