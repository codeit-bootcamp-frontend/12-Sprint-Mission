import { validateEmail, validatePassword } from './validationUtils.js';

const email = document.querySelector('.emailInput');
const emailError = document.querySelector('.emailInput.inputError');
const password = document.querySelector('.passwordInput');
const passwordError = document.querySelector('.passwordInput.inputError');
const nickName = document.querySelector('.nickNameInput');
const nameError = document.querySelector('.nickNameInput.inputError');
const confirmPw = document.querySelector('.confirmPassword');
const confirmPwError = document.querySelector('.confirmPassword.inputError');
const signupBtn = document.querySelector('.signup.button');

function updateSignupButtonState() {
  if (!email.value || !password.value ||
    !nickName.value || !confirmPw.value ||
    email.classList.contains('invalid') ||
    password.classList.contains('invalid') ||
    nickName.classList.contains('invalid') ||
    confirmPw.classList.contains('invalid')) {
    signupBtn.disabled = true;
  } else {
    signupBtn.disabled = false;
  }
}

email.addEventListener('blur', () => {
  const errorMsg = validateEmail(email.value);
  if (errorMsg) {
    email.classList.add('invalid');
    emailError.textContent = errorMsg;
  } else {
    email.classList.remove('invalid');
    emailError.textContent = '';
  }
  updateSignupButtonState();
})

password.addEventListener('blur', () => {
  const errorMsg = validatePassword(password.value);
  if (errorMsg) {
    password.classList.add('invalid');
    passwordError.textContent = errorMsg;
  } else {
    password.classList.remove('invalid');
    passwordError.textContent = '';
  }
  updateSignupButtonState();
})

nickName.addEventListener('blur', () => {
  if (nickName.value === '') {
    nickName.classList.add('invalid');
    nameError.textContent = '닉네임을 입력해주세요';
  } else {
    nickName.classList.remove('invalid');
    nameError.textContent = '';
  }
  updateSignupButtonState();
})

confirmPw.addEventListener('blur', () => {
  if (confirmPw.value === '') {
    confirmPw.classList.add('invalid');
    confirmPwError.textContent = '비밀번호를 한번 더 입력해주세요';
  } else if (confirmPw.value !== password.value) {
    confirmPw.classList.add('invalid');
    confirmPwError.textContent = '비밀번호가 일치하지 않습니다';
  } else {
    confirmPw.classList.remove('invalid');
    confirmPwError.textContent = '';
  }
  updateSignupButtonState();
})

email.addEventListener('input', updateSignupButtonState);
password.addEventListener('input', updateSignupButtonState);
nickName.addEventListener('input', updateSignupButtonState);
confirmPw.addEventListener('input', updateSignupButtonState);

updateSignupButtonState();

if (signupBtn) {
  signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/signin';
  });
}