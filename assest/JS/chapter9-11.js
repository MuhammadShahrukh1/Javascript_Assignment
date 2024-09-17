
//Question 1 
function cityName() {
    var cityName = prompt('Enter Your City Name')
    cityName = cityName.toLowerCase();
    if (cityName === 'karachi') {
        alert("WelCome to the city of light.");
    }
    else {
        alert('Your are not belongs to karachi');
    }
}

//Question 2
function gender() {
    var gender = prompt('Enter Your Gender');
    gender = gender.toLowerCase();
    if (gender === 'male') {
        alert('Good Morning! Sir.');
    }
    else if (gender === 'female') {
        alert("Good Morning! Ma'am.");
    }
    else {
        alert("Write correct Gender");
    }
}

//Question 4

function carFuel() {
    var carFuel = Number(prompt("Enter your remaining fuel of your car (in liter)"));
    if (carFuel < 0.25) {
        alert("Please refill the fuel in your car")
    }
}

//Question 10

function temperature() {
    var temperature = Number(prompt("Enter Environment Temperature"));
    if (temperature > 40) {
        alert("It is too hot outside.")
    }
    else if (temperature > 30 && temperature <= 40) {
        alert("The weather of today is normal.")
    }
    else if (temperature > 20 && temperature <= 30) {
        alert("Today's weather is cool")
    }
    else {
        alert("OMG! Today's weather is soo cool.")
    }
}

//Question 11
function mathOperations() {
    var firstNumber = Number(prompt("Enter first Number"));
    var secondNumber = Number(prompt("Enter Second Number"));
    var operation = prompt("Enter Opeartion you want to perform");
    var result;
    if (operation === "+") {
        result = firstNumber + secondNumber;
    }
    else if (operation === "-") {
        result = firstNumber - secondNumber;
    }
    else if (operation === "*" || operation === "x" || operation === "X") {
        result = firstNumber * secondNumber;
    }
    else if (operation === "/") {
        result = firstNumber / secondNumber;
    }
    else if (operation === "%") {
        result = firstNumber % secondNumber;
    }
    else {
        alert("Please! Enter valid opeartions like (+, -, *, /)")
    }
    document.getElementById("task_result").innerHTML = `<h2>Answer of Question 11</h2>The result of ${firstNumber} ${operation} ${secondNumber} is ${result}<br> `;
}


//Question 3

function trafficLight() {
    var trafficLight = prompt("Enter Traffic light color");
    trafficLight = trafficLight.toLowerCase();
    if (trafficLight === 'red') {
        alert("Vehical must stop")
    }
    else if (trafficLight === "yellow") {
        alert("Ready to move")
    }
    else if (trafficLight === "green") {
        alert("Now Move")
    }
    else {
        alert("Please! write color of traffic light");
    }
}


//Question 5

function question5() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true")
    }

    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true")
    }

    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true")
    }

    if (c === 13) {
        alert("Condition 2 is true")
    }

    if (++c < 14) {
        alert("Condition 3 is true")
    }

    if (c === 14) {
        alert("Condition 4 is ture")
    }

    var materialCost = 20000;
    var labourCost = 2000;
    var totalCost = materialCost + labourCost;
    if (totalCost === materialCost + labourCost) {
        alert("The cost equals")
    }

    if (true) {
        alert("True")
    }
    if (flase) {
        alert("false")
    }

    if ("car" < "cat") {
        alert("car is smaller than cat")
    }
}


//Question 6

function markSheet() {
    var subjectOne = Number(prompt("Enter Marks Subject of English"));
    var subjectTwo = Number(prompt("Enter Marks subject of Math"));
    var subjectThee = Number(prompt("Enter Marks Subject of Urdu"));
    var totalMark = Number(prompt("Enter Total marks"));
    var obtainedMark = subjectOne + subjectTwo + subjectThee;
    var percentage = (obtainedMark / totalMark) * 100;
    var grade, remarks;
    if (percentage >= 80) {
        grade = "A-One";
        remarks = "Excellent";
    }
    else if (percentage >= 70 && percentage < 80) {
        grade = "A";
        remarks = "Good"
    }
    else if (percentage >= 70 && percentage < 70) {
        grade = "B";
        remarks = "Need To Improve";
    }
    else {
        grade = "Fail";
        remarks = "Sorry";
    }
    document.getElementById("task_result").innerHTML = (`<h1>Mark Sheet</h1>
    <br>
    Total Marks : ${totalMark}<br>
    Obtained Marks : ${obtainedMark}<br>
    Percantage : ${percentage}%<br>
    Grade : ${grade}<br>
    Remarks : ${remarks}<br>`);
}

//Question 7

function secretNumber() {
    var secretNumber = 6;
    var guessNumber = Number(prompt("Gues a Number between 1 to 10"));
    if (guessNumber === secretNumber) {
        alert("Bingo! Correct Answer");
    }
    else if (guessNumber === --secretNumber) {
        alert("Close Enough to correct answer")
    }
    else if (--guessNumber === ++secretNumber) {
        alert("Close Enough to correct answer")
    }
    else {
        alert("Try Again")
    }
}

//Question 8

function checkNumberDivisiableByThree() {
    var checkNumber = Number(prompt("Enter a Number\nCheck Number is divisiable by 3 or not"));
    if (checkNumber % 3 === 0) {
        swal.fire({
            title: "Congrates",
            text: checkNumber + " Is divisiable By 3",
            icon: "success"
        });
    }
    else {
        swal.fire({
            title: "opps! Sorry",
            text: `${checkNumber} is not divisiable by 3`,
            icon: "error"
        })
    };
}

//Question 9

function evenOrOddNumber() {
    var evenOrOdd = Number(prompt("Identify a number is even or odd"));
    if (evenOrOdd % 2 === 0) {
        swal.fire({
            title: "Weldone",
            text: `your given number ${evenOrOdd} is Even Number`,
            icon: "success"
        })
    }
    else {
        swal.fire({
            title: "Good",
            text: `Your given number ${evenOrOdd} is Odd Number`,
            icon: "success"
        })
    }
}