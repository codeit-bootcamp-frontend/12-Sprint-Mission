const emailInput = document.querySelector(".email__input");
const nicknameInput = document.querySelector(".nickname__input");
const passwordInput = document.querySelector(".password__input");
const repasswordInput = document.querySelector(".repassword__input");
const signupForm = document.querySelector(".signup__form");
const emailValue = document.querySelector("#email-error-message");
const nicknameValue = document.querySelector("#nickname-error-message");
const passwordValue = document.querySelector("#password-error-message");
const rePasswordValue = document.querySelector("#repassword-error-message");
const signupButton = document.querySelector(".signup__button");
const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 폼 기본 동작 막기

  if (!signupButton.disabled) {
    window.location.href = "../html/signin.html";
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

function onNicknameCheck() {
  nicknameInput.addEventListener("focusout", () => {
    if (nicknameInput.value === "") {
      nicknameValue.innerText = "닉네임을 입력해주세요";
    } else {
      nicknameValue.innerText = "";
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

function onPasswordReCheck() {
  repasswordInput.addEventListener("input", () => {
    if (repasswordInput.value != passwordInput.value) {
      rePasswordValue.innerText = "비밀번호가 일치하지 않습니다.";
    } else {
      rePasswordValue.innerText = "";
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
    !nicknameValue.innerText &&
    !passwordValue.innerText &&
    emailValidation.test(emailInput.value) == true &&
    passwordInput.value.length >= 8 &&
    repasswordInput.value === passwordInput.value
  ) {
    isValid = true;
  } else {
    isValid = false;
  }

  if (isValid == true) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
}

emailInput.addEventListener("input", checkInputs);
nicknameInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);
repasswordInput.addEventListener("input", checkInputs);

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

function ReonEyeClicked() {
  const repasswordEye = document.querySelector(".repassword__input");
  const reeyeIcon = document.querySelector(".repassword-eye");

  if (repasswordEye.type === "password") {
    repasswordEye.type = "text";
    reeyeIcon.src = "../images/openEyeIcon.png";
  } else if (repasswordEye.type === "text") {
    repasswordEye.type = "password";
    reeyeIcon.src = "../images/closeEyeIcon.png";
  }
}
