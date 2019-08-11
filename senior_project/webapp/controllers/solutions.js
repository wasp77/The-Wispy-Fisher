var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/solutions/search-injection', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/search-injection.html'));
});

router.get('/solutions/course-exposure', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/data-exposure.html'));
});

router.get('/solutions/contact-xss', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/contact-xss.html'));
});

router.get('/solutions/weak-session', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/weak-session.html'));
});

router.get('/solutions/deserialization', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/deserialization.html'));
});

router.get('/solutions/shop-error', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/shop-error.html'));
});

router.get('/solutions/product-csrf', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/product-csrf.html'));
});

router.get('/solutions/product-xss', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/product-xss.html'));
});

router.get('/solutions/user-csrf', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/user-csrf.html'));
});

router.get('/solutions/password-idor', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/password-idor.html'));
});

router.get('/solutions/login-injection', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/login-injection.html'));
});

router.get('/solutions/login-xss', function(req, res, next) {
  res.sendFile(path.resolve('views/solutions/login-xss.html'));
});

module.exports = router;
