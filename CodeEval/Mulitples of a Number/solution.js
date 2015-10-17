var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
  if (line !== "" && line[0] !== '-') {
    var x = parseInt(line.split(',')[0]),
      n = parseInt(line.split(',')[1]);
    while (n < x) {
      if (x > n) {
        n *= 2;
      }
    }
    console.log(n);
  }
});
