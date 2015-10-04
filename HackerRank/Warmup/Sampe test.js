var f_int = function (input) 
{
    array = input.split("\n");
    n_int = array[0];
    test = array[1].split(" ");
    alldif = [];
    for (i = 1; i < n_int.length; i++)
    {
    	alldif[i-1] = test[i]-test[i-1];
    }
    for (y = 1; y < alldif.length; y++)
    {
    	if (alldif[y] == alldif[y-1])
    	{
    		dif = alldif[y];
    	} else
    	{
    		sub = alldif[y]-dif;
    		stdout = console.log(test[y-1]-sub);
    	}
    }

    
}