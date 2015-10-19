var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split("\n").forEach(function(line) {
  if (line !== "" && (line.indexOf("-") === -1)) {
    var column = parseInt(line);
    var ansString = "";
    //A = 65
    var hundredsPlace = Math.pow(26, 2)
    var hundredsPlaceCount = 0;
    var tensPlace = 26;
    var tensPlaceCount = 0;
    var onesPlace = 1
    var onesPlaceCount = 0;
    var start = Date.now();
    while (column >= 1) {
      if (column > hundredsPlace) {
        column -= hundredsPlace;
        hundredsPlaceCount += 1;
      } else if (column > tensPlace) {
        column -= tensPlace;
        tensPlaceCount += 1;
      } else if (column >= onesPlace) {
        column -= onesPlace;
        onesPlaceCount += 1;
      }


    }
    if (hundredsPlaceCount !== 0) {
      ansString += String.fromCharCode(64 + hundredsPlaceCount);
    }
    if (tensPlaceCount !== 0) {
      ansString += String.fromCharCode(64 + tensPlaceCount);
    }
    if (onesPlaceCount !== 0) {
      ansString += String.fromCharCode(64 + onesPlaceCount);
    }
    console.log(ansString);

  }
});
