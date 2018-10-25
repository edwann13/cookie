var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("you went home congrats you are doing something worth your time")
});

router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/name/:user_name/:age', function(req, res) {
	res.status(200);
	res.set("Content-type", "text/html");
	res.send('<html> <body>' + "<h1>Hello " + req.params.user_name + ": Age: " + req.params.age + "</h1>" + "</body></html>");
});

var user = {
	'azat' : {
		email: 'hi@azat.co',
		website: 'google.com',
		blog: 'google.com'
	}
};








module.exports = router;
