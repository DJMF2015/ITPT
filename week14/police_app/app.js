// var imported = document.createElement('script');
// imported.src = '/source/about.html'; //'/path/to/imported/script';
// document.head.appendChild(imported);

const express = require('express');
const app = express();
const port = 3000;
var parser = require('body-parser');
const https = require('https');

app.use(parser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/')) //?

// http://localhost:3000 /
app.get('/', function(req, res){
  res.sendFile(__dirname + "/source/index.html");
});

// http://localhost:3000 /stocks
app.use('/stocks', function(re, res){
  res.sendFile(__dirname + '/source/stocks.html');
});
