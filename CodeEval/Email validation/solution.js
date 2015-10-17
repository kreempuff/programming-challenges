var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split("\n").forEach(function(line) {
  if (line !== "" && line !== "TEST\r") {
    var emailRegex = /\w+@\w+\.\w+/;
    var x = emailRegex.test(line);
    console.log(line);
    console.log(x.toString());
  }
})
