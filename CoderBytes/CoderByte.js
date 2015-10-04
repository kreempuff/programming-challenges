// Using the JavaScript language, have the function OverlappingRectangles(strArr) read the strArr parameter being passed which will represent two rectangles on a Cartesian coordinate plane and will contain 8 coordinates with the first 4 making up rectangle 1 and the last 4 making up rectange 2. It will be in the following format: ["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"] Your program should determine the area of the space where the two rectangles overlap, and then output the number of times this overlapping region can fit into the first rectangle. For the above example, the overlapping region makes up a rectangle of area 2, and the first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program should output 2. The coordinates will all be integers. If there's no overlap between the two rectangles return 0.

// Use the Parameter Testing feature in the box below to test your code with different arguments.
//To find area of small reactangle get abs val of x spaces and y spaces then multiply

 var data_input = "(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)";
 var answer = 6;
 var new_in = data_input.split("),(");
 all_data_pts = new_in.map(function(x){
     x = x.replace(/[\(\)]/, "");
     x = x.split(",");
     return x;
 }).reduce(function(x,y){
     return x.concat(y);
 });
 console.log(all_data_pts[3]);
 var rect1 = {
     x1: Number(all_data_pts[0]),
     y1: Number(all_data_pts[1]),
     x2: Number(all_data_pts[2]),
     y2: Number(all_data_pts[3]),
     x3: Number(all_data_pts[4]),
     y3: Number(all_data_pts[5]),
     x4: Number(all_data_pts[6]),
     y4: Number(all_data_pts[7])
 };
 var rect2 = {
      x1: Number(all_data_pts[8]),
     y1:Number(all_data_pts[9]),
     x2:Number(all_data_pts[10]),
     y2:Number(all_data_pts[11]),
     x3:Number(all_data_pts[12]),
     y3:Number(all_data_pts[13]),
     x4:Number(all_data_pts[14]),
     y4:Number(all_data_pts[15])
 };
 console.log(rect1, rect2)
