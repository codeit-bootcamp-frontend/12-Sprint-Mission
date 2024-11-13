const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('#submitBtn');

let isEmail = false;
let isPassword = false;

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
    invalid: "비밀번호를 8자 이상 입력해주세요.",
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

function validatePassword (value) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/; // 영문 숫자 조합 8자리 이상
  return passwordRegex.test(value);
}

function checkPasswordValidate () {
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

function formValidate () {
  if (loginForm && isEmail && isPassword) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}


if (emailInput) {
  emailInput.addEventListener('focusout', checkEmailValidate);
}

if (passwordInput) {
  passwordInput.addEventListener('focusout', checkPasswordValidate);
}
