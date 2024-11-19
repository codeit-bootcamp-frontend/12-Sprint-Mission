const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordInputChk = document.querySelector("#password-check");
const nameInput = document.querySelector("#name");
const loginButton = document.querySelector(".login-btn");
const signupButton = document.querySelector(".signup-btn");

const visibleButton = document.querySelectorAll(".visible-btn");
const invisibleButton = document.querySelectorAll(".invisible-btn");

// 에레메시지 생성,삭제 함수
const setError = (inputElement, message) => {
  let sibling = inputElement.parentElement.nextElementSibling;

  if (!sibling || !sibling.classList.contains("error-container")) {
    sibling = document.createElement("div");
    sibling.classList.add("error-container");
    inputElement.parentElement.insertAdjacentElement("afterend", sibling);
  }

  const existingError = sibling.querySelector(".error-message");

  if (existingError) {
    existingError.remove();
  }

  if (message) {
    const errMsg = document.createElement("p");
    errMsg.classList.add("error-message");
    errMsg.textContent = message;
    sibling.appendChild(errMsg);
    inputElement.classList.add("error-border");
  } else {
    inputElement.classList.remove("error-border");
  }
};

// 유효성 검사 함수
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPassword = (password) => password.length >= 8;
const isValidName = (name) => name.length > 0;
const isValidPasswordChk = (password, passwordChk) => password === passwordChk;

// 로그인 버튼 상태 업데이트
const updateLoginButtonState = () => {
  const isEmailValid = isValidEmail(emailInput.value);
  const isPasswordValid = isValidPassword(passwordInput.value);

  toggleButtonState(loginButton, isEmailValid && isPasswordValid);
};

// 회원가입 버튼 상태 업데이트
const signupButtonState = () => {
  const isEmailValid = isValidEmail(emailInput.value);
  const isPasswordValid = isValidPassword(passwordInput.value);
  const isNameValid = isValidName(nameInput.value);
  const isPasswordValidChk = isValidPasswordChk(passwordInput.value, passwordInputChk.value);

  toggleButtonState(signupButton, isEmailValid && isPasswordValid && isNameValid && isPasswordValidChk);
};

// 버튼 상태 토글함수 (활성화,비활성화)
const toggleButtonState = (button, isActive) => {
  button.disabled = !isActive;
  button.classList.toggle("disabled", !isActive);
};

emailInput.addEventListener("focusout", () => {
  if (!emailInput.value) {
    setError(emailInput, "이메일을 입력해주세요");
  } else if (!isValidEmail(emailInput.value)) {
    setError(emailInput, "잘못된 이메일 형식입니다");
  } else {
    setError(emailInput, null);
  }
  updateLoginButtonState();
  if (signupButton) signupButtonState();
});

passwordInput.addEventListener("focusout", () => {
  if (!passwordInput.value) {
    setError(passwordInput, "비밀번호를 입력해주세요");
  } else if (passwordInput.value.length < 8) {
    setError(passwordInput, "비밀번호를 8자 이상 입력해주세요");
  } else {
    setError(passwordInput, null);
  }
  updateLoginButtonState();
  if (signupButton) signupButtonState();
});

// 비밀번호 가리기 버튼 활성화 비활성화
visibleButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    passwordInput.type = "text";
    if (index === 1) {
      passwordInputChk.type = "text";
    }
    button.style.display = "none";
    invisibleButton[index].style.display = "block";
  });
});

invisibleButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    passwordInput.type = "password";
    if (index === 1) {
      passwordInputChk.type = "password";
    }
    button.style.display = "none";
    visibleButton[index].style.display = "block";
  });
});

nameInput.addEventListener("focusout", () => {
  if (!nameInput.value) {
    setError(nameInput, "닉네임을 입력해주세요");
  } else {
    setError(nameInput, null);
  }
  signupButtonState();
});

passwordInputChk.addEventListener("focusout", () => {
  if (passwordInput.value !== passwordInputChk.value) {
    setError(passwordInputChk, "비밀번호가 일치하지 않습니다");
  } else {
    setError(passwordInputChk, null);
  }
  signupButtonState();
});

// 초기 로그인버튼 비활성화
if (loginButton) toggleButtonState(loginButton, false);
if (signupButton) toggleButtonState(signupButton, false);
