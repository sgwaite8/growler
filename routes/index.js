var express = require('express');
var router = express.Router();
var Growl = require('../models/growl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Growler' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { growl: req.session.feed });
});

router.post('/', function(req, res, next) {
  var temp = req.body;
  req.session.feed.push(temp);
  res.redirect('/');
  console.log(req.session.feed);
});

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
