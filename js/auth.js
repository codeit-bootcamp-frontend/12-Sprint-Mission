const email = document.querySelector('.emailInput');
const emailError = document.querySelector('.emailInput.inputError');
const passwordError = document.querySelector('.passwordInput.inputError');
const password = document.querySelector('.passwordInput');
const loginBtn = document.querySelector('.login.button');
const nickName = document.querySelector('.nickNameInput');
const nameError = document.querySelector('.nickNameInput.inputError');
const confirmPw = document.querySelector('.confirmPassword');
const confirmPwError = document.querySelector('.confirmPassword.inputError');
const signupBtn = document.querySelector('.signup.button');

function updateLoginButtonState() {
  if (loginBtn) {
    if (!email.value || !password.value || email.classList.contains('invalid') || password.classList.contains('invalid')) {
      loginBtn.disabled = true;
    } else {
      loginBtn.disabled = false;
    }
  }
}

function updateSignupButtonState() {
  if (signupBtn) {
    if (!email.value || !password.value || !nickName.value || !confirmPw.value || email.classList.contains('invalid') || password.classList.contains('invalid') || nickName.classList.contains('invalid') || confirmPw.classList.contains('invalid')) {
      signupBtn.disabled = true;
    } else {
      signupBtn.disabled = false;
    }
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
  updateSignupButtonState();
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
  updateSignupButtonState();
})

email.addEventListener('input', updateLoginButtonState);
password.addEventListener('input', updateLoginButtonState);

updateLoginButtonState();
updateSignupButtonState();

if (nickName && nameError) {
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
}

confirmPw.addEventListener('blur', () => {
  if (confirmPw.value !== password.value) {
    confirmPw.classList.add('invalid');
    confirmPwError.textContent = '비밀번호가 일치하지 않습니다.';
  } else {
    confirmPw.classList.remove('invalid');
    confirmPwError.textContent = '';
  }
  updateSignupButtonState();
})

loginBtn.addEventListener('click', (e) => {
  // 버튼 타입 submit 때문에 일단 막아놓음
  e.preventDefault();
  window.location.href = '/items';
})

signupBtn.addEventListener('click', (e) => {
  console.log('Signup button clicked');
  e.preventDefault();
  window.location.href = '/signin';
});
