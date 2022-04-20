function polygons(numSides) {
    numSides = Math.round(Math.abs(numSides));
    switch (numSides) {
        case 1: 
            return "Henagon";
            //break;

        case 2: 
            return "Digon";
            //break;

        case 3: 
            return "Trigon";
            //break;

        case 4: 
            return "Tetragon";
            //break;

        case 5: 
            return "Pentagon";
            //break;

        case 6: 
            return "Hexagon";
            //break;

        case 7: 
            return "Heptagon";
            //break;

        case 8: 
            return "Octagon";
            //break;

        case 9: 
            return "Nonagon";
            //break;

        case 10: 
            return "Decagon";
            //break;

        default:
            break;
    }
}


//function test() {
///    var num = prompt("Enter a number from 1-10.");
 //   alert("Num is " + numSides);
//}


function getPrompt() {
    let num = parseInt(prompt("Enter a number from 1-10."));
    let numEntered= validateNum(num);
    let result = polygons(numEntered);
    if (!result) {
        return;
    }
    alert(result);
}

function validateNum(num) {
    if (num <= 10 && num > 0) {
        return (num);
    }
    else {
        alert("You need to enter a number from 1-10.");
        getPrompt();
    }
}
