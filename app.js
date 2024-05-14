// Getting Elements from HTML 
var input = document.getElementById("input");
var checkPassword = document.getElementById("input-icon");
var showPass = document.getElementById("show-pass");
var hidePass = document.getElementById("hide-pass");
var strongPass = document.getElementById("strong-pass");
var weakPass = document.getElementById("weak-pass");
var slider = document.getElementById("slider");
var sliderLength = document.getElementById("slider-length");
var capitalLetter = document.getElementById("upper-case");
var smallLetter = document.getElementById("lower-case");
var number = document.getElementById("number");
var symbol = document.getElementById("symbol");
var capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var smallAlpha = "abcdefghijklmnopqrstuvwxyz";
var numbers = 1234567890;
var symbols = "!@#$%^&*()_+";
input.value = "";

// Show & Hide Password 

checkPassword.addEventListener("click",
    function checkmyPassword() {
        if (input.type === "password") {
            input.type = "text";
            showPass.style.display = "block";
            hidePass.style.display = "none";
        } else {

            input.type = "password";
            showPass.style.display = "none";
            hidePass.style.display = "block";
        }
    }
)

// Controlling Range Input 

sliderLength.textContent = slider.value;
slider.oninput = function () {
    sliderLength.textContent = this.value
}
// Generating Password 
var result = "";
var password = "";

function generatePassword() {
    // Condition for Check Boxes 
    if (
        smallLetter.checked &&
        capitalLetter.checked &&
        number.checked &&
        symbol.checked
    ) {
        result += capitalAlpha + smallAlpha + numbers + symbols;
        strongPass.style.display = "block";
        weakPass.style.display = "none";
    }
    else if (
        capitalLetter.checked &&
        !smallLetter.checked &&
        !number.checked &&
        !symbol.checked
       ) {
        result += capitalAlpha;
        strongPass.style.display = "none";
    }
    else if (
        !capitalLetter.checked &&
        smallLetter.checked &&
        !number.checked &&
        !symbol.checked
    ) {
        result += smallAlpha;
        strongPass.style.display = "none";
    }
    else if (
        !capitalLetter.checked &&
        !smallLetter.checked &&
        number.checked &&
        !symbol.checked
    ) {
        result += numbers;
        strongPass.style.display = "none";
    }
    else if (
        !capitalLetter.checked &&
        !smallLetter.checked &&
        !number.checked &&
        symbol.checked
    ) {
        result += symbols;
        strongPass.style.display = "none";
    }
    else if (
        capitalLetter.checked &&
        smallLetter.checked &&
        !number.checked &&
        !symbol.checked
    ) {
        result += capitalAlpha + smallAlpha;
        strongPass.style.display = "none";
    }
    else if (
        capitalLetter.checked &&
        !smallLetter.checked &&
        number.checked &&
        !symbol.checked
    ) {
        result += capitalAlpha + numbers;
        strongPass.style.display = "none";
    }
    else if (
        capitalLetter.checked &&
        !smallLetter.checked &&
        !number.checked &&
        symbol.checked
    ) {
        result += capitalAlpha + symbols;
        strongPass.style.display = "none";
    }
    else if (
        !capitalLetter.checked &&
        smallLetter.checked &&
        number.checked &&
        !symbol.checked
    ) {
        result += smallAlpha +numbers;
        strongPass.style.display = "none";
    }
    else if (
        !capitalLetter.checked &&
        smallLetter.checked &&
        !number.checked &&
        symbol.checked
    ) {
        result += smallAlpha + symbols;
        strongPass.style.display = "none";
    }
    else if (
        !capitalLetter.checked &&
        !smallLetter.checked &&
        number.checked &&
        symbol.checked
    ) {
        result += numbers + symbols;
        strongPass.style.display = "none";
    }
    else if (
        capitalLetter.checked &&
        smallLetter.checked &&
        number.checked &&
        !symbol.checked
    ) {
        result += capitalAlpha + smallAlpha + numbers;
        strongPass.style.display = "none";
    }
    else if (
        !capitalLetter.checked &&
        smallLetter.checked &&
        number.checked &&
        symbol.checked
    ) {
        result += symbols+ smallAlpha+ numbers;
        strongPass.style.display = "none";
    }
    else if (
        capitalLetter.checked &&
        !smallLetter.checked &&
        number.checked &&
        symbol.checked
    ) {
        result += symbols+ capitalAlpha+ numbers;
        strongPass.style.display = "none";
    } else {
        input.value = "At least check one checkbox";
        strongPass.style.display = "none";
        return;
    }

    for (i = 0; i < sliderLength.textContent; i++) {
        password += result[Math.floor(Math.random() * result.length)]
    }
    input.value = password;
    password = "";
}

