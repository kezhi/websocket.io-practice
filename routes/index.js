var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: '聊吧' });
});
*//* GET home page. *//*
router.get('/login', function(req, res, next) {
	res.render('pages/login', { title: '登录' });
});*/
router.all('/*', function(req, res, next) {
	var arbitraryUrls = ['pages', 'api'];
	if (arbitraryUrls.indexOf(req.url.split('/')[1]) > -1) {
		next();
	} else {
		res.render('index');
	}
});

router.get('/pages/*', function(req, res, next) {
	res.render('.' + req.path);
});

module.exports = router;
