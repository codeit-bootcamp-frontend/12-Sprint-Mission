const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password"); 

// 로그인버튼 ... 관련 
const submitButton = document.getElementById("login-submit-button"); // 로그인 버튼으로 수정 ... 
const form = document.getElementById("signin-form");  // 폼 id ..  // 이것도 같이 세트로 수정

// 빈칸
const email_emptyError = document.getElementById("email-empty-error"); 
const password_emptyError = document.getElementById("password-empty-error");

// 유효성 검사
const email_formatError = document.getElementById("email-format-error"); 
const password_formatError = document.getElementById("password-format-error"); 

// 이메일 
// 요구사항에서는 유효성 검사를 하라했는데 login 페이진데 굳이 필요할까? 



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


// 비밀번호 입력에 대한 focusout 이벤트
// 이것도 마찬가지로 로그인 페이지에서는 굳이 형식검사가 필요할까? 

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


function validateForm() {
    // 클래스 'error'가 있는 요소가 존재하면 버튼 비활성화
    const hasError = document.querySelectorAll(".error").length > 0;
    submitButton.disabled = hasError;
} 
// 이렇게만 하면 아무것도 입력하지않았을때는 error가 존재할 수가 없으니 회원가입이 허가됨 ..
// 한가지 더 거쳐서 방지를 해야할듯. 

form.addEventListener("submit", (event) => {
    // 모든 입력 필드가 비어 있는지 검사
    if (!emailInput.value || !passwordInput.value) {
        event.preventDefault(); // 폼 제출 차단
        alert("모든 필드를 입력해 주세요."); // 사용자에게 알림
    }
});