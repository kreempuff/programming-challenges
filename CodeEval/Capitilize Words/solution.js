var fs = require("fs");
fs.readFileSync(process.argv[2])
  .toString()
  .split('\n')
  .forEach(function(line) {
    if (line !== "") {
      // console.log(line);
      line = line.split(" ");
      line = line.map(function(word) {
        word = word.split("");
        word[0] = word[0].toUpperCase();
        word = word.join("");
        return word;
      });
      console.log(line.join(" "));
    }
  });