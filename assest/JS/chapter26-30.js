function task1(){
    var num = Number(prompt("Enter ANy decimal NUmber"));
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 1</h1>
        <p>Number : <b>${num}</b></p>
        <p>Round Off Value : <b>${Math.round(num)}</b></p>
        <p>Floor Value : <b>${Math.floor(num)}</b></p>
        <p>Ceil Value : <b>${Math.ceil(num)}</b></p>`)
};

function task2(){
    var num = Number(prompt("Enter Any negative decimal Number"));
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 2</h1>
        <p>Number : <b>${num}</b></p>
        <p>Round Off Value : <b>${Math.round(num)}</b></p>
        <p>Floor Value : <b>${Math.floor(num)}</b></p>
        <p>Ceil Value : <b>${Math.ceil(num)}</b></p>`)
};

function task3(){
    var num = Number(prompt("Enter Value to find the absolute value."));
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 3</h1>
        <p>The Absolute Value of <b>${num}</b> is : <b>${Math.abs(num)}</b></p>`)
};

function task4(){
    var diceValue = Math.floor(Math.random()*6) + 1;
    console.log(diceValue)
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 4</h1>
        <p>Random Dice Value : <b>${diceValue}</b></p>`)

};

function task5(){
    var coinValue = Math.floor(Math.random() * 2) + 1;
    console.log(coinValue)
    if(coinValue == 2){
        document.getElementById('task_result').innerHTML = (`
            <h1>Answer Of Question 5</h1>
            <h4>${coinValue}</h4>
            <p>Random Coin Value : <b>Head</b></p>`)
    }
    else{
        document.getElementById('task_result').innerHTML = (`
            <h1>Answer Of Question 5</h1>
            <h4>${coinValue}</h4>
            <p>Random Coin Value : <b>Tail</b></p>`)
    }
};

function task6(){
    var num = Math.floor(Math.random() * 100) + 1;
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 6</h1>
        <p>Random Number Between 1 to 100 is : <b>${num}</b></p>`)
};

function task8(){
    var num = Math.floor(Math.random() * 10) + 1;
    console.log(num )
    var userInput = Number(prompt('Guess any Number Between 1 to 10'));
    if(num === userInput){
        swal.fire({
            title : 'Congrates',
            text : 'You Guess Correct Number',
            icon : 'success'
        })
    }
    else{
        swal.fire({
            title : 'Sorry',
            text : 'Try Next Time',
            icon : 'error'
        })
    }
};

function task7(){
    var weight = prompt('Enter Your Weight');
    var num = '';
    for(var i = 0; i < weight.length; i++){
        if(weight[i] === '.' || !isNaN(weight[i])){
            num += weight[i];
        }
    }
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 7</h1>
        <p>The Weigth of User is : <b>${num}</b> Kilograms</p>`)
}