var fs = require('fs');
fs.readFileSync(process.argv[2])
  .toString()
  .split('\n')
  .forEach(function(line) {
    if (line !== "") {
      var numArr = line.split(",");
      numArr = numArr.map(function(num) {
        return parseInt(num);
      })
      while (numArr[0] > numArr[1]) {
        numArr[0] -= numArr[1];
      }
      console.log(numArr[0]);
    }
  })