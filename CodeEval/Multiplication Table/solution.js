(function () {
  for (var outer = 1; outer <= 12; outer++) {
    var line = "";
    for (var inner = 1; inner <= 12; inner++) {
    line += (outer * inner).toString();
    if(inner !== 12) line += "\t";
    }
    console.log(line.trim());
  }
})();
