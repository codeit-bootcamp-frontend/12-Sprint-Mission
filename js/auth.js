const email = document.querySelector('.emailInput');
const emailError = document.querySelector('.emailInput.inputError');
const passwordError = document.querySelector('.passwordInput.inputError');
const password = document.querySelector('.passwordInput');
const loginBtn = document.querySelector('.login.button');

function updateLoginButtonState() {
  if (!email.value || !password.value || email.classList.contains('invalid') || password.classList.contains('invalid')) {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
  }
}

email.addEventListener('blur', () => {
  if (email.value === '') {
    email.classList.add('invalid');
    emailError.textContent = '이메일을 입력해주세요.';
  } else if (!email.value.includes('@')) {
    email.classList.add('invalid');
    emailError.textContent = '잘못된 이메일 형식입니다';
  } else {
    email.classList.remove('invalid');
    emailError.textContent = '';
  }
  updateLoginButtonState();
})

password.addEventListener('blur', () => {
  if (password.value === '') {
    password.classList.add('invalid');
    passwordError.textContent = '비밀번호를 입력해주세요.';
  } else if (password.value.length < 8) {
    password.classList.add('invalid');
    passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
  } else {
    password.classList.remove('invalid');
    passwordError.textContent = '';
  }
  updateLoginButtonState();
})

email.addEventListener('input', updateLoginButtonState);
password.addEventListener('input', updateLoginButtonState);

updateLoginButtonState();

loginBtn.addEventListener('click', (e) => {
  // 버튼 타입 submit 때문에 일단 막아놓음
  e.preventDefault();
  window.location.href = '/items';
})