import { validateEmail, validatePassword, validateNickName, validateConfirmPw, togglePasswordVisibility } from './validationUtils.js';

const email = document.querySelector('.emailInput');
const emailError = document.querySelector('.emailInput.inputError');
const password = document.querySelector('.passwordInput');
const passwordError = document.querySelector('.passwordInput.inputError');
const nickName = document.querySelector('.nickNameInput');
const nameError = document.querySelector('.nickNameInput.inputError');
const confirmPw = document.querySelector('.confirmPassword');
const confirmPwError = document.querySelector('.confirmPassword.inputError');
const signupBtn = document.querySelector('.signup.button');
const passwordToggleBtnSignup = document.querySelector('.password-wrapper .toggle-visibility');
const passwordFieldSignup = document.querySelector('.password-wrapper .passwordInput');
const confirmPasswordToggleBtn = document.querySelectorAll('.password-wrapper .toggle-visibility')[1];
const confirmPasswordField = document.querySelector('.password-wrapper .confirmPassword');

if (passwordToggleBtnSignup && passwordFieldSignup) {
  togglePasswordVisibility(passwordToggleBtnSignup, passwordFieldSignup);
}

if (confirmPasswordToggleBtn && confirmPasswordField) {
  togglePasswordVisibility(confirmPasswordToggleBtn, confirmPasswordField);
}

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
  const errorMsg = validateNickName(nickName.value);
  if (errorMsg) {
    nickName.classList.add('invalid');
    nameError.textContent = errorMsg;
  } else {
    nickName.classList.remove('invalid');
    nameError.textContent = '';
  }
  updateSignupButtonState();
})

confirmPw.addEventListener('blur', () => {
  const errorMsg = validateConfirmPw(password.value, confirmPw.value);
  if (errorMsg) {
    confirmPw.classList.add('invalid');
    confirmPwError.textContent = errorMsg;
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