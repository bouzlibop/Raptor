var path = require('path');

module.exports = function (express, app, config, passport) {

    app.set('port', process.env.PORT || config.port);
    app.set('env', process.env.NODE_ENV || config.env);

    app.set('views', path.join(config.root, 'app/views'));
    app.set('view engine', 'jade');

    app.use(express.favicon(config.root + '/public/images/raptor.ico'));

    app.use(express.logger('dev'));
    app.use(express.bodyParser());//app.use(express.json()); app.use(express.urlencoded()); app.use(express.multipart());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({
        secret: 'theCode'
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(path.join(config.root, 'public')));
    app.use('/creator/', express.static(path.join(config.root, 'public')));

    app.configure('development', function () {
        app.locals.pretty = true;
        app.use(express.errorHandler());
    })

}