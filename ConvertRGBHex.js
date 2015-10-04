x = 16 * 15;
function toRGB(hex){
    var x = /^#[0-9a-f]{3,6}$/i;
    var rgbArr = [];
    var hexaDec = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "A":10,
        "B":11,
        "C":12,
        "D":13,
        "E":14,
        "F":15,
    };
    if(!(x.test(hex)) || hex.length < 7) return "Not a valid hex";
    for (var i = 2; i < hex.length; i+=2){
        var sixteensPlace = hexaDec[hex[i-1].toUpperCase()] * 16;
        var onesPlace = hexaDec[hex[i].toUpperCase()];
        rgbArr.push(sixteensPlace + onesPlace);
    }

    return ("rgb(" + rgbArr.join(", ") + ")");
}

var toHex = function(rgb){
    var numsArr = rgb.replace(/\(|\)/g, "").split(",");
    var hexaDec = {
        "0":0,
        "1":1,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "A":10,
        "B":11,
        "C":12,
        "D":13,
        "E":14,
        "F":15,
    };
    numsArr = numsArr.map(function(x){
        var sixteens, ones;
         sixteens = Math.floor(x / 16);
         ones = x % 16;
         for (var prop in hexaDec){
             if(hexaDec[prop] === sixteens) sixteens = prop;
             if(hexaDec[prop] === ones) ones = prop;
         }
        return ("" + sixteens + ones);
    });
    return  "#" + numsArr.join("");
}


console.log(toHex("(0,45,255)"));
console.log(toRGB("#FFFFFF"));
