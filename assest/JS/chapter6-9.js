//Queestion 1

// var num = Number(prompt("Enter a number"));
// document.write(`<h2>Concept of Unfamiliar Operator</h2>Result:<br>The value of a number : ${num}<br>---------------------------------------
//     <br><br>The value of ++num is : ${++num} <br>Now the value of num is : ${num}
//     <br><br>The value of num++ is : ${num++}<br>Now the value of num is : ${num}<br><br>
//     The value of --num is : ${--num}<br>now the value of num is : ${num}<br><br>
//     The value of num-- is : ${num--}<br>Now the value of num is : ${num}<br>`);


//Question 2 

// var a =2;
// var b =1;
// var result = --a - --b + ++b + b--;
// document.write(`<h2>Question 2</h2>Value of a is : ${a}<br>Value of b is : ${b}<br>Value of Result is : ${result} <br>`);

//Question 3

// var userName = prompt("Enter Your Name");
// document.write(`<br><h3>Welcome <h4>${userName}</h4></h3><br>`);

//Question 4

// var tableNumber = Number(prompt('Enter a number to display a Table', "5"));
// document.write(`<h3>Table of ${tableNumber}</h3><br>`);
// for(var i = 0; i<10; i++){
//     document.write(`${tableNumber} * ${i+1} = ${tableNumber*(i+1)}<br><br><br>`)
// };

//Question 5

var subjectOne = prompt('Enter Subject Name');
var subjectOneMarks = Number(prompt(`Enter marks of ${subjectOne}`));
var subjectTwo = prompt('Enter Subject two name');
var subjectTwoMarks = Number(prompt(`Enter marks of ${subjectTwo}`));
var subjectThree = prompt("Enter Subject Three name");
var subjectThreeMarks = Number(prompt(`Enter Marks of ${subjectThree}`));
var eachSubjectTotalMarks = 100;
var totalObtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;
var totalMarks = 300;
var subjectOnePercentage = (subjectOneMarks/eachSubjectTotalMarks)*100;
var subjectTwoPercentage = (subjectTwoMarks/eachSubjectTotalMarks)*100;
var subjectThreePercentage = (subjectThreeMarks/eachSubjectTotalMarks)*100;
var totalPercentage = (totalObtainedMarks/totalMarks)*100;
document.write(`
    <h1 class="text-center">Mark Sheet</h1>
    <table style="text-align:center; width:700px; height:200px" border="2px" cellspacing="10" class="table table-bordered mx-auto">
    <tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
    </tr>
    <tr>
    <td>${subjectOne}</td>
    <td>${eachSubjectTotalMarks}</td>
    <td>${subjectOneMarks}</td>
    <td>${subjectOnePercentage}%</td>
    </tr>
    <tr>
    <td>${subjectTwo}</td>
    <td>${eachSubjectTotalMarks}</td>
    <td>${subjectTwoMarks}</td>
    <td>${subjectTwoPercentage}%</td>
    </tr><tr>
    <td>${subjectThree}</td>
    <td>${eachSubjectTotalMarks}</td>
    <td>${subjectThreeMarks}</td>
    <td>${subjectThreePercentage}%</td>
    </tr><tr>
    <td>Grand Total</td>
    <td>${totalMarks}</td>
    <td>${totalObtainedMarks}</td>
    <td>${totalPercentage}%</td>
    </tr>
    </table><br><br>`);
