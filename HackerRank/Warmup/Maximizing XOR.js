var input = x.split("\n");
//Converts integer to binary
var xor = function(inp) {
var input = inp.sort();
var L = input[0];
var R = input[1];
var maxXORValue = null;
for (var l = L ; l < (R + 1); l++)
{
	//Converts first number to binary
	var l_bin = l.toString(2);

	for (var r = l; r < (R + 1); r++)
	{
		//Resets comparison value for next iteration
		var compare = "";

		//Converts second number to binary
		var r_bin = r.toString(2);

		//Creates binary values for comparison
		for ( var y = 0; y < r_bin.length; y++)
		{
		    console.log(r_bin[y]);
			if(r_bin[y] == l_bin[y])
			{
				compare += "0";
			} else
			{
				compare += "1";
			}
		}
		if (maxXORValue === null || parseInt(compare, 10) > maxXORValue) {
			maxXORValue = parseInt(compare, 10);
		}
	}
}



//Completed
var zero = "0"
var allXORValues = [];
var L = 10;
var R = 15;
var compare = '';
for (var i = L ; i < (R + 1); i++)
{
	//Converts first number to binary
	var i_bin = i.toString(2);

	for (var x = L; x < (R + 1); x++)
	{
		//Resets comparison value for next iteration
		var compare_ = compare;//.splice(0,compare.length);

		//Converts second number to binary
		var x_bin = x.toString(2);
		//Forces length of each binary string to be equal
		while(i_bin.length < x_bin.length) {i_bin = zero + i_bin}

		//Creates binary values for XOR
		for ( var y = 0; y < i_bin.length; y++)
		{
			if(i_bin[y] === x_bin[y])
			{
				compare_ += "0";
			} else
			{
				compare_ += "1";
			}
		}
		allXORValues.push(compare_);
	}
}
var allXORValues_int = [];
for (var a = 0; a < allXORValues.length; a++)
{
	//Converts all string binary values to int (e.g. "10" to 2)
	allXORValues_int[a] = parseInt(allXORValues[a], 2);
}
var allXORValues_int_sorted = allXORValues_int.sort();
var stdout = allXORValues_int_sorted[allXORValues_int_sorted.length-1];
console.log(stdout);
