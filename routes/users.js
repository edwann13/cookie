var express = require('express');
var router = express.Router();
var app = express();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/book', function (req, res, next) {
// 	res.send("getting a random book");
// })

// app.route('/book')
// 	.get(function (req, res) {
// 		res.send("Get a random Book")
// 	})
// 	.post(function (req, res) {
// 		res.send("Add a book");
// 	})
// 	.put(function (req, res) {
// 		res.send("Update the book")
// 	})

module.exports = router;
