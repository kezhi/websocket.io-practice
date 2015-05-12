var db = require('../models');
var async = require('async');


exports.findUserById = function (_userId,callback) {
	db.User.findOne({
		_id:_userId
	},callback)
};
exports.findByNameOrCreate = function (name,callback) {
	db.User.findOne({
		name:name
	}, function (err,user) {
		if(user){
			callback(null,user)
		}else{
			user = new db.User;
			user.name = name;
			user.save(callback)
		}
	})
};
exports.online = function(_userId, callback) {
	db.User.findOneAndUpdate({
		_id: _userId
	}, {
		$set: {
			online: true
		}
	}, callback)
};