var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/hints/login', function(req, res, callback) {
  res.sendFile(path.resolve('views/hints/login-hints.html'));
});

router.get('/hints/account', function(req, res, callback) {
  res.sendFile(path.resolve('views/hints/account-hints.html'));
});

router.get('/hints/contact', function(req, res, callback) {
  res.sendFile(path.resolve('views/hints/contact-hints.html'));
});

router.get('/hints/form', function(req, res, callback) {
  res.sendFile(path.resolve('views/hints/form-hints.html'));
});

router.get('/hints/shop', function(req, res, callback) {
  res.sendFile(path.resolve('views/hints/shop-hints.html'));
});

router.get('/hints/product', function(req, res, callback) {
  res.sendFile(path.resolve('views/hints/product-hints.html'));
});

router.get('/hints/password', function(req, res, callback) {
  res.sendFile(path.resolve('views/hints/password-hints.html'));
});

router.get('/hints/username', function(req, res, callback) {
  res.sendFile(path.resolve('views/hints/username-hints.html'));
});

module.exports = router;
