var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/websocket.io-practice');
exports.User = mongoose.model('User',require('./user'));