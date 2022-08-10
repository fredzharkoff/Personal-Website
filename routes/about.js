var express = require('express');
var router = express.Router();

/* GET About Me page. */
router.get('/about/', function(req, res, next) {
  res.render('about', { title: 'About Me | Fred Zharkoff' });
});

module.exports = router;
