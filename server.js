const http = require('http');
const express = require("express");
const apps = require('./app');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const { type } = require('os');
app.use(cors({credentials: true, origin: true}));
const port = process.env.PORT || 5000;

// app.set('port', process.env.PORT || 3000);
mongoose.set("strictQuery" , true);
const server = http.createServer(apps);

server.listen(port);

