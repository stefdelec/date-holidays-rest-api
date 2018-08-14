import routes from "./api"
import express from 'express'
import bodyParser from 'body-parser'

const app = express(),
    https = require('https'),
    http = require('http'),
    fs = require('fs');

const certOptions = {
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.crt')
};

app.use(bodyParser.json())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use('/', routes);


http.createServer(app).listen(process.env.PORT || 8081);
//https.createServer(certOptions, app).listen(443);

console.log("server ready")
