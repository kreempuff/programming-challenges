var fs = require("fs");
fs.readFileSync(process.argv[2])
	.toString()
	.split("\n")
	.forEach(function(line){
		if(line!==""){
      var newLine = "";
      for (var i = 0; i < line.length; i++) {
        newLine += line[i].toLowerCase();
      }
		console.log(newLine)
	}
})
