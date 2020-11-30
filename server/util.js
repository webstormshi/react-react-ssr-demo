import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "../Routes";
import React from "react";


export const render = (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
    );

    return (
        `<html>
            <head></head>
            <body>
                <div id="root"><div>${content}</div></div>
            </body>
            <script src="./index.js"></script>
        </html>`
    );
}