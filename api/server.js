var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});
/*
*	Documentation for http node module
*	https://nodejs.org/api/http.html
*/
var http = require('http').Server(app);
var request = require('request');
// Helper Objects
var MainHelper = require("./routes/helpers/main_helper.js");

// Load main routes into app
require('./routes/main')(app, request, MainHelper);

app.get('/', function (req, res) {
  res.json('{"result" : "Hello, this is the Populeyes API. Keep a close lookout for beautiful sights!"}')
})
 
http.listen(3001,function(){
	console.log("Connected & Listen to port 3001 Internally");
});
