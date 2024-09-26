function character() {
    var character = prompt('Enter any character or number to identify given input is uppercase or lowercase');
    var code = character.charCodeAt(0);
    console.log(code)
    if (code >= 65 && code <= 90) {
        swal.fire({
            title: `${character}`,
            text: "The Given Input is UpperCase",
            icon: "success"
        })
    }
    else if (code >= 97 && code <= 122) {
        swal.fire({
            title: `${character}`,
            text: "The given input is LowerCase",
            icon: "success"
        })
    }
    else if (code >= 48 && code <= 57) {
        swal.fire({
            title: `${character}`,
            text: "The given input is number",
            icon: "succcess"
        })
    }
    else {
        swal.fire({
            text: "Please enter a string or a number"
        })
    }
}

function largeNumber() {
    var firstNumber = Number(prompt("Enter first Number"));
    var secondNumber = Number(prompt("Enter Second Number"));
    if (firstNumber > secondNumber) {
        swal.fire({
            title: `${firstNumber}`,
            text: `is Greater Than ${secondNumber}`,
            icon: "success"
        })
    }
    else if (secondNumber > firstNumber) {
        swal.fire({
            title: `${secondNumber}`,
            text: `is Greater than ${firstNumber}`,
            icon: "success"
        })
    }
    else if (firstNumber === secondNumber) {
        swal.fire({
            title: "Bingo!",
            text: "Both Numbers are Equal",
            icon: "success"
        })
    }
    else {
        swal.fire({
            title: "Enter a valid number"
        })
    }
}

function positiveOrNegative() {
    var checkNumber = Number(prompt("Enter Any Number"));
    if (checkNumber > 0) {
        swal.fire({
            title: `${checkNumber}`,
            text: "Positive Number",
            icon: "success"
        })
    }
    else if (checkNumber < 0) {
        swal.fire({
            title: `${checkNumber}`,
            text: "Negative Number",
            icon: "success"
        })
    }
    else if (checkNumber === 0) {
        swal.fire({
            title: `You Enter ${checkNumber}`,
            icon: "warning"
        })
    }
    else {
        swal.fire({
            text: "Please enter only Number"
        })
    }
}

function vowels() {
    var char = prompt("Enter any character");
    if (char === "a" || char === "A" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U" || char === "e" || char === "E") {
        swal.fire({
            title: `True`,
            icon: "success"
        })
    }
    else {
        swal.fire({
            title: `False`,
            icon: "error"
        })
    }
}

function password() {
    var correctPassword = "smitbatch12";
    var password = prompt("Enter Your password");
    if (password === "") {
        swal.fire({
            text: "Please Enter a password!",
            icon: "question"
        })
    }
    else if (password === correctPassword) {
        swal.fire({
            title: "Correct!",
            icon: "success"
        })
    }
    else {
        swal.fire({
            title: "Incorrect! password",
            icon: "error"
        })
    }
}

function question6() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        swal.fire({
            title : `${greeting}`
        })
    }
    else {
        greeting = "Good evening";
        swal.fire({
            title : `${greeting}`
        })
    }
}

function takeTime(){
    var time = prompt("What is the time\nEnter in 24 Hours format");
    if(time >="00:00" && time < "12:00"){
        swal.fire({
            title : "Good Morning"
        })
    }
    else if(time >="12:00" && time < "17:00"){
        swal.fire({
            title : "Good AfterNoon"
        })
    }
    else if(time >= "17:00" && time < "21:00"){
        swal.fire({
            title : "Good Evening"
        })
    }
    else if(time >= "21:00" && time <= "23:59"){
        swal.fire({
            title : "Good Night"
        })
    }
    else{
        swal.fire({
            title : "Enter valid Time"
        })
    }
}