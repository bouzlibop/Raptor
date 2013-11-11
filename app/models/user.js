var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String
}, {collection: 'users'});

//UserSchema.plugin

//UserSchema.method

//UserSchema.statics.delete = function(userId){
//    console.log('probuej usunac'+userId);
//    this.findByIdAndRemove(userId);
//}

module.exports = mongoose.model('User', UserSchema);
