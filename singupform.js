const emailInput = document.querySelector("#email");
const emailInputBox = document.querySelector(".input-email");
const emailError = document.querySelector(".input-error");
const emailError2 = document.querySelector(".input-error2");
const NickNameInput = document.querySelector("#NickName");
const NickNameInputBox = document.querySelector(".input-NickName");
const passwordInput = document.querySelector("#password");
const passwordInputBox = document.querySelector(".input-password");
const passwordError = document.querySelector(".input-password-error");
const passwordError2 = document.querySelector(".input-password-error2");
const passwordCheck = document.querySelector("#password-check");
const passwordCheckBox = document.querySelector(".input-password-check");
const passwordCheckError = document.querySelector(".input-password-check-error");
const passwordEye = document.querySelector("password-eye")
const toggleButton = document.getElementById("toggle-password-visibility");
const eyeIcon = document.getElementById("eye-icon");

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

NickNameInput.addEventListener("focusout", function (e) {
    if (!e.target.value) {
        NickNameInputBox.classList.add("error");
    } else {
        NickNameInputBox.classList.remove("error");
    }
});

function validatePassword(password) {
    return password.length >= 8;
}

passwordInput.addEventListener("focusout", function (e) {
    /*값이 있는지 없는지 체크하는부분*/
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
    checkPasswordMatch();
});


passwordCheck.addEventListener("focusout", function(e){
    if(!e.target.value){
    }else{
        if (passwordInput.value !== e.target.value) {
            passwordCheckBox.classList.add("error");
            
            passwordCheckError.style.display = "block";
        }else{
            passwordCheckBox.classList.remove("error");
            passwordCheckError.style.display = "none";
        }
    }
});
passwordInput.addEventListener("input", checkPasswordMatch);
passwordCheck.addEventListener("input", checkPasswordMatch);


passwordEye.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordEyeHide.style.display = 'none';
      passwordEyeOpen.style.display = 'inline';
    } else {
      passwordInput.type = 'password';
      passwordEyeHide.style.display = 'inline';
      passwordEyeOpen.style.display = 'none';
    }
  });




