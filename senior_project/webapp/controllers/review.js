var path = require('path');
var db = require('../sqlitedb');

//Get a review based on an item ID
function getReview(req, res, next) {
  db.all("SELECT content FROM review WHERE id = ?", req.query.id, function(err, rows) {
    if (err) {
      console.log("could not retrieve reviews: " + err)
    } else {
      res.status(200).send(rows);
    }
  });
};

//Insert new review into review table
function postReview(req, res, callback) {
  console.log("review attempted");
  db.run("INSERT INTO review VALUES (?,?)", [req.body.id, req.body.content], function(err) {
    if (err) {
      res.sendStatus(400);
      console.log('could not save review: ' + err);
    } else {
      console.log('successfully saved review');
      res.sendStatus(200);
    }
  });
};

module.exports = {
  getReview: getReview,
  postReview: postReview
};
