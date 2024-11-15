export function isValidemail(email) {
  const emailConstraints =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const testResultEmail = emailConstraints.test(email);  // 형식 맞으면 true
  return testResultEmail;
}

export function isValidpassword(password) {
  const testResultPassword = password.length < 8;  // 8자리 미만이면 true 반환
  return testResultPassword;
}


// 로그인 버튼 활성 & 비활성 함수
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('.login-button');

export function checkInputInLogin() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const isValid = (
    isValidemail(emailValue) === true 
    && isValidpassword(passwordValue) === false
  );
  
  if (isValid) {
    loginBtn.disabled = false;
    loginBtn.classList.add('abled-btn');
  } else {
    loginBtn.disabled = true;
    loginBtn.classList.remove('abled-btn');
  }
};


// 회원가입 버튼 활성 & 비활성 함수
const nicknameInput = document.querySelector('#nickname');
const checkPasswordInput = document.querySelector('#check-password');
const signUpBtn = document.querySelector('.sign-up-button');

export function checkInputInSignUp() {
  const emailValue = emailInput.value.trim();
  const nicknameValue = nicknameInput.value.trim() === '';
  const passwordValue = passwordInput.value.trim();
  const checkValue = passwordValue === checkPasswordInput.value.trim();

  const isValid = (
    isValidemail(emailValue) === true 
    && nicknameValue === false
    && isValidpassword(passwordValue) === false
    && checkValue === true
  );

  if (isValid) {
    signUpBtn.disabled = false;
    signUpBtn.classList.add('abled-btn');
  } else {
    signUpBtn.disabled = true;
    signUpBtn.classList.remove('abled-btn');
  }
};
