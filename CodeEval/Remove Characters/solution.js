var fs = require("fs");
fs.readFileSync(process.argv[2])
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line !== "") {
      var sentenceAsArray = line.split(",")[0].replace(/\r/g, "");
      var lettersToRemove = line.split(",")[1].replace(/[\W]/g, "");
      var reg = new RegExp("[" + lettersToRemove + "]", "gi");

      console.log(sentenceAsArray.replace(reg, "").trim());
    }
  })
