var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
var User = new Schema({
	_userId: ObjectId,
	name:{type:String,default : 'kezhi'},
	password:{type:String,default : '111111'}
});

module.exports = User;
