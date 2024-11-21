//input값 받아오기
const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById(
  "passwordConfirmation"
);
const togglePassword = document.querySelector("toggle-password");

//error값 받아오기
const emailError = document.getElementsByClassName("error-message")[0];
const nicknameError = document.getElementsByClassName("error-message")[1];
const passwordError = document.getElementsByClassName("error-message")[1];
const passwordConfirmationError =
  document.getElementsByClassName("error-message")[3];

//버튼 받아오기
const submitButton = document.querySelector("button[type='submit']");

// 이메일 유효성 검사
function emailTest(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

//버튼 비활성화 디폴트
submitButton.disabled = true;

// 버튼 활성화/비활성화
function buttonOn() {
  const emailValue = emailInput.value;
  const nicknameValue = nicknameInput.value;
  const passwordValue = passwordInput.value;
  const passwordConfirmationValue = passwordConfirmationInput.value;

  const emailValid = emailTest(emailValue);
  const nicknameVaild = nicknameValue.length >= 1;
  const passwordValid = passwordValue.length >= 8;
  const passwordConfirmationVaild = passwordConfirmationValue === passwordValue;

  // 이메일 에러 검수
  if (!emailValue) {
    emailError.innerHTML = "이메일을 입력해주세요.";
    emailInput.classList.add("error");
  } else if (!emailValid) {
    emailError.innerHTML = "잘못된 이메일 형식입니다.";
    emailInput.classList.add("error");
  } else {
    emailError.innerHTML = "";
    emailInput.classList.remove("error");
  }

  //닉네임 에러 검수
  if (!nicknameValue) {
    nicknameError.innerHTML = "닉네임을 입력해주세요.";
    nicknameInput.classList.add("error");
  } else {
    nicknameError.innerHTML = "";
    nicknameInput.classList.remove("error");
  }

  // 비밀번호 에러 검수
  if (!passwordValue) {
    passwordError.innerHTML = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("error");
  } else if (!passwordValid) {
    passwordError.innerHTML = "비밀번호는 8자 이상이어야 합니다.";
    passwordInput.classList.add("error");
  } else {
    passwordError.innerHTML = "";
    passwordInput.classList.remove("error");
  }

  // 비밀번호 재입력 에러 검수
  if (!passwordConfirmationValue) {
    passwordConfirmationError.innerHTML = "비밀번호를 재입력해주세요.";
    passwordConfirmationInput.classList.add("error");
  } else if (!passwordConfirmationVaild) {
    passwordConfirmationError.innerHTML = "비밀번호가 일치하지 않습니다.";
    passwordConfirmationInput.classList.add("error");
  } else {
    passwordConfirmationError.innerHTML = "";
    passwordConfirmationInput.classList.remove("error");
  }

  //조건 충족시 버튼 활성화
  submitButton.disabled = !(
    emailValid &&
    passwordValid &&
    nicknameVaild &&
    passwordConfirmationVaild
  );
}

//심화미션
togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.src = "./images/icons/eye-visible.svg";
  } else {
    passwordInput.type = "password";
    togglePassword.src = "./images/icons/eye-invisible.svg";
  }
});

//버튼 상태 업데이트
//input이 있을 떄
emailInput.addEventListener("input", buttonOn);
nicknameInput.addEventListener("input", buttonOn);
passwordInput.addEventListener("input", buttonOn);
passwordConfirmationInput.addEventListener("input", buttonOn);
//focusout 됐을 때
emailInput.addEventListener("focusout", buttonOn);
nicknameInput.addEventListener("focusout", buttonOn);
passwordInput.addEventListener("focusout", buttonOn);
passwordConfirmationInput.addEventListener("focusout", buttonOn);
