const emailForm = document.querySelector('.email-form');
const passwordForm = document.querySelector('.password-form');
const confirmPasswordForm = document.querySelector('.confirmPassword-form');
const nickNameForm = document.querySelector('.nickName-form');

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputConfirmPassword = document.querySelector('#confirmPassword');
const inputNickName = document.querySelector('#nickName');

const eyeButton = document.querySelector('.visibility');
const loginButton = document.querySelector('.login');
const signupButton = document.querySelector('.signup');


// 에러 메시지 전달 함수
function createErrorMessage (container, inputElement, message) {
    let errorMsg = container.querySelector('.error-msg');

    if (!errorMsg) {
        errorMsg = document.createElement('p');
        errorMsg.classList.add('error-msg');
        container.append(errorMsg);
    }
    errorMsg.textContent = message;
    inputElement.classList.add('error');
}

// 에러 메시지 삭제 함수
function removeErrorMessage (container, inputElement) {
    const existingErrorMsg = container.querySelector('.error-msg');
    if (existingErrorMsg) {
        existingErrorMsg.remove(); // 에러 메시지 제거
        inputElement.classList.remove('error'); // 에러 스타일 제거
    }    
}

// 로그인 버튼 활성화 여부 함수
function isValidLoginButton () {
    const existingErrorMsg = document.querySelector('.error-msg');

    if (existingErrorMsg || inputEmail.value.trim() === "" || inputPassword.value.trim() === "" ) {
        loginButton.classList.add('disabled'); // 비활성화
        loginButton.disabled = true;
    }
    else {
        loginButton.classList.remove('disabled');
        loginButton.disabled = false;
        loginButton.setAttribute('href', '/items');
    }
}

// 회원가입 버튼 활성화 여부 함수
function isValidSignupButton () {
    const existingErrorMsg = document.querySelector('.error-msg');

    if (existingErrorMsg || inputEmail.value.trim() === "" || inputPassword.value.trim() === "" || inputConfirmPassword.value.trim() === "" ) {
        signupButton.classList.add('disabled'); // 비활성화
        signupButton.disabled = true;
    }
    else {
        signupButton.classList.remove('disabled');
        signupButton.disabled = false;
        signupButton.setAttribute('href', '/signin');
    }
}

// 이메일 유효성 체크 함수
// 1. 빈 값이 아닌지 확인
// 2. 이메일 형식이 맞는지 확인
function isValidEmail (event) {

    // 이메일 정규 표현식
    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    
    // 입력 값
    const inputValue = event.target.value.trim();
    
    // 이메일 DOM 컨테이너
    const emailContainer = emailForm; 

    // 유효성 검사
    if (inputValue === "") {
        createErrorMessage(emailContainer, inputEmail, "이메일을 입력해주세요.");

    } else if (!regEmail.test(inputValue)) {
        createErrorMessage(emailContainer, inputEmail, "잘못된 이메일 형식입니다.");

    } else {
        removeErrorMessage(emailContainer, inputEmail); 

    }
}

// 비밀번호 유효성 체크 함수
// 1. 빈 값이 아닌지 확인
// 2. 8자 이상인지 확인
function isValidpassword (event) {    
    // 입력 값
    const inputValue = event.target.value.trim();
    
    // 이메일 DOM 컨테이너
    const passwordContainer = passwordForm; 

    // 유효성 검사
    if (inputValue === "") {
        createErrorMessage(passwordContainer, inputPassword, "비밀번호를 입력해주세요.");

    } else if (inputValue.length < 8) {
        createErrorMessage(passwordContainer, inputPassword, "비밀번호를 8자 이상 입력해주세요.");

    } else {
        removeErrorMessage(passwordContainer, inputPassword); 
    }
}

// 비밀번호 유효성 체크 함수
// 1. 빈 값이 아닌지 확인
// 2. 8자 이상인지 확인
// 3. 비밀번호와 동일한지 확인
function isValidConfirmPassword (event) {    
    // 입력 값
    const inputValue = event.target.value.trim();
    
    // 이메일 DOM 컨테이너
    const passwordContainer = confirmPasswordForm; 

    // 유효성 검사
    if (inputValue === "") {
        createErrorMessage(passwordContainer, inputConfirmPassword, "비밀번호를 입력해주세요.");

    } else if (inputValue.length < 8) {
        createErrorMessage(passwordContainer, inputConfirmPassword, "비밀번호를 8자 이상 입력해주세요.");

    } else if (inputValue !== inputPassword.value.trim() ) {
        createErrorMessage(passwordContainer, inputConfirmPassword, "비밀번호가 일치하지 않습니다.");
    } else {
        removeErrorMessage(passwordContainer, inputConfirmPassword); 
    }
}

// 눈모양 클릭 시 동작 함수
function onClickVisibility(event) {
    if (inputPassword.type === 'password'){
        inputPassword.type='text';
        eyeButton.children[0].setAttribute('src', '/images/login/visibility_on_btn.png');
    }
    else {
        inputPassword.type='password';
        eyeButton.children[0].setAttribute('src', '/images/login/visibility_off_btn.png');
    }
}

// 닉네임 유효성 체크
// 빈 값일 때 에러 메시지 출력
function isValidNickname (event) {
    // 입력 값
    const inputValue = event.target.value.trim();
    
    // 이메일 DOM 컨테이너
    const nickNameContainer = nickNameForm; 

    // 유효성 검사
    if (inputValue === "") {
        createErrorMessage(nickNameContainer, inputNickName, "닉네임을 입력해주세요.");
    } else {
        removeErrorMessage(nickNameContainer, inputNickName); 
    }
    
}

export {
    isValidEmail, 
    isValidpassword, 
    isValidConfirmPassword, 
    onClickVisibility,
    isValidNickname,
    isValidLoginButton, 
    isValidSignupButton,
};
