var routes = require('../routes');
var user = require('../routes/user');

module.exports = function (app, passport, handler){

    app.get('/', ensureAuthenticated, routes.index);

    app.get('/login', routes.login);
    app.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login' }));

    app.get('/signup', routes.login);
    app.post('/signup', handler.signup);

    app.get('/users', ensureAuthenticated, user.list);

    //app.get()
    app.post('/upload', ensureAuthenticated, handler.upload);

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

    app.all('/users/:id', function(req, res, next){
        if (!req.get('Origin')) return next();
        res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
        res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        // res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        // res.set('Access-Control-Allow-Max-Age', 3600);
        if ('OPTIONS' == req.method) return res.send(200);
        next();
    });

    app.del('/users/:id',function(req, res){
        //TODO-me response header for delete
        handler.deleteUser(req.param('id'), res);
    });

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login')
    }
}
//TODO-me move to handler