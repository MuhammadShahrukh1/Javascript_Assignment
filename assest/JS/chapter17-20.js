function task1() {
    var empty = [[], [], []];
    console.log(empty);
    swal.fire(
        `Multi Dimensional Array\n[[],[],[]]`
    )
}

function task2() {
    var multiDimensional = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
    document.getElementById('task_result').innerHTML += (`<h1>Answer Of Question 2</h1><hr>`)
    for (var i = 0; i < multiDimensional.length; i++) {
        for (var j = 0; j < multiDimensional[i].length; j++) {
            document.getElementById('task_result').innerHTML += (`
                <h5 class="d-inline-block me-2">${multiDimensional[i][j]}</h5>`)
        }
        document.getElementById('task_result').innerHTML += (`<br />`)
    }
}

function task3() {
    document.getElementById("task_result").innerHTML += (`
        <hr>
        <h1>Answer Of Question 3</h1>
        <hr>`)
    for (var i = 0; i < 10; i++) {
        document.getElementById('task_result').innerHTML += (`
            ${i + 1}<br />`)
    }
}

function task4() {
    var tableNumber = Number(prompt("Enter a Number to show it's Multiplication Table."));
    var numberOfTime = Number(prompt("Enter length of Multiplication Table"))
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 4</h1>
        <hr>
        <h5>Multiplication table of ${tableNumber}</h5>
        <h5>Length ${numberOfTime}</h5><br />`)
    for (var i = 0; i < numberOfTime; i++) {
        document.getElementById('task_result').innerHTML += (`
            <h6>${tableNumber} X ${i + 1} = ${tableNumber * (i + 1)}</h6>`)
    }
}
function task5() {
    var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 5</h5>
        <hr>`)
    for (var i = 0; i < fruits.length; i++) {
        document.getElementById('task_result').innerHTML += (`
            <h5>${fruits[i]}</h5>`)
    }
    document.getElementById('task_result').innerHTML += (`
        <br />`)
    for (var i = 0; i < fruits.length; i++) {
        document.getElementById('task_result').innerHTML += (`
            <h5>Element at Index ${i} is ${fruits[i]}</h5>`)
    }
}

function task6_a() {
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 6 part A</h1>
        <hr>
        <h1>Counting:</h1>
        <br />`)
    for (var i = 0; i < 15; i++) {
        document.getElementById('task_result').innerHTML += (`
            ${i + 1}, `)
    }
}

function task6_b() {
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 6 part B</h1>
        <hr>
        <h1>Reverse Counting:</h1>
        <br />`)
    for (var i = 10; i > 0; i--) {
        document.getElementById('task_result').innerHTML += (`
            ${i}, `)
    }
}

function task6_c() {
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 6 part C</h1>
        <hr>
        <h1>Even Number:</h1>
        <br />`)
    for (var i = 0; i >= 0; i++) {
        if (i > 20) {
            break
        }
        else if (i % 2 === 0) {
            document.getElementById('task_result').innerHTML += (`
            ${i}, `)
        }
    }
}

function task6_d() {
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 6 part C</h1>
        <hr>
        <h1>ODD Number:</h1>
        <br />`)
    for (var i = 0; i >= 0; i++) {
        if (i > 20) {
            break
        }
        else if (i % 2 != 0) {
            document.getElementById('task_result').innerHTML += (`
            ${i}, `)
        }
    }
}

function task6_e() {
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 6 part C</h1>
        <hr>
        <h1>Series:</h1>
        <br />`)
    for (var i = 1; i >= 0; i++) {
        if (i > 20) {
            break
        }
        else if (i % 2 === 0) {
            document.getElementById('task_result').innerHTML += (`
            ${i}k, `)
        }
    }
}

function task7() {
    var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    var item = prompt('Welcome to Bakery, What do you want to order sir/Maam?').toLowerCase();
    var foundItem = false;
    var index;
    document.getElementById('task_result').innerHTML = (`
        <hr>
        <h1>Answer Of Question 7</h1>
        <hr>`)
    for (var i = 0; i < bakery.length; i++) {
        if (bakery[i] === item) {
            foundItem = true;
            index = i;
            // document.getElementById('task_result').innerHTML +=(`
            //     <p>${bakery[i]} is <b>available</b> at index ${i} in our Bakery.</p>`);
            break;
        }
    }
    if (foundItem) {
        document.getElementById('task_result').innerHTML += (`
                <p>${item} is <b>available</b> at index ${index} in our Bakery.</p>`);
    }
    else {
        document.getElementById('task_result').innerHTML += (`
            <p>We are Sorry. ${item} is <b>not available</b> in our Bakery.</p>`);
    }
}

function task8() {
    var numberArray = [24, 53, 78, 91, 12, 105];
    var maxNumber = numberArray[0];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > maxNumber) {
            maxNumber = numberArray[i];
        }
    }
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 8</h1>
        <hr>
        Array Items : ${numberArray}
        <br />
        The largest Number of Array is <b>${maxNumber}</b>`)
}

function task9() {
    var numberArray = [24, 53, 78, 91, 12, 9, 5, 85];
    var minNumber = numberArray[0];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] < minNumber) {
            minNumber = numberArray[i];
        }
    }
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 9</h1>
        <hr>
        Array Items : ${numberArray}
        <br />
        The smallest Number of Array is <b>${minNumber}</b>`)
}

function task10() {
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 10</h1>
        <hr>
        `)
    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            document.getElementById('task_result').innerHTML += (`
                    ${i} <b>,</b> `)
        }
    }
}

// var arr1 = [1,2,3,4];
// var arr2 = [];
// var initial = 1;
// for(var i = 0; i < arr1.length; i++){
//     for(var j = 0; j < arr1.length; j++){
//         // console.log(arr1[j])
//         initial *=arr1[j]
//         // console.log(initial)
//     }
//     initial = initial/arr1[i];
//     arr2.push(initial);
//     initial = 1;
// }
// console.log(arr2)
var value = document.getElementById('task_result').innerText;
console.log(value.split('').join(''))
function findAndReplace() {
    var text = prompt("Enter any paragraph").toLowerCase();
    document.getElementById('task_result'), innerHTML = (`
        <h1>Find And Replace Game</h1>
        <p id='message'>${text}</p>
        <button class='btn btn-primary' onclick="findWord()">Find</button>
        <button class='btn btn-primary' onclick="replaceWord()">Replace</button>`)
};
function findWord() {
    var findWord = prompt("Enter a Word which you want to find on a paragaph").toLowerCase();
    var text = document.getElementById('message').innerText;
    if (findWord != '') {
        for (var i = 0; i < text.length; i++) {
            if (text.slice(i, (i + (findWord.length))) === findWord) {
                console.log(`${findWord} is in at index of ${i}`)
            }
        }
    }
    else {
        alert('Enter a word');
    }

}
var text = 'this is be a book a book be a book find a book di you have a book';
var findWord = 'book';
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, (i + (findWord.length))) === findWord) {
        console.log(`${findWord} is in at index of ${i}`)
    }
}
var updatedText = text.replaceAll('book', 'kitab')
console.log(updatedText)