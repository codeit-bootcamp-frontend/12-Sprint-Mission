const emailInput = document.getElementById('email')
const nameInput = document.getElementById('user-name')
const passwordInput = document.getElementById('password')
const loginButton = document.querySelector('.login-form__button')
const eyeicon = document.querySelector('.login-form__input--eye-icon')
const passwordRepeatInput = document.getElementById('password-repeat');
const eyeiconRepeat = document.querySelectorAll('.login-form__input--eye-icon')[1];


//Email Validation
function validateEmail(email) {
  const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+/;
  return regex.test(email);
}

//Password Validation
function validatePassword(password) {
  return password.length >= 8;
}

// Create Email Error Message
function emailError(input, message) {
  let emailError = input.parentElement.querySelector('.login-form__input--error-message');
  if (!emailError) {
    emailInput.classList.add("login-form__input--error");
    emailError = document.createElement('p');
    emailError.textContent = message;
    emailError.classList.add('login-form__input--error-message');
    emailInput.parentElement.appendChild(emailError);
  }
}

// Create Nickname Error Message
function NicknameError(input, message) {
  let NicknameError = input.parentElement.querySelector('.login-form__input--error-message');
  if (!NicknameError) {
    nameInput.classList.add("login-form__input--error");
    NicknameError = document.createElement('p');
    NicknameError.textContent = message;
    NicknameError.classList.add('login-form__input--error-message');
    nameInput.parentElement.appendChild(NicknameError);
  }
}

// Create Passweord Error Message
function passwordError(input, message) {
  let passwordError = input.parentElement.querySelector('.login-form__input--error-message');
  if (!passwordError) {
    passwordInput.classList.add("login-form__input--error");
    passwordError = document.createElement('p');
    passwordError.textContent = message;
    passwordError.classList.add('login-form__input--error-message');
    passwordInput.parentElement.appendChild(passwordError);
  }
}

// Create Passweord Repeat Error Message
function passwordRepeatError(input, message) {
  let passwordRepeatError = input.parentElement.querySelector('.login-form__input--error-message');
  if (!passwordRepeatError) {
    passwordRepeatInput.classList.add("login-form__input--error");
    passwordRepeatError = document.createElement('p');
    passwordRepeatError.textContent = message;
    passwordRepeatError.classList.add('login-form__input--error-message');
    passwordRepeatInput.parentElement.appendChild(passwordRepeatError);
  }
}

// Remove Error
function removeError(input) {
  const error = input.parentElement.querySelector('.login-form__input--error-message');
  if (error) {
    error.remove();
    input.classList.remove("login-form__input--error");
  }
}

//Up Date Login Button State
function updateLoginButtonState() {
  if (validateEmail(emailInput.value) && validatePassword(passwordInput.value) && passwordInput.value === passwordRepeatInput.value && nameInput.value !== "") {
      loginButton.classList.add('login-form__button--Enable');
      loginButton.disabled = false;
    } else {
      loginButton.classList.remove('login-form__button--Enable');
      loginButton.disabled = true;
    }
  }

//Email Error
emailInput.addEventListener('focusout', function(){
  if (emailInput.value === "") {
    removeError(emailInput);
    emailError(emailInput, '이메일 입력해');
  } else if (!validateEmail(emailInput.value)) {
    removeError(emailInput);
    emailError(emailInput, '잘못된 이메일 형식입니다.');
  } else {
    removeError(emailInput);
  }
  updateLoginButtonState()
});

//Nickname Error
nameInput.addEventListener('focusout', function(){
  if (nameInput.value === "") {
    NicknameError(nameInput, '별명 입력해');
  } else {
    removeError(nameInput);
  }
  updateLoginButtonState()
});


//Password Error
passwordInput.addEventListener('focusout', function () {
  if(passwordInput.value === ""){
    removeError(passwordInput)
    passwordError(passwordInput, '비밀번호를 입력해');
  } else if (!validatePassword(passwordInput.value)) {
    removeError(passwordInput)
    passwordError(passwordInput, '비밀번호를 8자 이상 입력해주세요.');
  } else {
    removeError(passwordInput)
  }
  updateLoginButtonState()
});

//Password repeat Error
passwordRepeatInput.addEventListener('focusout', function () {
  if(passwordInput.value !== passwordRepeatInput.value){
    passwordRepeatError(passwordRepeatInput, '비밀번호 일치 안해');
  } else {
    removeError(passwordRepeatInput)
  }
  updateLoginButtonState()
});


//Enable Login Button 
loginButton.addEventListener('click', function () {
  if (loginButton.classList.contains('login-form__button--Enable')) {
    window.location.href = '/signin';
  }
});

//Password Type Change
eyeicon.addEventListener('click', function(){
  if(passwordInput.type === "password") {
    passwordInput.type = "text"
    eyeicon.src = './img/eyeicon.png'
  } else {
    passwordInput.type = "password"
    eyeicon.src = './img/password.png'
  }
})

//Password-Repeat Type Change
eyeiconRepeat.addEventListener('click', function(){
  if(passwordRepeatInput.type === "password") {
    passwordRepeatInput.type = "text"
    eyeiconRepeat.src = './img/eyeicon.png'
  } else {
    passwordRepeatInput.type = "password"
    eyeiconRepeat.src = './img/password.png'
  }
})