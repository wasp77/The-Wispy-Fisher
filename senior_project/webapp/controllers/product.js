var path = require('path');
var db = require('../sqlitedb');

function getPage(req, res, next) {
  res.sendFile(path.resolve('views/product.html'));
};

//Return a product based on its ID
function getProduct(req, res, next) {
  db.get("SELECT * FROM item WHERE id = ?", req.query.id, function(err, row) {
    if (err) {
      console.log("could not retrieve product: " + err);
      sendStatus(500);
    } else {
      res.status(200).send(row);
    }
  });
};

module.exports = {
  getPage: getPage,
  getProduct: getProduct
};
