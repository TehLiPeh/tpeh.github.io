function polygons(numSides) {
    numSides = Math.round(Math.abs(numSides));
    switch (numSides) {
        case 1: 
            return "Henagon";

        case 2: 
            return "Digon";

        case 3: 
            return "Trigon";

        case 4: 
            return "Tetragon";

        case 5: 
            return "Pentagon";

        case 6: 
            return "Hexagon";

        case 7: 
            return "Heptagon";

        case 8: 
            return "Octagon";

        case 9: 
            return "Nonagon";

        case 10: 
            return "Decagon";

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
    
    //Ends the getPrompt() after it runs
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
