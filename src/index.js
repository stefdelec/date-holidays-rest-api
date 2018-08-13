import routes from "./api"

const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    https = require('https'),
    http = require('http'),
    fs = require('fs');
const Holidays = require('date-holidays')
const {exec} = require('child_process');

const certOptions = {
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.crt')
};

app.use(bodyParser.json())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use('/', routes);


http.createServer(app).listen(8081);
console.log("server ready")
//https.createServer(certOptions, app).listen(443);
// app.listen(process.env.PORT || 8082);
