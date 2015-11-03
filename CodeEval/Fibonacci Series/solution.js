function Fibonacci(nth) {
  nth = parseInt(nth);
  if (nth === 0) return 0;
  if (nth === 1) return 1;
  else {
    return Fibonacci(nth - 1) + Fibonacci(nth - 2)
  }
}

var fs = require("fs");
fs.readFileSync(process.argv[2])
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line !== "") {
      console.log(Fibonacci(line));

    }
  });
