var fs = require("fs");
fs.readFileSync(process.argv[2])
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line !== "") {
      var missing = "";
      line = line.toLowerCase().replace(/\s/g, "");
      for (var i = 0; i < 26; i++) {
        var match = false;
        for (var idx = 0; idx < line.length; idx++) {
          if (line[idx] === String.fromCharCode(i + 97)) {
            match = true;
            break;
          }
        }
        if (!match) {
          missing += String.fromCharCode(i + 97);
        }
      }

      if (missing.length === 0) {
        console.log('NULL');
      } else {
        console.log(missing);

      }
    }
  });
