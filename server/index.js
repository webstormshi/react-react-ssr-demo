import express from "express";
import React from "react";
import Home from "../src/containers/Home";
import { renderToString } from "react-dom/server";
const app = express();

app.use(express.static("public"));

const content = renderToString(<Home />);

app.get('/', (req, res) => {
    res.send(
        `<html>
            <head></head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="./index.js"></script>
        </html>`
    );
});

var server = app.listen(3000, () => {
    console.log('server is strart in 3000 prot...');
});