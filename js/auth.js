// 각 필드의 유효성 검사 상태를 전역변수로 저정함
let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordCheckValid = false;

const emailInput = document.getElementById('email');
const nicknameInput = document.getElementById('nickname');
const passwordInput = document.getElementById('password');
const passwordCheckInput = document.getElementById('passwordCheck');

// 에러 표시 함수
function showError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = 'block';
  input.style.border = '1px solid #f74747';
}

// 상태 초기화 함수(에러 메세지를 숨기고 입력 필드의 테두리를 원상태로 초기화)
function hideError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = 'none';
  input.style.border = 'none';
}

// 정규 표현식을 통한 이메일 유효성 검증
function emailValidation(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}

// 이메일 필드의 유효성 검사
function checkEmailValidity() {
  const emailValue = emailInput.value;

  // 에러 메세지 및 입력 필드의 상태를 먼저 초기화
  isEmailValid = false;
  hideError(emailInput, 'emailEmptyError');
  hideError(emailInput, 'emailInvalidError');

  if (!emailValue) {
    showError(emailInput, 'emailEmptyError');
  } else if (!emailValidation(emailValue)) {
    showError(emailInput, 'emailInvalidError');
  } else {
    isEmailValid = true;
    hideError(emailInput, 'emailEmptyError');
    hideError(emailInput, 'emailInvalidError');
  }

  authBtnStatusChange();
}
// emailInput이 존재한다면 이벤트 발생 / 존재하지 않으면 발생시키지 않음
if (emailInput) {
  emailInput.addEventListener('focusout', checkEmailValidity);
}

// 닉네임 필드의 유효성 검사
function checkNicknameValidity() {
  const nicknameValue = nicknameInput.value;

  isNicknameValid = false;
  hideError(nicknameInput, 'nicknameEmptyError');

  if (!nicknameValue) {
    showError(nicknameInput, 'nicknameEmptyError');
  } else {
    isNicknameValid = true;
    hideError(nicknameInput, 'nicknameEmptyError');
  }

  authBtnStatusChange();
}
if (nicknameInput) {
  nicknameInput.addEventListener('focusout', checkNicknameValidity);
}

// 비밀번호 필드의 유효성 검사
function checkPasswordValidity() {
  const passwordValue = passwordInput.value;

  isPasswordValid = false;
  hideError(passwordInput, 'passwordEmptyError');
  hideError(passwordInput, 'passwordLengthError');

  if (!passwordValue) {
    showError(passwordInput, 'passwordEmptyError');
  } else if (passwordValue.length < 8) {
    showError(passwordInput, 'passwordLengthError');
  } else {
    isPasswordValid = true;
    hideError(passwordInput, 'passwordEmptyError');
    hideError(passwordInput, 'passwordLengthError');
  }

  authBtnStatusChange();
}
if (passwordInput) {
  passwordInput.addEventListener('focusout', checkPasswordValidity);
}

// 비밀번호 확인 필드의 유효성 검사
function checkPasswordCheckValidity() {
  const passwordValue = passwordInput.value;
  const passwordCheckValue = passwordCheckInput.value;

  isPasswordCheckValid = false;
  hideError(passwordCheckInput, 'passwordCheckError');

  if (passwordValue !== passwordCheckValue) {
    showError(passwordCheckInput, 'passwordCheckError');
  } else {
    isPasswordCheckValid = true;
    hideError(passwordCheckInput, 'passwordCheckError');
  }

  authBtnStatusChange();
}
if (passwordCheckInput) {
  passwordCheckInput.addEventListener('focusout', checkPasswordCheckValidity);
}

// auth 버튼 비활성화/활성화 상태 변경
function authBtnStatusChange() {
  const authBtn = document.querySelector('.auth-btn');

  // 회원가입 페이지일때
  if (nicknameInput && passwordCheckInput) {
    if (
      isEmailValid &&
      isNicknameValid &&
      isPasswordValid &&
      isPasswordCheckValid
    ) {
      authBtn.setAttribute('href', '/html/signin.html');
      authBtn.style.backgroundColor = '#3692ff';
    } else {
      authBtn.setAttribute('href', '#');
      authBtn.style.backgroundColor = '#9ca3af';
    }
  }
  // 로그인 페이지일때
  else {
    if (isEmailValid && isPasswordValid) {
      authBtn.setAttribute('href', '/html/items.html');
      authBtn.style.backgroundColor = '#3692ff';
    } else {
      authBtn.setAttribute('href', '#');
      authBtn.style.backgroundColor = '#9ca3af';
    }
  }
}

// 비밀번호 숨기기 버튼 구현
const pwEyeBtn = document.querySelector('.pw-eye-btn');
const pwCkEyeBtn = document.querySelector('.pw-ck-eye-btn');

function passwordEyeBtnChange(e) {
  const pwInput = e.target.parentElement.querySelector('input');

  if (e.target.getAttribute('src') === '/images/login/pw-eye-btn-off.png') {
    e.target.setAttribute('src', '/images/login/pw-eye-btn-on.png');
    pwInput.setAttribute('type', 'text');
  } else {
    e.target.setAttribute('src', '/images/login/pw-eye-btn-off.png');
    pwInput.setAttribute('type', 'password');
  }
}

if (pwEyeBtn) {
  pwEyeBtn.addEventListener('click', passwordEyeBtnChange);
}
if (pwCkEyeBtn) {
  pwCkEyeBtn.addEventListener('click', passwordEyeBtnChange);
}
