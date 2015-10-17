(function() {
  var max = 1000;
  var largestPrime;
  var start = 2;
  while (start < max) {
    for (var x = start - 1; x > 0; x--) {
      if (x === 1) {
        var checkPali = start.toString().split('');
        if (checkPali.join() === checkPali.reverse().join()) {
          if (!largestPrime || start > largestPrime) {
            largestPrime = start;
            break;
          }
        }
      } else if (start % x === 0) {
        break;
      }
    }


    start += 1;
  }
  console.log(largestPrime);
})();
