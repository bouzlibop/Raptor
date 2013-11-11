var path = require('path');
var rootPath = path.resolve(__dirname + './..');

module.exports = {
    production: {
        env: "production",
        root: rootPath,
        db: process.env.MONGOHQ_URL
    },
    staging: {
        env: "staging",
        root: rootPath,
        db: process.env.MONGOHQ_URL
    },
    test: {
        env: "test",
        root: rootPath,
        db: 'mongodb://localhost/your_app_db_test'
    },
    development: {
        env: "development",
        root: rootPath,
        db: 'mongodb://localhost/test'
    }
}