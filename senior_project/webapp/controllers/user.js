var path = require('path');
var db = require('../sqlitedb');
var serialize = require('node-serialize');

//Pull from user table based in ID in session token
function getUser(req, res, next) {
  var session = Buffer.from(req.cookies.session_id,'base64').toString('ascii');
  var obj = serialize.unserialize(session);
  db.get("SELECT * FROM user WHERE id=?", obj.id, function(err, row) {
    if (row) {
      res.status(200).send(row);
    } else {
      console.log("failed retrieving the user");
      res.sendStatus(500);
    }
  });
};

//Insert new entry into user table
function createUser(req, res, callback) {
  db.get("SELECT id FROM user WHERE username = ?", req.body.username, function(err, row) {
    if (row) {
      res.sendStatus(400);
    } else {
      db.run("INSERT INTO user (username,passwd) VALUES (?,?)", [req.body.username, req.body.password], function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("added user");
          res.sendStatus(200);
        }
      });
    }
  });
};

module.exports = {
  getUser: getUser,
  createUser: createUser
};
