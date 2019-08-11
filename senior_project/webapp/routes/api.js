var express = require('express');
var router = express.Router();
var path = require('path');
var solutions = require('../controllers/solutions');
var login = require('../controllers/login');
var shop = require('../controllers/shop');
var contact = require('../controllers/contact');
var purchase = require('../controllers/purchase');
var product = require('../controllers/product');
var review = require('../controllers/review');
var user = require('../controllers/user');
var account = require('../controllers/account');
var hints = require('../controllers/hints');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('views/guide.html'));
});

/* GET the solution for a vulnerability. */
router.get('/solutions/:solution', solutions);

/* GET the store front. */
router.get('/storefront', function(req, res, next) {
  res.sendFile(path.resolve('views/storefront.html'));
});

/* Paths for logging into an acount.*/
router.get('/login', login.getPage);
router.post('/login', login.login);

/* Paths for shop including retrieving and searching for products.*/
router.get('/shop', shop.getPage);
router.get('/items', shop.getItems);
router.get('/search', shop.searchItems);

/* GET the about page and course form. */
router.get('/about', function(req, res, next) {
  res.sendFile(path.resolve('views/about.html'));
});
router.get('/docs/form', function(req, res, next) {
  res.sendFile(path.resolve('public/docs/form.html'));
});

/* Paths for leaving the contact page and leaving feedback.*/
router.get('/contact', contact.getPage);
router.get('/feedback', contact.getFeedback);
router.post('/feedback', contact.giveFeedback)

/* Paths for buying an item.*/
router.get('/confirmation', purchase.getPage);
router.post('/confirmation', purchase.makePurchase);

/* Paths for getting a product. */
router.get('/shop/product/id/:id', product.getPage);
router.get('/item', product.getProduct)
// router.get('/product/id/:id', product.getProduct);

/* Paths for getting and posting a review. */
router.get('/reviews', review.getReview);
router.post('/reviews', review.postReview);

/* Paths for creating and retrieving a user. */
router.get('/user', user.getUser);
router.post('/create-user', user.createUser);

/* Paths for getting and manipulating a user account. */
router.get('/account', account.getAccount);
router.get('/password/:id', function(req, res, callback) {
  res.sendFile(path.resolve('views/change-password.html'));
});
router.post('/password/:id', account.changePassword);
router.get('/username', function(req, res, callback) {
  res.sendFile(path.resolve('views/change-username.html'));
});
router.post('/username', account.changeUsername);
router.get('/purchase_ids', account.getPurchases);

router.get('/hints/:page', hints);

module.exports = router;
