//Dropdown values
function getEmployees() {
    var select = document.getElementById("dropdown");
    var options = [
        'Ryan Jackson', 'Marian Rivera', 'Tony Watson', 'Peter Clark', 'Amy Watson', 'Wong Wei', 'Ryu Jack'
    ];
    
    for (var i = 0; i < options.length; i++) {
        var val = options[i];
        var element = document.createElement("option");
        element.textContent = val;
        element.value = val;
        select.appendChild(element);
    }
}

function addSalary () {
    var addedSal = "";

}






//https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array