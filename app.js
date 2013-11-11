var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var clc = require('cli-color'),//TODO-me add colors everywhere
    error = clc.red.bold,
    warn = clc.yellow,
    notice = clc.blue;

var handler = require('./app/controllers');

var express = require('express');
var passport = require("passport");
var mongoose = require('mongoose');
mongoose.connect(config.db);// mongoose.disconnect();
var db = mongoose.connection;  //TODO-me reconection
db.on('error', console.error.bind(console, error('connection error:')));
db.on('open', console.log.bind(console, notice('Express server connected to MongoDB')));
require('./config/passport')(passport, mongoose, config);

var app = express();
require('./config/express')(express, app, config, passport);
require('./config/routes')(app, passport, handler);

app.listen(app.get('port'), function(){
    console.log(notice('Express server listening on port ' + app.get('port')));
});


//TODO-me more helper methods e.g. isUserInDB

//TODO-me http://andrewkelley.me/post/do-not-use-bodyparser-with-express-js.html



