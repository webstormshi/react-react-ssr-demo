import express from "express";
import { render } from "./util";
const app = express();

app.use(express.static("public"));

app.get('*', (req, res) => {
    res.send(render(req));
});

var server = app.listen(3000, () => {
    console.log('server is strart in 3000 prot...');
});