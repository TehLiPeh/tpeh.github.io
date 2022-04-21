var person = [];
var salaries = [];

function addSalary() {
    let num = parseInt(document.getElementById("salary-value").value);

    if (num >= 0) {
        num = parseInt(num);
        salaries.push(num);
        document.getElementById("salary-value").value;
        alert(num);
    }
    else {
        alert("Please enter a valid salary value");
    }
}


function displayResult() {
    //Find the average
    var avg = 0;
    var sum = 0;
    for (i = 0; i < salaries.length; i++) {
        sum += salaries[i];
    }
    avg = sum / salaries.length;

    //Find the Max 
    const max = Math.max();
    let result = "The max score is " + avg;
    for (i = 0; i < salaries.length; i++) {
        if (avg == max) {
            document.getElementById("max-result").innerHTML = result;
        }
    }
}

function displaySalary() {

}

//Create dropdown
function getEmployees() {
    var select = document.getElementById("dropdown");
    var options = [
        'Ryan Jackson', 'Marian Rivera', 'Tony Watson', 'Peter Clark', 'Amy Watson', 'Wong Wei', 'Ryu Jack'
    ];
    
    for (var i = 0; i < options.length; i++) {
        var names = options[i];
        const createOption = document.createElement("option");
        createOption.textContent = names;
        createOption.names = names;
        select.appendChild(createOption);
    }
}
//https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array