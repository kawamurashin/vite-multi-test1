import express = require("express");
import {createServer} from "http";
class Main
{
    private readonly PORT: number = 3300;
    constructor() {
        console.log("main")
        const app = express();
        const allowCrossDomain = function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
            res.header(
                'Access-Control-Allow-Headers',
                'Content-Type, Authorization, access_token'
            )
            // intercept OPTIONS method
            if ('OPTIONS' === req.method) {
                res.send(200)
            } else {
                next()
            }
        }
        app.use(allowCrossDomain);
        app.use(express.static('dist/public'));

        const httpServer = createServer(app);
        httpServer.listen(this.PORT, () => {
            console.log("app listening on port " + this.PORT + " " + new Date());
        });
    }

}
new Main()