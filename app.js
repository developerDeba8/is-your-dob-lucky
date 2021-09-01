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
    var dob = dateOfBirth.value;
    var sumOfDob = sumOfBirthDate(dob);

    if (sumOfDob % luckyNumber.value === 0) {

        message.style.display = "block";
        message.innerText = "Your Birth Date is Lucky! 😜";
    } else {

        message.style.display = "block";
        message.innerText = "Sorry you are unlucky!";
    }
}

buttonCheck.addEventListener('click', checkBirthDateIsLucky);