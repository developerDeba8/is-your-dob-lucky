var buttonCheck = document.querySelector("#btn-check");
var dateOfBirth = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var message = document.querySelector("#message");


function sumOfBirthDate(dob) {
    dob = dob.replaceAll("-", "");
    var sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }

    return sum;
}

function checkBirthDateIsLucky() {
    message.style.display = "none";
    const dob = dateOfBirth.value;
    const luckyNum = luckyNumber.value;
    
    if(dob == "" || luckyNum == ""){
        message.style.display = "block";
        message.innerText = "Please enter both fields";
        return;
    }

    var sumOfDob = sumOfBirthDate(dob);


    if (sumOfDob % luckyNum === 0) {
        message.style.display = "block";
        message.innerText = "Your Birth Date is Lucky! 😜";
    } else {
        message.style.display = "block";
        message.innerText = "Sorry you are unlucky!";
    }
}

buttonCheck.addEventListener('click', checkBirthDateIsLucky);