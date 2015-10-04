/*function processData(input) {
    //Enter your code here
    var input_split = input.split("\n");
    var n_int = input_split[0];
    var z_int = input_split[1].split(" ");
    for (i = 0; i < n_int; i++) {
        for (x = 0; x < n_int; x++){
            if (z_int[i] !== z_int[x]){
                return z_int[i];
            } 
            return z_int[i];
            }
        return z_int[i];
        }}*/
x = "11\n 0 0 1 1 2 2 98 45 45 65 65";
xsplit = x.split("\n");
n_int = parseInt(xsplit[0]);
var z_int = [];
var _cut = xsplit[1].trim();
var cut = _cut.split(" ");
console.log(cut);
for (i = 0; i < n_int; i++) {
    z_int[i] = parseInt(cut[i]);
    
}
console.log(z_int, n_int);
loneint = function()
{
    for (i = 0; i < n_int; i++) 
        {
        var bool = 0;
        for (x = 0; x < n_int; x++)
        {
            if (z_int[i] == z_int[x])
        {
                bool += true;
        }
            else 
            { 
                bool += false;
            }
           
        }
             if (bool == 1)
            { var ans = z_int[i];
            stdout = console.log(ans);
            }
        }
    
};
/*var n = 0;
n += false + true;
console.log(n += true);*/
console.log(loneint());