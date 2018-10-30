var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
  console.log("you went home congrats you are doing something worth your time")
});


router.get('/hello', function (req, res, next) {
	res.render('layout');
})






module.exports = router;
