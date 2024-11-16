import { validateEmail, validatePassword, togglePasswordVisibility } from './validationUtils.js';

const email = document.querySelector('.emailInput');
const emailError = document.querySelector('.emailInput.inputError');
const password = document.querySelector('.passwordInput');
const passwordError = document.querySelector('.passwordInput.inputError');
const loginBtn = document.querySelector('.login.button');
const passwordToggleBtn = document.querySelector('.password-wrapper .toggle-visibility');
const passwordField = document.querySelector('.password-wrapper .passwordInput');

if (passwordToggleBtn && passwordField) {
  togglePasswordVisibility(passwordToggleBtn, passwordField);
}

function updateLoginButtonState() {
  if (!email.value || !password.value ||
    email.classList.contains('invalid') ||
    password.classList.contains('invalid')) {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
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
  updateLoginButtonState();
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
  updateLoginButtonState();
})

email.addEventListener('input', updateLoginButtonState);
password.addEventListener('input', updateLoginButtonState);

updateLoginButtonState();

if (loginBtn) {
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/items';
  });
}