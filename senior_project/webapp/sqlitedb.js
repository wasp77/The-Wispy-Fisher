const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('database.sqlite', (err) => {
  if (err) {
    console.log("Problem accessing database" + err)
  }
})

module.exports=db;
