exports.index = function(req, res){
    //console.log(req.user.id);
    //console.log(req.session.passport.user);
    res.render('index', { title: req.user.username, userId: req.user.id });
};

exports.login = function(req,res){
    res.render('login');
};
//todo-me change button name to sthbtn