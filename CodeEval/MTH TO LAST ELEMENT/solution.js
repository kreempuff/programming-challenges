var fs = require('fs');
fs.readFileSync(process.argv[2])
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line !== "") {
      var elementToFind = line.split(" ");
      elementToFind = parseInt(elementToFind[elementToFind.length - 1]);
      newArr = line.split(" ").splice(0, (line.split(" ").length - 1));
      if (newArr.length < elementToFind) return;
      console.log(newArr[newArr.length - elementToFind]);
    }
  });