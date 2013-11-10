exports.index = function(req, res){
    console.log(req.user.id);
    console.log(req.session.passport.user);
    res.render('index', { title: 'kjhlkjhlkj' });
};
exports.login = function(req,res){
  res.render('login');
};