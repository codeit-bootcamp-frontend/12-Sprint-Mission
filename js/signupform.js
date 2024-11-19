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
const confirmeyeIcon = document.querySelector("#confirm-eye-icon");
const togglePasswordconfirmButton = document.querySelector("#toggle-password-confirm-visibility");

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

// 회원가입 페이지
// Nickname 미입력 시
nicknameInput.addEventListener("focusout", function(e){
    if(!e.target.value){
        nicknameInputBox.classList.add("error");
    }else{
        nicknameInputBox.classList.remove("error");
    }
});

// Password 불일치 시
passwordConfirmInput.addEventListener("focusout", function(e){
    if(e.target.value !== passwordInput.value){
        passwordConfirmInputBox.classList.add("error");
    }else{
        passwordConfirmInputBox.classList.remove("error");
    }
});

// Button 활성화
function checkSignup() {
    if (document.querySelector('.signup-section')) {
        if (!emailInput.value || !passwordInput.value || !nicknameInput.value || !passwordConfirmInput.value ||
            passwordInput.value.length < 8 ||  
            passwordConfirmInput.value !== passwordInput.value ||  
            emailInputBox.classList.contains('error') || 
            passwordInputBox.classList.contains('error') ||
            nicknameInputBox.classList.contains('error') ||
            passwordConfirmInputBox.classList.contains('error')) {
            signupLoginButton.disabled = true;  
        } else {
            signupLoginButton.disabled = false;  
        }
    }
};

emailInput.addEventListener('input', checkSignup);
passwordInput.addEventListener('input', checkSignup);
emailInputBox.addEventListener('input', checkSignup);
passwordInputBox.addEventListener('input', checkSignup);
nicknameInput.addEventListener('input', checkSignup);
passwordConfirmInput.addEventListener('input', checkSignup);

// Button 클릭 시 페이지 이동
signupLoginButton.addEventListener('click', function() {
    if (!signupLoginButton.disabled) {
        window.location.href = 'login.html';  
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

togglePasswordconfirmButton.addEventListener("click", function() {
    if (passwordConfirmInput.type === "password") {
        passwordConfirmInput.type = "text";  
        confirmeyeIcon.src = "./img/eye-icon.png"; 
    } else {
        passwordConfirmInput.type = "password";  
        confirmeyeIcon.src = "./img/eye-icon-close.png";  
    }
});
