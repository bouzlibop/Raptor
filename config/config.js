var path = require('path');
var rootPath = path.resolve(__dirname + '/..');

module.exports = {
    production: {
        env: "production",
        root: rootPath,
        db: process.env.MONGOHQ_URL,
        server: "http://127.0.0.1:3000",
        port: 3000
    },
    staging: {
        env: "staging",
        root: rootPath,
        db: process.env.MONGOHQ_URL,
        server: "http://127.0.0.1:3000",
        port: 3000
    },
    test: {
        env: "test",
        root: rootPath,
        db: 'mongodb://localhost/your_app_db_test',
        server: "http://127.0.0.1:3000",
        port: 3000
    },
    development: {
        env: "development",
        root: rootPath,
        db: 'mongodb://localhost/test',
        server: "http://127.0.0.1:3000",
        port: 3000
    }
}