var path = require('path');

module.exports = function (app, passport, handler, config) {

    var router = require(path.join(config.root, '/app/controllers/router'));

//    app.all('/*', function (req, res, next) {
//        if (!req.get('Origin')) return next();
//        res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
//        res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//        if ('OPTIONS' == req.method) return res.send(200);
//        next();
//    });

    app.get('/', ensureAuthenticated, router.dashboard);

    app.get('/login', router.login);
    app.post('/login', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) {
                res.set('Access-Control-Allow-Origin', '*');
                res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
                res.send(200, 'http://127.0.0.1:3000/login');

            } else{
                req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    res.set('Access-Control-Allow-Origin', '*');
                    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
                    res.send(200, 'http://127.0.0.1:3000/');
                });
            }
        })(req, res, next)
    });

    app.get('/creator', router.creator);
    app.get('/shop', router.shop);
    app.get('/blog', router.blog);
    app.get('/about', router.about);

    app.get('/register', router.login);
    app.post('/register', handler.signup, function (req, res) {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.send(200, 'http://127.0.0.1:3000/');
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.send(200, 'http://127.0.0.1:3000/login');
    });

    app.get('/showAll', handler.showAll);

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login')
    }

    app.post('/upload', ensureAuthenticated, handler.upload);

    app.all('/users/:id', function (req, res, next) {
        if (!req.get('Origin')) return next();
        res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
        res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        // res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        // res.set('Access-Control-Allow-Max-Age', 3600);
        if ('OPTIONS' == req.method) return res.send(200);
        next();
    });

    app.del('/users/:id', function (req, res) {
        handler.deleteUser(req.param('id'), res);
    });

    app.get('/models/:id', function(req,res){
        handler.showUserModels(req.param('id'),res);
    });

}



//TODO-me move to handler
//TODO-me response header for delete
//TODO-me zmienic tak zeby na post odpowiadał czymś z linkami

