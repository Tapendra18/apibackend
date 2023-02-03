const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path');

mongoose.connect('mongodb://localhost:27017/doctorapp',{useNewUrlParser: true});

mongoose.set('strictQuery',true);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join("uploads")));

require('./api/routes/routes.js')(app)

module.exports = app;