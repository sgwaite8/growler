var express = require('express');
var router = express.Router();
var Growl = require('../models/growl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Growler' });
});

module.exports = router;
