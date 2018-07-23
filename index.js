require('dotenv').config();
const express = require('express'); 
const app = express(); 
require('./routes');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');

var logDirectory = path.join(__dirname, 'logs')

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

var accessLogStream = rfs('access.log', {
    interval: '1d',
    path: logDirectory
})
//Rotating file logging

// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
// Single file logging

app.use(morgan('combined', {stream: accessLogStream}))

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}. Logging with Morgan Logger.`));
