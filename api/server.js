var express = require('express');
var app = express();
/*
*	Documentation for http node module
*	https://nodejs.org/api/http.html
*/
var http = require('http').Server(app);

// Helper Objects
var MainHelper = require("./routes/helpers/main_helper.js");

// Load main routes into app
require('./routes/main')(app, MainHelper);

app.get('/', function (req, res) {
  res.send('{"result" : "Hello, this is the Populeyes API. Keep a close lookout for beautiful sights!"}')
})
 
app.listen(3001)
