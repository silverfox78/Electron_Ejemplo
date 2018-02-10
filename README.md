# Electron - Ejemplo de como iniciar


## Paso 1 - Crear carpeta
Iniciamos creando una carpeta para el proyecto.


## Paso 2 - Datos iniciales
Para iniciar el proyecto, lo hacemos inciando el proyecto con NPM, esto nos hara preguntas que podemos responder o omitir...

```shell
npm init
```

Esto creara el archivo **package.json** en la raiz del sitio.

La idea es editarlo a algo similar a lo siguiente

```json
{
  "name": "Nombre del Proyecto",
  "version": "1.0.0",
  "description": "Descripcion del proyecto",
  "main": "index.js",
  "scripts": {
    "start": "electron ."
  },
  "author": "Su nombre",
  "license": "MIT"
}
```

## Paso 3 - Asociando Electron
Ahora para trabajar con electron debemos ejecutar el siguiente comando

```shell
npm install --save electron
```

Tras esto, crearemos el archivo **index.js** y lo editamos con algo similar a lo siguiente:

```javascript

  const electron = require('electron');
  const url = require('url');
  const path = require('path');

  const { app, BrowserWindow } = electron;

  let mainWindow;

  app.on('ready', function() {
      mainWindow = new BrowserWindow({});

      mainWindow.loadURL(url.format({
          pathname: path.join(__dirname, 'index.html'),
          protocol: 'file',
          slashes: true
      }))
  });

```

## Paso 4 - Para el empaquetado

```shell
npm run package-win

npm install electron-packager --save-dev

npm install electron-packager -g

npm install --save-dev electron

npm install --save-dev electron-winstaller

node installers/windows/createinstaller.js

npm run package-win

npm run create-installer-win

```