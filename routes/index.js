var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nolsters quick action web drive.', link: '/images/f67.png' });
});

module.exports = router;
