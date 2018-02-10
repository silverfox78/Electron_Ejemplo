const electron = require('electron');
const url = require('url');
const path = require('path');

process.env.NODE_ENV = 'development';

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        icon: path.join(__dirname, 'img/ponyo.ico'),
        title: 'Ejemplo Electron',
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', function() {
        app.quit();
    });

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    //mainWindow.maximize();
});

const mainMenuTemplate = [{
    label: 'Archivo',
    submenu: [{
        label: 'Salir',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
            app.quit();
        }
    }]
}];

if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Desarrollo',
        submenu: [{
                label: 'Recargar',
                role: 'reload'
            },
            {
                label: 'DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    });
}