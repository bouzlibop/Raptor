var path = require('path');
var env = process.env.NODE_ENV || 'development';
var config = require(path.resolve(__dirname + '/../../config/config'))[env];

exports.login = function(req,res){
    res.render('login', { server: config.server});
};

exports.creator = function(req, res){
    res.render('creator', { server: config.server});
}

exports.blog = function(req, res){
    res.render('blog');
}

exports.shop = function(req, res){
    res.render('shop');
}

exports.register = function(req, res){
    res.render('register');
}

exports.dashboard = function(req, res){
    //console.log(req.user.id);
    //console.log(req.session.passport.user);
    res.render('authorized', { title: req.user.username, userId: req.user.id });
};
//todo-me change button name to sthbtn