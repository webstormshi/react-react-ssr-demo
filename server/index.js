var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div>hello world!</div>
        </body>
        </html>`
    );
});

var server = app.listen(3000, () => {
    console.log('server is strart in 3000 prot...');
});