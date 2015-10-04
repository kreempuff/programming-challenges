
phrase = input.split("");
function pang(phrase) {
    var lower_phrase = phrase.toLowerCase();
    var hits = 0;
    var prev_letters = [];
    for (var i = 0; i < phrase.length; i++) {
        switch(lower_phrase[i]) {
            case "a":
            case "b":
            case "c":
            case "d":
            case "e":
            case "f":
            case "e":
            case "f":
            case "g":
            case "h":
            case "i":
            case "j":
            case "k":
            case "l":
            case "m":
            case "n":
            case "o":
            case "p":
            case "q":
            case "r":
            case "s":
            case "t":
            case "u":
            case "v":
            case "w":
            case "x":
            case "y":
            case "z":
                // for (var count = 0; count <= prev_letters.length; count++) {
                //     if (prev_letters.length === 0 || prev_letters[count] == lower_phrase[i]) {
                //         hits += 1; 
                //         prev_letters.push(lower_phrase[i]);
                //     }     
                // } 
                console.log(lower_phrase[i]);
                break;           
            case " ": break;
            case "": break;

        }
    }
    console.log(hits);
}
pang("ZZZ");



