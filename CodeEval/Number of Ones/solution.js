var fs = require("fs");
fs.readFileSync(process.argv[2])
	.toString()
	.split("\n")
	.forEach(function(line){
		if(line!==""){
      var count = 0;
		line = parseInt(line).toString(2);
    for (var i = 0; i < line.length; i++) {
      if(line[i] === "1"){
        count++;
      }
    }
    console.log(count);
	}
})
