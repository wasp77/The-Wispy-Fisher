var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var api = require('./routes/api');
var serveIndex = require('serve-index')
var app = express();


app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/docs', serveIndex('public/docs', { 'icons': true }))
app.use('/images', serveIndex('public/images/profiles', { 'icons': true }))

app.use('/', api);

module.exports = app;
