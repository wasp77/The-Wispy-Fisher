var path = require('path');
var db = require('../sqlitedb');
var serialize = require('node-serialize');


function getPage(req, res, callback) {
  res.sendFile(path.resolve('views/purchase-confirmation.html'));
};

//Check that the csrf token is a certain length then insert into the purchase table
function makePurchase(req, res, callback) {
  if (req.body._csrf && req.body._csrf.length == 19) {
    if (req.cookies.session_id) {
      var session = Buffer.from(req.cookies.session_id,'base64').toString('ascii');
      var obj = serialize.unserialize(session);
      db.run("INSERT INTO purchases (user_id,item_id) VALUES (?,?)", [obj.id,req.body.id], function(err) {
            if (err) {
              console.log(err);
              res.sendStatus(500);
            } else {
              console.log("Added purchase");
              res.sendStatus(200);
            }
      });
    } else {
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(400);
  }

};

module.exports = {
  getPage: getPage,
  makePurchase: makePurchase
};
