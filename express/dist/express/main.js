"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
class Main {
    constructor() {
        this.PORT = 3300;
        console.log("main");
        const app = express();
        const allowCrossDomain = function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, access_token');
            if ('OPTIONS' === req.method) {
                res.send(200);
            }
            else {
                next();
            }
        };
        app.use(allowCrossDomain);
        app.use(express.static('dist/public'));
        const httpServer = http_1.createServer(app);
        httpServer.listen(this.PORT, () => {
            console.log("app listening on port " + this.PORT + " " + new Date());
        });
    }
}
new Main();
//# sourceMappingURL=main.js.map