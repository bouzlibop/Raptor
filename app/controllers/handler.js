var routes = require('../.');
var User = require('../models/user');
var passport = require("passport");
var fs = require('fs');
var path = require('path');
//TODO-me jednakowe cudzysłów

exports.deleteUser = function(userId, res){

//  User.findByIdAndRemove();
    User.findById( userId, function (err, doc) {
        if (err) return err
        if(doc==null){
            res.send(204);
        }else{
            doc.remove(function(){
                res.send(200);
            });
        }
    })
};

//todo-me manage error
exports.signup = function(req,res){
    User.findOne({username:req.body.username}, function(err, data){
        if(data==null){
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.password = req.body.password;
            newUser.save(function(err, result){
                if(err) console.log(err);
                    passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login' })(req,res);
            });
        }else{
            //todo-me enable flash messages
            routes.login(req, res);
//          window.location.replace("http://127.0.0.1:3000/");
        }
    })
};
                        //TODO-me only realtive paths
exports.upload = function(req,res){
    //    console.log('file: %j', req.files.model);
    var model = req.files.model;

    var newPath = path.resolve(__dirname + './../..' + '/data');
    newPath = newPath + '\\'+model.name;
//    console.log("moving from : "+model.path+" to: "+newPath);
//    fs.rename(model.path, newPath, function(err){
//        if(err) throw err;
//    });
    var is = fs.createReadStream(model.path);
    var os = fs.createWriteStream(newPath);
    is.pipe(os);
    is.on('end',function() {
        fs.unlinkSync(model.path);
        passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login' })(req,res);
    });
}