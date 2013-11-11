var LocalStrategy = require('passport-local').Strategy;

var User = require('../app/models/user');

module.exports = function (passport, mongoose, config) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);//==user._id
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({_id:id}, function(err,user){
            done(err, user);
        });
    });

    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.findOne({ username: username }, function(err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }//TODO-me password encryption
                if (user.password!=password) {//!user.validPassword(password)
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));

}

//TODO-me global passport, express, mongoose