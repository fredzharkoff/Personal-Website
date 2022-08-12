var express = require('express');
var router = express.Router();

/* GET About Me page. */
router.get('/', function(req, res, next) {
  res.render('about.ejs', { title: 'About Me | Fred Zharkoff' });
});

module.exports = router;
