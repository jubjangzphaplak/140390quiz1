// server.js
// load the things we need
var express = require('express');

var app = express()
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/home');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/students');
});

app.get('/about', function(req, res) {
    res.render('pages/subjects');
});
console.log('App is running at http://localhost:8082');


app.listen(8082);