var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split("\n").forEach(function(line) {
  if (line !== "") {
    line = line.split(" ").map(function(item) {
      return parseFloat(item, 10);
    });
    line = line.sort(function(a, b) {
      return (a - b);
    });

    line = line.join(" ");
    console.log(line);

  }
});
