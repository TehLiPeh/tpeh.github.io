var person = [];
var salaries = [];

function addSalary() {
    let num = parseFloat(document.getElementById("salary-value").value);

    if (num >= 0) {
        num = parseFloat(num);
        salaries.push(num);
        document.getElementById("salary-value").value;
        //Test
        alert(person + " salary is " + num);
    }
    else {
        alert("Please enter a valid salary value");
    }
}


function displayResult() {
    //Find the average
    let total = 0;
    let sum = 0;
    for (i = 0; i < salaries.length; i++) {
        sum += salaries[i];
    }
    avg = sum / salaries.length;

    //Find the Max 
    //const max = Math.max();
    let result = "The max salary is " + avg;
    // for (i = 0; i < salaries.length; i++) {
    //     if (avg == max) {
    //         document.getElementById("max-salary").innerHTML = result;
    //     }
    // }
}

function displaySalary() {

}

//Create dropdown
function getEmployees() {
    let select = document.getElementById("dropdown");
    let person = [
        'Ryan Jackson', 'Marian Rivera', 'Tony Watson', 'Peter Clark', 'Amy Watson', 'Wong Wei', 'Ryu Jack'
    ];
    
    for (var i = 0; i < person.length; i++) {
        let names = person[i];
        const createOption = document.createElement("option");
        createOption.textContent = names;
        createOption.names = names;
        select.appendChild(createOption);
    }
}
//https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array