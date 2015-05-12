var express = require('express');
var async = require('async');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

require('./db');
var api = require('./services/api');


/*app.use(function(req, res, next) {
	req.model = require('./models');
	return next();
});*/
//var Controllers = require('./controllers');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var store = new session.MemoryStore();
var half_hour = 3600000 / 2;

app.use(session({
	store: store,
	secret: 'socket',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false,
		maxAge: half_hour
	}
}));

app.post('/api/login', api.login);
app.get('/api/validate', api.validate);

/*app.get('/api/validate', function (req,res) {
	_userId = req.session._userId;
	if(_userId){
		Controllers.User.findUserById(_userId, function (err,user) {
			if(err){
				res.json(401,{msg:err})
			}else{
				res.json(user)
			}
		})
	}else{
		res.json(401,null)
	}
});
app.post('/api/login', function (req,res) {
	name = req.body.name;
	if(name){
		Controllers.User.findByName(email, function (err,user) {
			if(err){
				res.json(500,{msg:err})
			}else{
				req.session._userId = user._id;
				res.json(user)
			}
		})
	}else{
		res.json(403)
	}
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
