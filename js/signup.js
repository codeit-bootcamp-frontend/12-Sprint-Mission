
const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password"); 
const re_passwordInput = document.getElementById("passwordConfirmation")  // 비밀번호 재확인 
const submitButton = document.getElementById("submit-button"); // 회원가입 버튼
const form = document.getElementById("signup-form");  // 폼 id .. 


const email_emptyError = document.getElementById("email-empty-error"); 
const nickname_emptyError = document.getElementById("nickname-empty-error"); 
const password_emptyError = document.getElementById("password-empty-error"); 
const re_password_emptyError = document.getElementById("re_password-empty-error"); 
const re_password_equalError = document.getElementById("re_password-eqaul-error"); 

const email_formatError = document.getElementById("email-format-error"); 
const password_formatError = document.getElementById("password-format-error"); 

emailInput.addEventListener("focusout", () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 검사 정규식
 
    if (!emailInput.value) { // emial 빈칸 
        emailInput.classList.add("error");
        email_emptyError.style.display = "block";
        email_formatError.style.display = "none"; 

    }  else if (!emailInput.value.match(emailPattern)) {
        // 이메일 형식이 잘못되었을 때   
        emailInput.classList.add("error");
        email_emptyError.style.display = "none";  
        email_formatError.style.display = "block";

    }  
        else {
        // 이메일이 올바른 형식일 때
        emailInput.classList.remove("error");
        email_emptyError.style.display = "none";
        email_formatError.style.display = "none";
    }
    validateForm();
});

// 닉네임 입력에 대한 focusout 이벤트
nicknameInput.addEventListener("focusout", () => {
    if (!nicknameInput.value) {  // 닉네임 빈칸일 때
        nicknameInput.classList.add("error");
        nickname_emptyError.style.display = "block"; 
    } else {
        nicknameInput.classList.remove("error");
        nickname_emptyError.style.display = "none"; 
    }
    validateForm();
});

// 비밀번호 입력에 대한 focusout 이벤트
passwordInput.addEventListener("focusout", () => {

    const passwordPattern = /^[A-Za-z\d@$!%*?&]{8,}$/; // 비밀번호 형식 검사 정규식  
                                                       // 영문 대소문자, 숫자, 특수 문자를 포함하며 8자리 이상

    if (!passwordInput.value) {  // 비밀번호 빈칸일 때
        passwordInput.classList.add("error");
        password_emptyError.style.display = "block"; }
    
    
    else if (!passwordInput.value.match(passwordPattern)) {
            // 비밀번호 형식이 잘못되었을 때   
            passwordInput.classList.add("error");
            password_emptyError.style.display = "none";  
            password_formatError.style.display = "block";
        }      
    
    else {
        passwordInput.classList.remove("error");
        password_emptyError.style.display = "none"; 
        password_formatError.style.display = "none";
    }
    validateForm();
});

// 비밀번호 확인에 대한 focusout 이벤트
re_passwordInput.addEventListener("focusout", () => {


    if (!re_passwordInput.value) {  // 비밀번호 빈칸일 때
        re_passwordInput.classList.add("error");
        re_password_emptyError.style.display = "block"; 
        re_password_equalError.style.display = "none";  }
    
    else if (re_passwordInput.value != passwordInput.value) {
        re_passwordInput.classList.add("error");
        re_password_emptyError.style.display = "none"; 
        re_password_equalError.style.display = "block"; }
     
    else {
        re_passwordInput.classList.remove("error");        
        re_password_emptyError.style.display = "none"; 
        re_password_formatError.style.display = "none"; // format 검사는 안해도 될듯 위에서 하니깐... 
        re_password_equalError.style.display = "none"; 
        }
    validateForm();

});


// 하나하나 조건 거는것보다 결국 클래스에 error가 add되었으면, 조건을 성립못한것이니 간단하게 ..

function validateForm() {
    // 클래스 'error'가 있는 요소가 존재하면 버튼 비활성화
    const hasError = document.querySelectorAll(".error").length > 0;
    submitButton.disabled = hasError;
} 
// 이렇게만 하면 아무것도 입력하지않았을때는 error가 존재할 수가 없으니 회원가입이 허가됨 ..
// 한가지 더 거쳐서 방지를 해야할듯. 

form.addEventListener("submit", (event) => {
    // 모든 입력 필드가 비어 있는지 검사
    if (!emailInput.value || !nicknameInput.value || !passwordInput.value || !re_PasswordInput.value) {
        event.preventDefault(); // 폼 제출 차단
        alert("모든 필드를 입력해 주세요."); // 사용자에게 알림
    }
});