function Buscar(pais) {
    const ipc = require('electron').ipcRenderer;
    const querystring = require('querystring');
    const http = require('https');

    const postData = querystring.stringify({});
    const options = {
        hostname: 'en.wikipedia.org',
        port: 443,
        path: '/api/rest_v1/page/summary/' + pais,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', //'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const req = http.request(options, (res) => {
        const informacion = document.querySelector('#informacion');
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(chunk);
            var data = JSON.parse(chunk);
            console.log(data);
            for (var pais in data) {
                informacion.innerHTML = data[pais].description;
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
};