var HTTP_PORT = process.env.PORT || 8080;
//const jsonData= require('./public/config.json'); 

var express = require("express");
var app = express();

app.use(express.static('public'));

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

/*const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(8080);*/

