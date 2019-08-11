var path = require('path');
var db = require('../sqlitedb');

function getPage(req, res, next) {
  res.sendFile(path.resolve('views/shop.html'));
};

//Get all the items from the item table
function getItems(req, res, callback) {
  db.all("SELECT * FROM item", function(err, rows) {
    if (rows) {
      res.status(200).send(rows);
    } else {
      console.log("Couldn't get items")
    }
  });
};

//Query item table using like to find any iteration of the search string
function searchItems(req, res, callback) {
  var query = "SELECT * FROM item WHERE name LIKE '%" + req.query.name + "%'";
  console.log(query);
  db.all(query, function(err, rows) {
    if (rows) {
      console.log(rows);
      res.status(200).send(rows);
    } else {
      res.status(400).send(err.stack);
    }
  });
};

module.exports = {
  getPage: getPage,
  getItems: getItems,
  searchItems: searchItems
};
