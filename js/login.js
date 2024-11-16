const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const loginButton = document.querySelector('.login-form__button')
const eyeicon = document.querySelector('.login-form__input--eye-icon')

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
function emailError(input) {
  let emailError = input.parentElement.querySelector('.login-form__input--error-message');
  if (!emailError) {
    emailInput.classList.add("login-form__input--error");
    emailError = document.createElement('p');
    emailError.textContent = '잘못된 이메일 형식입니다.';
    emailError.classList.add('login-form__input--error-message');
    emailInput.parentElement.appendChild(emailError);
  }
}

// Create Passweord Error Message
function passwordError(input) {
  let passwordError = input.parentElement.querySelector('.login-form__input--error-message');
  if (!passwordError) {
    passwordInput.classList.add("login-form__input--error");
    passwordError = document.createElement('p');
    passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
    passwordError.classList.add('login-form__input--error-message');
    passwordInput.parentElement.appendChild(passwordError);
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
  if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
      loginButton.classList.add('login-form__button--Enable');
      loginButton.disabled = false;
    } else {
      loginButton.classList.remove('login-form__button--Enable');
      loginButton.disabled = true;
    }
  }

//Email Error
emailInput.addEventListener('focusout', function(){
  if(!validateEmail(emailInput.value)) {
    emailError(emailInput);
  } else {
    removeError(emailInput);
  }
  updateLoginButtonState()
});

//Password Error
passwordInput.addEventListener('focusout', function () {
  if (!validatePassword(passwordInput.value)) {
    passwordError(passwordInput);
  } else {
    removeError(passwordInput)
  }
  updateLoginButtonState()
});

//Enable Login Button 
loginButton.addEventListener('click', function () {
  if (loginButton.classList.contains('login-form__button--Enable')) {
    window.location.href = '/items';
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