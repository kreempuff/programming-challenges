/* Problem Statement

The Utopian Tree goes through 2 cycles of growth every year. The first growth cycle occurs during the spring, when it doubles in height. The second growth cycle occurs during the summer, when its height increases by 1 meter.

Now, a new Utopian Tree sapling is planted at the onset of spring. Its height is 1 meter. Can you find the height of the tree after N growth cycles?

Input Format

The first line contains an integer, T, the number of test cases. 
T lines follow; each line contains an integer, N, that denotes the number of cycles for that test case.

Constraints 
1≤T≤10 
0≤N≤60
Output Format

For each test case, print the height of the Utopian Tree after N cycles. Each line thus has to contain a single integer, only.*/

'use strict';


function processData(input) {
var parse_fun = function (s) { return parseInt(s, 10); };

var lines = input.split('\n');
var T = parse_fun(lines.shift());

var data = lines.splice(0, T).map(parse_fun);

// logic here: My code starts here!
    var ans = [];
    for (var i = 0; i < T; i++) 
    {
        //Resets height for each cycle entry
        var ht = 0;
        if (data[i] === 0)
        {
            ht += 1;
        } else 
        {
            //Data[i]+1 to loop through all N cycles from 0 to N instead of 0 to N-1
            for (var x = 0; x < data[i] + 1; x++)
            {
                if (x === 0)
                {
                    ht += 1;
                }
                else if (x % 2 === 0 && x !== 0)
                {
                    ht += 1;
                }
                else
                {
                    ht *= 2;
                }

            }
        }
        //Adds latest iteration of entire loop to array: ans
        ans.push(ht);	
    }
    var array = "";
    for (i = 0; i < ans.length; i++)
    {
        array += (String(ans[i])+ "\n");
    }
    var stdout = console.log(array.trim());
};
// My code stops here!
process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
