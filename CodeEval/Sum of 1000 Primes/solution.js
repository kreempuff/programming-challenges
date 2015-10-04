function primeChecker(number) {
  if (number <= 0) {
    return false;
  }
  if (number === 1) {
    return false;
  }
  if (number === 2 || number === 3) {
    return true;
  }
  for (var i = number - 1; true; i--) {
    if (number % i === 0 && i > 1) {
      return false;
    }
    if (i <= 1) {
      break;
    }
  }

  return true;
}


var primeArr = [];

for (var x = 1; primeArr.length < 1000; x++) {
  if (primeChecker(x)) {
    primeArr.push(x);
  }
}

primeArr = primeArr.reduce(function(a, b) {
  return a + b;
});
console.log(primeArr);