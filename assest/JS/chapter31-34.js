function task1(){
    var date = new Date();
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 1</h1>
        <p>Current Date is : <span style="font-size:25px; font-style:italic;">${date}</span></p>`)
};

function task2(){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date().getMonth();
    swal.fire({
        title : `${months[date]}`,
    })
};

function task3(){
    let days = ['sun','mon','tues','wed','thurs','fri','sat'];
    let date = new Date().getDay();
    swal.fire({
        title : `Today is ${days[date]}`
    })
};

function task4(){
    let days = ['sun','mon','tues','wed','thurs','fri','sat'];
    let date = new Date().getDay();
    if(days[date] === 'sun' || days[date] === 'sat'){
        swal.fire({
            title : `Hurray!`,
            text : `Todays! It's Funday`
        })
    }
    else{
        swal.fire({
            title : `Opps :(`,
            text : `Today is working day`
        })
    }
};

function task5(){
    let date  = new Date().getDate();
    date = Number(date);
    if(date < 16){
        swal.fire({
            title : `First Fifteen Days of Month`
        })
    }
    else{
        swal.fire({
            title : `Last Days of Month`
        })
    }

};

function task6(){
    let date = new Date();
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 6</h1>
        <p>Current Date is : ${date}</p>
        <p>Elapsed Milisecond from January 1, 1970 is : ${date.getTime()}</p>
        <p>Elpased Minutes from January 1, 1970 is : ${date.getTime()/(1000*60)}</p>`);

};

function task7(){
    let date = new Date().getHours();
    if(date < 12){
        swal.fire({
            title : `It's AM`
        })
    }
    else{
        swal.fire({
            title : `It's PM`
        })
    }
};

function task8(){
    let laterDate = new Date('December 31, 2020');
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 8</h1>
        <p>Later Date is : ${laterDate}`);
};

function task9(){
    let date = new Date('June 18, 2015').getTime();
    let newDate = new Date().getTime();
    let pastDays = (newDate - date)/(1000*60*60*24);
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 9</h1>
        <p>${Math.round(pastDays)} days have Passed since <b>1<sup>st</sup></b> Ramzan of 2015</p>`)

};

function task10(){
    let currentDate = new Date('December 5, 2015').getTime();
    let pastDate = new Date('January 1, 2015').getTime();
    let second = (currentDate - pastDate)/(1000);
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 10</h1>
        <p>On Reference Date : ${new Date('December 5, 2015 22:50:16')}</p>
        <p>${second} Second had passed since begining of 2015</p>`)
};

function task11(){
    let currentDate = new Date();
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 11</h1>
        <p>Current Date : ${currentDate}`)
    currentDate.setHours(currentDate.getHours() - 1);
    document.getElementById('task_result').innerHTML +=(`
        1 Hours ago, It was ${currentDate}`)
}

function task12(){
    let currentDate = new Date();
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 12</h1>
        <p>Current Date : ${currentDate}`)
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    document.getElementById('task_result').innerHTML +=(`
        100 Years ago, It was ${currentDate}`)
};

function task13(){
    let age = Number(prompt("Enter Your Age."));
    let date = (new Date().getFullYear()) - age;
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 13</h1>
        <p>Your Age Is ${age}</p>
        <p>Your Birth Year is ${date}</p>`)
};

function task14(){
    let customerName = prompt('Enter Your Name');
    let monthArray = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentMonth = monthArray[new Date().getMonth()];
    let numberOfUnit = 224;
    let chargePerUnit = 55;
    let netAmountPayable = numberOfUnit * chargePerUnit;
    let latePayment = 560;
    let grossAmount = netAmountPayable + latePayment;
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 14</h1>
        <p>Customer Name : <b>${customerName}</b></p>
        <p>Month : <b>${currentMonth}</b></p>
        <p>Number Of Units : <b>${numberOfUnit}</b></p>
        <p>Charge per Unit : <b>${chargePerUnit}</b></p>
        <br />
        <p>Net Amount Payable (within Due Date) : <b>${netAmountPayable}</b></p>
        <p>Late Payment surcharge : <b>${latePayment}</b></p>
        <p>Gross Amount payable (after Due Date) : <b>${grossAmount}</b></p>`)

}