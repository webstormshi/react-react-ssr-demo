import express from "express";
import React from "react";
import Home from "../src/containers/Home";
import { renderToString } from "react-dom/server";
const app = express();

const content = renderToString(<Home />);

app.get('/', (req, res) => {
    res.send(
        `<html>
            <head></head>
            <body><div>${content}</div></body>
        </html>`
    );
});

var server = app.listen(3000, () => {
    console.log('server is strart in 3000 prot...');
});