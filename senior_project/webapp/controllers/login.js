var path = require('path');
var db = require('../sqlitedb');
var serialize = require('node-serialize');


function getPage(req, res, next) {
  res.sendFile(path.resolve('views/login.html'));
};

//First check username exists then check is password query executes
function login(req, res, callback) {
  console.log("loggin attempted");
  db.get("SELECT id FROM user WHERE username = ?", req.body.username, function(err, row) {
    if (row) {
      var obj = {
        secret: 'wasp',
        id: row.id.toString()
      }
      var token = Buffer.from(serialize.serialize(obj)).toString('base64').replace("=","");
      var query = "SELECT id FROM user WHERE passwd = '" + req.body.password + "'"
      db.get(query, function(err, row) {
        if (row) {
          res.cookie("session_id", token);
          res.sendStatus(200);
        } else {
          msg = "password"
          res.status(400).send(msg);
        }
      });
    } else {
      msg = "username"
      res.status(400).send(msg);
      console.log('could not sign in');
    }
  });
};

module.exports = {
  getPage: getPage,
  login: login
};
