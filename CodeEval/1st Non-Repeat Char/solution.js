var fs = require("fs");
fs.readFileSync(process.argv[2])
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line !== "") {
      var count;
      for (var i = 0; i < line.length; i++) {
        count = 0;
        for (var j = 0; j < line.length; j++) {
          if (line[i] === line[j]) count++;

          if (count === 1 && j === (line.length - 1)) {
            return console.log(line[i]);

          }
          // if(j >= (line.length - 1)) return console.log(line[i]);
        }
      }

    }
  })
