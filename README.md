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


## Paso 4 - Agregamos nuestra pagina principal

Como se vio en el punto anterior, nuestra pagina principal, la llamaremos **index.html**.
En esta pagina podemos hacer alucion a archivos locales o remotos, asi que estamos a la disposicion de nuestra creatividad...

Pero antes, requerimos algunas cosas, asi que volvemos a la consola y ejecutamos:

```shell
npm install jquery --save

npm install bootstrap@4.0.0-beta --save

npm install popper.js --save

```

Luego, hacemos el Html, por ejemplo:

```html
  <html>

  <head>
      <title>Ejemplo de Electron</title>
      <meta http-equiv="content-type" content="text/html; utf-8">
      <meta name="language" content="Spanish">
      <meta name="content-language" content="es">
      <meta name="robots" content="all">
      <meta name="Keywords" content="ie, version, jquery, ponyo" />
      <meta http-equiv="X-UA-Compatible" content="IE=IE10">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="img/ponyo.ico">
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
  </head>

  <body>
      <div class="container">
          <br/>
          <h1>Ejemplo de Electron</h1>
          <hr/>
      </div>
      <script>
          window.jQuery = window.$ = require('jquery');
      </script>
      <script src="node_modules/popper.js/dist/umd/popper.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
  </body>

  </html>
```

## Paso 5 - Para ejecutar

Es simple, desde la consola ejecutamos:

```shell

npm start

```


## Paso 6 - Para el empaquetado

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