var Palindromy = function(numberString, count) {
  if (count > 100) {
    // console.log(numberString);
    return;
  }
  countToReturn = count || 0;
  var numberForwards = parseInt(numberString);
  var numberBackwards = parseInt(numberString.split("").reverse().join(""));
  if (numberForwards === numberBackwards) {
    var answer = countToReturn + " " + numberForwards;
    console.log(answer);
    // return answer;
  } else {
    numAdded = numberForwards + numberBackwards;
    countToReturn += 1;
    Palindromy(numAdded.toString(), countToReturn);
  }
}
var fs = require('fs');
fs.readFileSync(process.argv[2])
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line !== "") {
      Palindromy(line);
    }
  })

//Palindromy returns undefined for some reason. Even though it console.logs <answer> it won't return it as a value