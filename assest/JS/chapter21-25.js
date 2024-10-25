function task1() {
    var firstName = prompt("Enter Your First Name");
    var lastName = prompt("Enter Your Last Name");
    var fullName = `${firstName} ${lastName}`;
    swal.fire({
        title: `WelCome to My Website\n${fullName}`
    })
};

function task2() {
    var favouriteMobilePhone = prompt("Enter Your Favourite Mobile Phone brand and Model");
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 2</h1>
        <p>My Favourite Mobile Phone is : <b>${favouriteMobilePhone}</b></p>
        <p>Length of string : <b>${favouriteMobilePhone.length}</b></p>`)
};

function task3() {
    var country = 'Pakistani';
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 3</h1>
        <p>String is : <b>${country}</b></p>
        <p>Index Of 'n' is : <b>${country.indexOf('n')}</b></p>`)
};

function task4() {
    var text = 'Hello World!';
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 4</h1>
        <p>String is : <b>${text}</b></p>
        <p>Last Index Of 'l' is : <b>${text.lastIndexOf('l')}</b></p>`)
};

function task5() {
    var country = 'Pakistani';
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 5</h1>
        <p>String is : <b>${country}</b></p>
        <p>Character At Index '3' : <b>${country.charAt(3)}</b></p>`)
}

function task6() {
    var firstName = prompt("Enter Your First Name");
    var lastName = prompt("Enter Your Last Name");
    var fullName = firstName.concat(lastName);
    swal.fire({
        title: `WelCome to My Website\n${fullName}`
    })
};

function task7() {
    var city = 'Hyderabad';
    var city1 = city.replace('Hyder', 'Islam');
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer of Question 7</h1>
        <p>City : <b>${city}</b></p>
        <p>After Replacement : <b>${city1}</b></p>`)
};

function task8() {
    var massage = 'Ali and Sami are best friends. They play cricket and football together.';
    var updatedMassage = massage.replaceAll('and', '&');
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 8</h1>
        <p>Original Massage : <b>${massage}</b></p>
        <p>Updated Massage : <b>${updatedMassage}</b></p>`)
}

function task9() {
    var stringNum = '472';
    var number = Number(stringNum);
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 9</h1>
        <p>Value : <b>${stringNum}</b></p>
        <p>Type : <b>${typeof (stringNum)}</b></p>
        <p>Value : <b>${number}</b></p>
        <p>Type : <b>${typeof (number)}</b></p>`)
};

function task10() {
    var userInput = prompt('Enter Any thing you want');
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer of Question 10</h1>
        <p>User Input :<b>${userInput}</b></p>
        <p>Upper Case : <b>${userInput.toUpperCase()}</b></p>`)
};

function task11() {
    var userInput = prompt('Enter somr thing');
    var firstChar = userInput.slice(0, 1).toUpperCase();
    var remainingChar = userInput.slice(1).toLowerCase();
    var titleCase = firstChar + remainingChar;
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 11</h1>
        <p>User Input : <b>${userInput}</b></p>
        <p>Title Case : <b>${titleCase}</b></p>`)
};

function task16() {
    var university = 'University of Karachi';
    var uniArray = university.split('');
    document.getElementById('task_result').innerHTML = (`<h1>Answer Of Question 16</h1>`)
    console.log(uniArray[0])
    for (var i = 0; i < uniArray.length; i++) {
        document.getElementById('task_result').innerHTML += (`
            ${uniArray[i]}<br>`)
        console.log(uniArray[i])
    }
};

function task17() {
    var str = prompt("Enter Any Thing You Want");
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 17</h1>
        <p>User Input : <b>${str}</b></p>
        <p>Last character of Input : <b>${str.charAt(str.length - 1)}</b></p>`)
};

function task12() {
    var num = Number(prompt("Enter any floating number program change that number into string and remov point"));
    var str = num.toString().split('.').join('');
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer of Question 12</h1>
        <p>Number  : <b>${num}</b></p>
        <p>Result : <b>${str}</b></p>`)
};

function task13() {
    var userName = prompt("Enter Your FullName");
    var flag = true;
    for (var i = 0; i < userName.length; i++) {
        if ((userName.charCodeAt(i) < 47 && userName.charCodeAt(i) > 32) || (userName.charCodeAt(i) < 65 && userName.charCodeAt(i) > 57)) {
            Swal.fire({
                title: `${userName}`,
                text: `Please enter Valid User Name. User Name won't be any special character.`,
                icon : 'error'
            })
            flag = false;
            break
        }
    }
    if(flag){
        Swal.fire({
            title: `${userName}`,
            text : `Valid User Name`,
            icon : 'success'
        })
    }
};

function task14() {
    var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    var item = prompt('Welcome to Bakery, What do you want to order sir/Maam?').toLowerCase();
    var foundItem = false;
    var index;
    document.getElementById('task_result').innerHTML = (`
        <hr>
        <h1>Answer Of Question 14</h1>
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
};

function task18(){
    var text = 'The Quick Brown Fox Jumps Over the Lazy Dog.';
    text = text.toLowerCase();
    var count = 0;
    for(var i = 0; i < text.length; i++){
        if(text.slice(i, (i+3)) === 'the'){
            count += 1;
        }
    }
    document.getElementById('task_result').innerHTML = (`
        <h1>Answer Of Question 18</h1>
        <p>Text : <b>${text}</b></p>
        <p>There are <b>${count}</b> Occurrence of word 'the'`)
};

    function findAndReplace() {
        var text = prompt("Enter any paragraph").toLowerCase();
        document.getElementById('task_result').innerHTML = (`
        <h1>Find And Replace Game</h1>
        <p id='message'>${text}</p>
        <button class='btn btn-primary mb-4' onclick="findWord()">Find</button>
        <button class='btn btn-primary mb-4' onclick="replaceWord()">Replace</button>`)
    };
    function findWord() {
        var findWord = prompt("Enter a Word which you want to find on a paragaph").toLowerCase();
        var text = document.getElementById('message').innerText;
        var flag = false;
        for (var i = 0; i < text.length; i++) {
            if (text.slice(i, (i + (findWord.length))) === findWord) {
                flag = true;
                break;
            }
        }
        if (flag && findWord != '') {
            for (var i = 0; i < text.length; i++) {
                if (text.slice(i, (i + (findWord.length))) === findWord) {
                    document.getElementById('task_result').innerHTML += (`
                    <p>${findWord} is in at index of ${i}</p>`)

                }
            }
        }
        else {
            alert('Enter a valid word');
        }

    };

    function replaceWord() {
        var findWord = prompt("Enter a Word which you want to find on a paragaph").toLowerCase();
        var replaceWord = prompt('Which word enter after find the word');
        var text = document.getElementById('message').innerText;
        var flag = false;
        for (var i = 0; i < text.length; i++) {
            if (text.slice(i, (i + (findWord.length))) === findWord) {
                flag = true;
                break;
            }
        }
        if (flag && findWord != '') {
            var updatedText = text.replaceAll(findWord, replaceWord);
            document.getElementById('task_result').innerHTML += (`
            <p>${updatedText}</p>`)
        }
        else {
            alert('Enter a valid word');
        }

    }