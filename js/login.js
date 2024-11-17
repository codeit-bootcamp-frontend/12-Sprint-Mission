const emailInput = document.querySelector(".email__input");
const passwordInput = document.querySelector(".password__input");
const loginForm = document.querySelector(".login__form");
const emailValue = document.querySelector("#email-error-message");
const passwordValue = document.querySelector("#password-error-message");
const loginButton = document.querySelector(".login__button");
const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 폼 기본 동작 막기

  if (!loginButton.disabled) {
    window.location.href = "../html/items.html";
  }
});

function onEmailCheck() {
  emailInput.addEventListener("focusout", () => {
    if (emailInput.value === "") {
      emailValue.innerText = "이메일을 입력해주세요.";
    } else if (!emailValidation.test(emailInput.value)) {
      emailValue.innerText = "잘못된 이메일 형식입니다.";
    } else {
      emailValue.innerText = "";
    }
  });
  checkInputs();
}

function onPasswordCheck() {
  passwordInput.addEventListener("focusout", () => {
    if (passwordInput.value == "") {
      passwordValue.innerText = "비밀번호를 입력해주세요.";
    } else if (passwordInput.value.length < 8) {
      passwordValue.innerText = "비밀번호를 8자 이상 입력해주세요.";
    } else {
      passwordValue.innerText = "";
    }
  });
  checkInputs();
}

function checkInputs() {
  let isValid = false;

  if (
    emailInput.value &&
    passwordInput.value &&
    !emailValue.innerText &&
    !passwordValue.innerText &&
    emailValidation.test(emailInput.value) == true &&
    passwordInput.value.length >= 8
  ) {
    isValid = true;
  } else {
    isValid = false;
  }

  if (isValid == true) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

emailInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

function onEyeClicked() {
  const passwordEye = document.querySelector(".password__input");
  const eyeIcon = document.querySelector(".password-eye");

  if (passwordEye.type === "password") {
    passwordEye.type = "text";
    eyeIcon.src = "../images/openEyeIcon.png";
  } else if (passwordEye.type === "text") {
    passwordEye.type = "password";
    eyeIcon.src = "../images/closeEyeIcon.png";
  }
}
