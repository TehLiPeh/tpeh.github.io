function scriptTest() {
    alert("Hey, my script is running!");
}

function displayDateTime() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDay();
    let date = currentDate.getDate();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    let dayArray = new Array ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");
    let monthArray = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    
    let displayDateTime = "Today is "+ hours + ":" + minutes +  " on "+ dayArray[day] + ", " + date + " " +  monthArray[month] + ", " + year;
    document.getElementById("date").innerHTML = displayDateTime;
}

function welcome() {
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;

    let message = "The King Akita welcomes you, " + name + "! We're glad you are feeling " + feeling + ".";
    document.getElementById("displayMessage").innerHTML = message;
}

function one() {
    let randomNum = Math.floor(Math.random()*10) + 1;
    let guessedNumber = parseInt(prompt("Guess the Correct Number from 1 - 10"));

    if (randomNum == guessedNumber) {
        alert("Great Job, you guessed it!");
    }
    else {
        alert("Try again. Spam one number is you are stuck.");
        one();
    }
}

function two() {
    let question = parseInt(prompt("Sarah is twice as old as her youngest brother. If the difference between their ages is 15 years. How old is her youngest brother?"));
    
    if (question == 15 ) {
        alert("Correct!");
    }
    else {
        alert("Incorrect!");
        two();
    }
}

function three() {
    let num1 = prompt("Enter a number");
    let num2 = prompt("Enter another number");
    let num3 = prompt("Enter another number");
    
    let total = parseInt(num1) + parseInt(num2) + parseInt(num3);
    let avg = total / 3;
    alert("The average number you have entered is " + avg);
}

function four() {
    let riddlePrompt = prompt("What has a head and a tail, but no body?");

    if (riddlePrompt == "coin" || riddlePrompt == "Coin" || riddlePrompt == "Coins" || riddlePrompt == "coins") {
        alert("Correct!");
    }
    else {
        alert("Incorrect!");
        four()
    }
}

function five() {
    let string = "Wow, You made it! Feel free to explore more of my webpages.";
    let array = string.split("");

    function animate() {
        if (array.length > 0 ) 
        document.getElementById("lastMessage").innerHTML += array.shift(); 
        clearTimeout(run); 
        var run = setTimeout(animate, 50);
    };
    animate();
}
//https://codepen.io/LaithHaleem/pen/wzyMBd
//I wanted to try something cool but I needed help