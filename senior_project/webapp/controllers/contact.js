var path = require('path');
var db = require('../sqlitedb');

function getPage(req, res, next) {
  res.sendFile(path.resolve('views/contact.html'));
};

//Get all feedback from the feedback table
function getFeedback(req, res, next) {
  db.all("SELECT * FROM feedback", function(err, rows) {
    if (err) {
      console.log("could not retrieve feedback: " + err);
      sendStatus(500);
    } else {
      res.status(200).send(rows);
    }
  });
};

//Insert new feedback into the feedback table
function giveFeedback(req, res, next) {
  db.run("INSERT INTO feedback (name,msg) VALUES (?,?)", [req.body.username,req.body.feedback], function(err) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log("Added Feedback");
          res.sendStatus(200);
        }
  });
};

module.exports = {
  getPage: getPage,
  getFeedback: getFeedback,
  giveFeedback: giveFeedback
};
