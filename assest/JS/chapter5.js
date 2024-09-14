//Question 1
var num1 = Number(prompt("Entr first Number: "));
var num2 = Number(prompt("Enter Second Numbe: "));
var add = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + add + ".<br>");

//Question 2 
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var remainder = num1 % num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + ".<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + ".<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + div + ".<br>");
document.write("remainder of " + num1 + " and " + num2 + " is " + remainder + ".<br>");

//Question 3 

var num;
document.write("Value after decleration is " + num + "<br>");
num = 5;
document.write("Initial value is " + num + "<br>");
num++;
document.write("Value after increment is " + num + "<br>");
num = num + 7;
document.write("Value after addition is " + num + "<br>");
num--;
document.write("Value after decrement is " + num + "<br>");
document.write("The remainder is: " + num % 3 + "<br>");

//Question 4 

var ticket = 600;
var price = 5 * ticket;
document.write("<br>Total cost to buy 5 tickets to a movie is " + price + "PKR <br>");

//Question 5

var tableNmuber = Number(prompt("Enter a number which table you want to display: "));
document.write("<b>Table of " + tableNmuber + "</b><br>")
document.write(tableNmuber + " * 1 = " + tableNmuber * 1 + "<br>");
document.write(tableNmuber + " * 2 = " + tableNmuber * 2 + "<br>");
document.write(tableNmuber + " * 3 = " + tableNmuber * 3 + "<br>");
document.write(tableNmuber + " * 4 = " + tableNmuber * 4 + "<br>");
document.write(tableNmuber + " * 5 = " + tableNmuber * 5 + "<br>");
document.write(tableNmuber + " * 6 = " + tableNmuber * 6 + "<br>");
document.write(tableNmuber + " * 7 = " + tableNmuber * 7 + "<br>");
document.write(tableNmuber + " * 8 = " + tableNmuber * 8 + "<br>");
document.write(tableNmuber + " * 9 = " + tableNmuber * 9 + "<br>");
document.write(tableNmuber + " * 10 = " + tableNmuber * 10 + "<br>");

//Question 6 

document.write("<h2>Temperature converter:</h2>");

document.write(" The Temperature Converter <br> <br>");
var celcius = prompt("Enter Celcius Temperature");
var convertF = (celcius * 9 / 5) + 32;
document.write(celcius + "\xB0C is " + convertF + "\xB0F.");

var fahrenheit = prompt("Enter Fahrenheit Temperature");
var convertC = (fahrenheit - 32) * 5 / 9;
document.write("<br>" + fahrenheit + "\xB0F is " + convertC + " \xB0C <br>");

//Question 7

document.write("<h2>Shopping Cart</h2>");
var price1 = 560;
var price2 = 200;
var quantity1 = Number(prompt("Enter Quantity of item 1 (560/item): "));
var quantity2 = Number(prompt("Enter Quantity of item 2 (200/item): "));
var shippingCharges = 150;
var total = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;
document.write("Price of item 1 is " + price1);
document.write("<br>Quantity of item 1 is " + quantity1);
document.write("<br>Price of item 2 is " + price2);
document.write("<br>Quantity of item 2 is " + quantity2);

document.write("<br><br>Shipping Charges " + shippingCharges);

document.write("<br><br>Total cost of your order is " + total + " PKR <br>");

//Question 8

document.write("<h2>Mark Sheet</h2>");

var totalMarks = Number(prompt("Enter your Total marks"));
var obtMarks = Number(prompt("Enter Obtained Marks"));
var per = (obtMarks / totalMarks) * 100;
document.write("<br>Total marks : " + totalMarks);
document.write("<br>Marks obtained : " + obtMarks);
document.write("<br>Percentage : " + per + "%<br>");

//Question 9

document.write("<h2>Currency in PKR</h2>");

var dollar = Number(prompt("Enter US dollars"));
var riyal = Number(prompt("Enter Saudi Riyal"));
var totalCurrency = (dollar * 104.80) + (riyal * 28);

document.write("Total currency in PKR : " + totalCurrency + "<br>");

//Question 10

var anyNumber = 5;
anyNumber = ((anyNumber + 5) * 10) / 2;
alert(anyNumber);

//Question 11

document.write("<h2>The Age Calculator</h2>");

var currentYear = Number(prompt("Enter current year"));
var birthYear = Number(prompt("Enter Birth Year "));
var finalAge = (currentYear - birthYear);
var finalAge1 = (currentYear - birthYear) + 1;

document.write("Current Year : " + currentYear);
document.write("<br>Birth Year : " + birthYear);
document.write("<br><br>They are either " + finalAge + " or " + finalAge1 + " years old<br>");

//Question 12

document.write("<h2>The Geometrizer</h2>");

var radius = Number(prompt("Enter radius of a cirlce"));
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;;

document.write("Radius of a circle : " + radius);
document.write("<br>The circumference is : " + circumference);
document.write("<br>The area is : " + area + "<br>");

//Question 13

document.write("<h2>The Lifetime Supply Calculator</h2>");

var favSnack = "Oreo";
var currentAge = Number(prompt("Enter current age"));
var maxAge = Number(prompt("Enter maximum age"));
var amount = Number(prompt("Enter how many snacks consumed per day"));

var totalSnack = (maxAge - currentAge) * (amount*365);

document.write("<br>Favourite Snack : " + favSnack);
document.write("<br>Current Age : " + currentAge);
document.write("<br>Estimated Maximum Age : " + maxAge);
document.write("<br>Amount of snacks per day : " + amount);

document.write("<br><br>You will need " + totalSnack +" "+ favSnack + " to last you untill the ripe old age of " + maxAge + "<br");
