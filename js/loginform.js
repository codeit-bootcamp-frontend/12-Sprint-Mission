const emailInput = document.querySelector("#email");
const emailInputBox = document.querySelector(".input-email");
const passwordInput = document.querySelector("#password");
const passwordInputBox = document.querySelector(".input-password");
const loginButton = document.querySelector(".login-button");
const nicknameInput = document.querySelector("#nickname");
const nicknameInputBox = document.querySelector(".input-nickname")
const passwordConfirmInput = document.querySelector("#password-confirm");
const passwordConfirmInputBox = document.querySelector(".input-password-confirm");
const signupLoginButton = document.querySelector(".signup-login-button");
const togglePasswordButton = document.querySelector("#toggle-password-visibility");
const eyeIcon = document.querySelector("#eye-icon");

// Email 유효성 검사
function checkEmail(email) {
    const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    return emailPattern.test(email);
};

// Email 미입력 시 && Email 형식 오류 시
emailInput.addEventListener("focusout", function(e){
    if(!e.target.value){
        emailInputBox.classList.add("error");
        emailInputBox.classList.remove("errorform");
    }else{
        emailInputBox.classList.remove("error");
        if (!checkEmail(e.target.value)){
            emailInputBox.classList.add("errorform");
        } else {
            emailInputBox.classList.remove("errorform");
        }
    }
});

// Password 미입력 시 && 8글자 이하 입력 시
passwordInput.addEventListener("focusout", function(e){
    if(!e.target.value){
        passwordInputBox.classList.add("error");
        passwordInputBox.classList.remove("error8");
    }else{
        passwordInputBox.classList.remove("error");
        if(e.target.value.length < 8) {
            passwordInputBox.classList.add("error8")
        }else {
            passwordInputBox.classList.remove("error8");
        }
    }
});


// Button 활성화
function checkLogin() {
    if (document.querySelector('.login-section')) {
        if (!emailInput.value || !passwordInput.value || passwordInput.value.length<8 ||
            emailInputBox.classList.contains('error') || 
            passwordInputBox.classList.contains('error')) {
            loginButton.disabled = true;  
        } else {
            loginButton.disabled = false;  
        }
    }
};


emailInput.addEventListener('input', checkLogin);
passwordInput.addEventListener('input', checkLogin);

// Button 클릭 시 페이지 이동
loginButton.addEventListener('click', function() {
    if (!loginButton.disabled) {
        window.location.href = 'items.html';  
    }
});

// 눈 클릭 시 password -> text, text -> password
togglePasswordButton.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";  
        eyeIcon.src = "./img/eye-icon.png";  
    } else {
        passwordInput.type = "password";  
        eyeIcon.src = "./img/eye-icon-close.png"; 
    }
});
