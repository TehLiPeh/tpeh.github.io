function scriptTest() {
    alert("Hey, my script is running!");
}

function displayDateTime() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var day = currentDate.getDay();
    var date = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    var dayArray = new Array ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
    var monthArray = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    
    let displayDateTime = "Today is "+ hours + ":" + minutes +  " on "+ dayArray[day] + ", " + date + " " +  monthArray[month] + ", " + year;
    document.getElementById("date").innerHTML = displayDateTime;
}

function welcome() {
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;

    let message = "The King Akita welcomes you, " + name + "! We're glad you are doing " + feeling + ".";
    document.getElementById("displayMessage").innerHTML = message;
}


