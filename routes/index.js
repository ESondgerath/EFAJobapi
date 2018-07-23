require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var sequelize = require("../db");
var cors = require('cors');
var student = require('../models/student');

app.use(cors());
sequelize.sync(); // {force: true}
app.use(bodyParser.json());

app.use('/student', student);