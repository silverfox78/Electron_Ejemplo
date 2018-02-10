const ipc = require('electron').ipcRenderer;
const querystring = require('querystring');
const http = require('https');

const btnBuscar = document.getElementById('btnPaisBuscar');

btnBuscar.addEventListener('click', function(event) {
    Buscar($("#cmbPaises").val());
});

const postData = querystring.stringify({});
const options = {
    hostname: 'restcountries.eu',
    port: 443,
    path: '/rest/v2/all?fields=name',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    const combo = document.querySelector('#cmbPaises');
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        var data = JSON.parse(chunk);
        for (var pais in data) {
            const itemText = document.createElement('option');
            const informacion = document.createTextNode(data[pais].name);
            itemText.appendChild(informacion);
            combo.appendChild(itemText);
        }
    });
    res.on('end', () => {
        console.log('No more data in response.');
        $("#alertaPaises").hide();
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
    $("#alertaPaisesError").show();
});

req.write(postData);
req.end();