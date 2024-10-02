function task1() {
    alert("Array show in console")
    console.log([]);
}
function task2() {
    alert("Array show in console.");
    var newArray = new Array();
    console.log(`new Array()`);
    console.log(newArray);
}
function task3() {
    var students = ["'Ali'", "'Shahrukh'", "'Hammad'"];
    swal.fire(
        `String Array is \n\nvar students = [${students}]`
    )
}

function task4() {
    var num = [2, 5, 65, 85, 0.5];
    swal.fire(
        `Number Array is \n\nvar num = [${num}]`
    )
}

function task5() {
    var bool = [true, false];
    swal.fire(
        `Boolean Array is \n\nvar bool = [${bool}]`
    );
}

function task6() {
    var mix = ['"Shahrukh"', 1995, true];
    swal.fire(
        `Mixed Array is \n\nvar mix = [${mix}]`
    );
}

function task7() {
    var qualification = ['SSC', 'HSC', 'BCS', 'B.Com', 'BS', 'MS', 'M.Phil', 'PhD'];
    document.getElementById("task_result").innerHTML = (`
        <h1>Answer of Question 7</h1>
        <hr>
        <h1>Qualification</h1><br>
        <ol style="text-align:left; margin:5px auto; padding:0px auto; font-weight:bold;">
        <li>${qualification[0]}</li>
        <li>${qualification[1]}</li>
        <li>${qualification[2]}</li>
        <li>${qualification[3]}</li>
        <li>${qualification[4]}</li>
        <li>${qualification[5]}</li>
        <li>${qualification[6]}</li>
        <li>${qualification[7]}</li>
        </ol>`)
}

function task8() {
    var studentName = [];
    var score = [];
    totalScore = 500;
    var percentage = [];
    for (var i = 0; i < 3; i++) {
        studentName[i] = prompt(`Enter Name of student ${i + 1}`);
        score[i] = Number(prompt(`Enter Marks of ${studentName[i]}`));
        percentage[i] = (score[i] / totalScore) * 100;
    }

    document.getElementById("task_result").innerHTML += (
        `<hr>
        <h1>Answer of Question 8</h1>
        <hr>
        <h1>Mark Sheet</h1><br>
        <p>Score of ${studentName[0]} is ${score[0]}, and Percentage is ${percentage[0]}%</p>
        <p>Score of ${studentName[1]} is ${score[1]}, and Percentage is ${percentage[1]}%</p>
        <p>Score of ${studentName[2]} is ${score[2]}, and Percentage is ${percentage[2]}%</p>`
    )
}

var colorName = ['yellow', 'green', 'blue', 'brown'];
function task9() {
    document.getElementById("task_result").innerHTML += (
        `<hr>
        <h1>Answer of Question 9</h1>
        <hr>
        <p><b>Original Array : </b>[${colorName}]</p>`
    )
}
function task9_a() {
    var user = prompt(`Which color you want to add to the begining of the Array`);
    colorName.unshift(user);
    document.getElementById("task_result").innerHTML += (
        `<p><b>Color Add in the begining : </b>[${colorName}]</p>`
    )
}
function task9_b() {
    var user = prompt(`Which color you want to add to the end of the Array`);
    colorName.push(user);
    document.getElementById("task_result").innerHTML += (
        `<p><b>Color Add in the End : </b>[${colorName}]</p>`
    )
}

function task9_c() {
    var color1 = prompt(`Add two color in the Begining of the Array.\nEnter first Color Name.`);
    var color2 = prompt(`Enter Second Color Name`);
    colorName.unshift(color1, color2);
    document.getElementById("task_result").innerHTML += (
        `<p><b>Two Colors Added in the begining : </b>[${colorName}]</p>`
    )
}
function task9_d() {
    colorName.shift();
    document.getElementById("task_result").innerHTML += (
        `<p><b>Color Array after first color Name deleted : </b>[${colorName}]</p>`
    )
}

function task9_e() {
    colorName.pop();
    document.getElementById("task_result").innerHTML += (
        `<p><b>Color Array after last color Name deleted : </b>[${colorName}]</p>`
    )
}

function task9_f() {
    var index = Number(prompt(`Enter position Number where you to add color in Array`));
    var color = prompt(`Which color you want to add`);
    colorName.splice(index - 1, 0, color);
    document.getElementById("task_result").innerHTML += (
        `<p><b>Color Array after color Name Added : </b>[${colorName}]</p>`
    )
}
function task9_g() {
    var indexStart = Number(prompt(`Enter position Number to start delete the color.`));
    var indexLast = Number(prompt(`How many color you want to delete`));
    colorName.splice(indexStart, indexLast);
    document.getElementById("task_result").innerHTML += (
        `<p><b>Color Array after color Name deleted : </b>[${colorName}]</p>`
    )
}

function task10() {
    var studentScore = [320, 230, 480, 120];
    var sortedArray = studentScore.sort();
    document.getElementById('task_result').innerHTML += (
        `<hr>
        <h1>Answer of Question 10</h1>
        <hr>
        <p><b>Score of Students : </b> ${studentScore}</p>
        <p><b>Ordered Scores Of Students : </b> ${sortedArray}</p>`
    )
}

function task11() {
    var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
    var selectedCities = cities.slice(2, 4);
    document.getElementById('task_result').innerHTML += (
        `<hr>
        <h1>Answer of Question 11</h1>
        <hr>
        <h3>Cities List : </h3>
        <p>[${cities}]</p>
        <h3>Selected Cities List : </h3>
        <p>[${selectedCities}]`
    )
}

function task12() {
    var arr = ['this', 'is', 'my', 'cat'];
    var arrString = arr.join(' ');
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer of Question 12</h1>
        <hr>
        <h2>Array : </h2><h4>[${arr}]</h4>
        <br>
        <h2>String : </h2><h4>${arrString}</h4>`)
}

function task13() {
    var computerPeripheral = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 13</h1>
        <hr>
        <h5>Devices : </h5>
        <p>[${computerPeripheral}]</p>
        <br />
        <h5>Out :</h5>
        <p><b>${computerPeripheral.shift()}</b></p>
        <h5>Out :</h5>
        <p><b>${computerPeripheral.shift()}</b></p>
        <h5>Out :</h5>
        <p><b>${computerPeripheral.shift()}</b></p>
        <h5>Out :</h5>
        <p><b>${computerPeripheral.shift()}</b></p>`)
}

function task14() {
    var computerPeripheral = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 14</h1>
        <hr>
        <h5>Devices : </h5>
        <p>[${computerPeripheral}]</p>
        <br />
        <h5>Out :</h5>
        <p><b>${computerPeripheral.pop()}</b></p>
        <h5>Out :</h5>
        <p><b>${computerPeripheral.pop()}</b></p>
        <h5>Out :</h5>
        <p><b>${computerPeripheral.pop()}</b></p>
        <h5>Out :</h5>
        <p><b>${computerPeripheral.pop()}</b></p>`)
}

function task15() {
    var mobileBrand = ['Samsung', 'Apple', 'Motorola', 'Nokia', 'Sony', 'Haier'];
    document.getElementById('task_result').innerHTML += (`
        <hr>
        <h1>Answer Of Question 15</h1>
        <hr>
        <select class="form-select form-select-sm w-25 p-2 mx-auto mb-2">
            <option selected>Select The Brand</option>
            <option value="Samsung">${mobileBrand[0]}</option>
            <option value="Apple">${mobileBrand[1]}</option>
            <option value="Motorola">${mobileBrand[2]}</option>
            <option value="Nokia">${mobileBrand[3]}</option>
            <option value="Sony">${mobileBrand[4]}</option>
            <option value="Haier">${mobileBrand[5]}</option>
        </select>`)
}
