var fs = require("fs");
fs.readFileSync(process.argv[2])
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line !== "") {
      var points = {
        1: {},
        2: {},
        3: {},
        4: {}
      }
      line = line.replace(/[\(\)]/g, "").replace(/(\d)(,)(\d)/g, "$1 $3").replace(/(\d)(,)/g, "$1 ").split("  ");
      line.forEach(function(item, index, array) {
        points[index + 1]['x'] = item.split(" ")[0];
        points[index + 1]['y'] = item.split(" ")[1];

      });
      var count = 0;
      var prevDis;
      var distance = 0;
      for (var i = 1; i <= 3; i++) {
        for (var k = i + 1; k <= 4; k++) {
          // console.log(prevDis);
          // console.log(count);
          distance = Math.pow((points[k].x - points[i].x), 2) + Math.pow((points[k].y - points[i].y), 2);
          if (!prevDis || prevDis === distance) {
            count += 1;
            prevDis = distance;
          } else {
            prevDis = prevDis < distance ? prevDis : distance;
          }
        }
      }
      var ans = count === 4;
      console.log(ans);
    }
  })
