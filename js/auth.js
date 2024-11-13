const loginForm = document.querySelector('#loginForm');
const signupForm = document.querySelector('#signupForm');
const emailInput = document.querySelector('#email');
const nicknameInput = document.querySelector('#nickname');
const passwordInput = document.querySelector('#password');
const passwordReInput = document.querySelector('#passwordRe');
const submitButton = document.querySelector('#submitBtn');

let isEmail = false;
let isNickname = false;
let isPassword = false;
let isPasswordRe = false;

const errorMsg = {
  email: {
    empty: "이메일을 입력해주세요.",
    invalid: "잘못된 이메일 형식입니다.", 
  },
  nickname: {
    empty: "닉네임을 입력해주세요.",
  },
  password: {
    empty: "비밀번호를 입력해주세요.",
    invalid: "영문 숫자 조합 8자 이상 입력해주세요.",
    fail: "비밀번호가 일치하지 않습니다.",
  },
}

function showErrorMsg (el, input, status) {
  const errorElement = el.closest('.form-item').querySelector('#errorMsg');

  el.classList.add('error');
  errorElement.textContent = errorMsg[input][status];
  errorElement.style.display = 'block';
}

function hideErrorMsg (el) {
  const errorElement = el.closest('.form-item').querySelector('#errorMsg');

  el.classList.remove('error');
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}

function validateEmail (value) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(value);
}

function checkEmailValidate () {
  const emailValue = emailInput.value.trim();
  
  isEmail = false;
  
  if (!emailValue) {
    showErrorMsg(emailInput, 'email', 'empty');
  } else if (!validateEmail(emailValue)) {
    showErrorMsg(emailInput, 'email', 'invalid');
  } else {
    isEmail = true;
    hideErrorMsg(emailInput, 'email');
  }

  formValidate();
}

function checkNicknameValidate () {
  const nicknameValue = nicknameInput.value.trim();
  
  isNickname = false;
  
  if (!nicknameValue) {
    showErrorMsg(nicknameInput, 'nickname', 'empty');
  } else {
    isNickname = true;
    hideErrorMsg(nicknameInput, 'nickname');
  }

  formValidate();
}

function validatePassword (value) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/; // 영문 숫자 조합 8자리 이상
  return passwordRegex.test(value);
}

function checkPasswordValidate (type) {
  const passwordValue = passwordInput.value.trim();
  
  isPassword = false;

  if (!passwordValue) {
    showErrorMsg(passwordInput, 'password', 'empty');
  } else if (!validatePassword(passwordValue)) {
    showErrorMsg(passwordInput, 'password', 'invalid');
  } else {
    isPassword = true;
    hideErrorMsg(passwordInput, 'password');
  }

  formValidate();
}

function checkPasswordConfirmValidate () {
  const passwordValue = passwordInput.value.trim();
  const passwordReValue = passwordReInput.value.trim();
  
  isPasswordRe = false;

  if (!passwordReValue) {
    showErrorMsg(passwordReInput, 'password', 'empty');
  } else if (!validatePassword(passwordReValue)) {
    showErrorMsg(passwordReInput, 'password', 'invalid');
  } else if (passwordValue !== passwordReValue) {
    showErrorMsg(passwordReInput, 'password', 'fail');
  } else {
    isPasswordRe = true;
    hideErrorMsg(passwordReInput, 'password');
  }

  formValidate();
}

function formValidate () {
  if (loginForm && isEmail && isPassword) {
    submitButton.disabled = false;
  } else if (signupForm && isEmail && isNickname && isPassword && isPasswordRe) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

if (emailInput) {
  emailInput.addEventListener('focusout', checkEmailValidate);
}

if (nicknameInput) {
  nicknameInput.addEventListener('focusout', checkNicknameValidate);
}

if (passwordInput) {
  passwordInput.addEventListener('input', checkPasswordValidate);
}

if (passwordReInput) {
  passwordReInput.addEventListener('input', checkPasswordConfirmValidate);
}

// 비밀번호 보기, 숨김 기능
const pwToggleButton = document.querySelectorAll('.password-blind-btn');

function passwordToggle (e) {
  const target = e.currentTarget;
  const inputElement = target.previousElementSibling;
  const inputType = inputElement.type;
  const buttonImage = target.firstElementChild;
  
  if (inputType === 'password') {
    target.classList.add('show');
    inputElement.type = 'text';
    buttonImage.alt = '비밀번호 보기 아이콘';
  } else {
    target.classList.remove('show');
    inputElement.type = 'password';
    buttonImage.alt = '비밀번호 숨김 아이콘';
  }
}

pwToggleButton.forEach((el) =>
  el.addEventListener("click", passwordToggle)
);
