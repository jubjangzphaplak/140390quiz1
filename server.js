
var express = require('express');
var app = express()



app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('pages/home');
});
app.get('/about', function(req, res) {
    res.render('pages/students');
});
app.get('/about', function(req, res) {
    res.render('pages/subjects');
});




console.log('App is running at http://localhost:8082');
app.listen(8082);