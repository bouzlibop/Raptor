var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var clc = require('cli-color'),
    error = clc.red.bold,
    warn = clc.yellow,
    notice = clc.blue;
var path = require('path');

var handler = require(path.join(config.root+'/app/controllers/handler'));

var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, error('connection error:')));
db.on('open', console.log.bind(console, notice('Express server connected to MongoDB')));

var app = express();
require('./config/passport')(passport, mongoose, config);
require('./config/express')(express, app, config, passport);
require('./config/routes')(app, passport, handler, config);

app.listen(app.get('port'), function(){
    console.log(notice('Express server listening on port ' + app.get('port')));
});

//TODO-me more helper methods e.g. isUserInDB
//TODO-me http://andrewkelley.me/post/do-not-use-bodyparser-with-express-js.html
//TODO-me global passport, express, mongoose
//TODO-me add colors everywhere
//TODO-me reconection
//TODO-me disconnect()