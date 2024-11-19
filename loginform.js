const emailInput = document.querySelector("#email");
const emailInputBox = document.querySelector(".input-email");
const emailError = document.querySelector(".input-error");
const emailError2 = document.querySelector(".input-error2");
const passwordInput = document.querySelector("#password");
const passwordInputBox = document.querySelector(".input-password")
const passwordError = document.querySelector(".input-password-error")
const passwordError2 = document.querySelector(".input-password-error2")

const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function emailValidChk(email) {
    return pattern.test(email);
};



emailInput.addEventListener("focusout", function (e) {
    if (!e.target.value) {
        emailInputBox.classList.add("error");
        emailError.style.display = "block";
        emailError2.style.display = "none";
    } else if(!emailValidChk(e.target.value)) {
        emailInputBox.classList.add("error");
        emailError.style.display = "none";
        emailError2.style.display = "block";
    } else {
        emailInputBox.classList.remove("error");
        emailError.style.display = "none";
        emailError2.style.display = "none";
    }
});

function validatePassword(password) {
    return password.length >= 8;
}

passwordInput.addEventListener("focusout", function (e) {
    if (!e.target.value) {
        passwordInputBox.classList.add("error");
        passwordError.style.display = "block";
        passwordError2.style.display = "none";
    } else if (!validatePassword(e.target.value)) {
        passwordInputBox.classList.add("error");
        passwordError.style.display = "none";
        passwordError2.style.display = "block";
    } else {
        passwordInputBox.classList.remove("error");
        passwordError.style.display = "none"
        passwordError2.style.display = "none"        
    }
});



