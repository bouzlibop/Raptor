var http = require('http');
var path = require('path');

var express = require('express');
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

var routes = require('./routes');
var user = require('./routes/user');

var secret = "theCode";

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function callback() {
//
//    var Schema = mongoose.Schema;
//
//    var testRhinoData = new Schema({
//        username: String,
//        password: String
//    }, {collection: 'testRhinoData'});
//
//    var User = mongoose.model('User', testRhinoData);
//
//    var user = new User({username: "Michał", password: "Baran"});
//    user.save(function (err) {
//        if (err) throw err;
//        console.log('User saved.');
//    });
//    User.find({password:"Baran"}, function(err, docs){
//        if(err) throw err;
//        console.log(docs);
//    });
});

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
//app.use(express.json()); app.use(express.urlencoded()); app.use(express.multipart());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(secret));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//TODO configure
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

passport.use(new LocalStrategy(
    function (username, password, done) {
        if (username != "A") {
            return done(null, false, { message: 'Incorrect username.' });
        }
        return done(null, {name: 'Adrian', id: 'A'});
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    done(null, {name: 'Adrian', id: 'A'});
});

app.get('/', ensureAuthenticated, routes.index);
app.get('/login', routes.login);

app.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login' }));

app.get('/users', ensureAuthenticated, user.list);

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}

//mongoose.disconnect();