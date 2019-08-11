var path = require('path');
var db = require('../sqlitedb');
var serialize = require('node-serialize');

function getAccount(req, res, callback) {
  if (req.cookies.session_id) {
    var session = Buffer.from(req.cookies.session_id,'base64').toString('ascii');
    var obj = serialize.unserialize(session);
    res.sendFile(path.resolve('views/account.html'));
  } else {
    res.sendFile(path.resolve('views/login.html'));
  }
};

//Decode base64 then use this ID to change password in user table
function changePassword(req, res, callback) {
  var b = new Buffer(req.params.id, 'base64')
  var s = b.toString();
  db.run("UPDATE user SET passwd = ? WHERE id = ?", [req.body.password, s], function(err) {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
};

//Use ID in session token to change username in the user table
function changeUsername(req, res, callback) {
  var session = Buffer.from(req.cookies.session_id,'base64').toString('ascii');
  var obj = serialize.unserialize(session);
  db.run("UPDATE user SET username = ? WHERE id = ?", [req.body.username, obj.id], function(err) {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
};

//Base64 decode and get ID from session token and use the ID to get all purchases from purchase table
function getPurchases(req, res, next) {
  var session = Buffer.from(req.cookies.session_id,'base64').toString('ascii');
  var obj = serialize.unserialize(session);
  db.all("SELECT item_id FROM purchases WHERE user_id=?", obj.id, function(err, rows) {
    if (rows) {
      res.status(200).send(rows);
    } else {
      console.log("problem accessing purchases");
      res.sendStatus(500);
    }
  });
};

module.exports = {
  getAccount: getAccount,
  changePassword: changePassword,
  changeUsername: changeUsername,
  getPurchases: getPurchases
};
