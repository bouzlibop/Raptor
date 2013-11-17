var path = require('path');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport, mongoose, config) {

    var User = require(path.join(config.root, 'app/models/user'));

    passport.serializeUser(function (user, done) {
        console.log('serializuje usera');
        console.log(user);
        done(null, user.id);//==user._id
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({_id:id}, function(err,user){
            console.log('deserializuje usera');
            console.log(user);
            done(err, user);
        });
    });

    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.findOne({ username: username }, function(err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (user.password!=password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));

}

//TODO-me password encryption
