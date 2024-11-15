document.addEventListener("DOMContentLoaded", () => {
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const emailErrorMessage = document.querySelector(".email__error-message");
  const passwordErrorMessage = document.querySelector(
    ".password__error-message"
  );
  const loginButton = document.querySelector(".login-button");

  function disabledLoginButton() {
    // display가 block 상태이면 결국 에러메세지가 이미 출력중
    if (
      emailErrorMessage.textContent === "" &&
      passwordErrorMessage.textContent === ""
    ) {
      loginButton.disabled = false;
      loginButton.style.backgroundColor = "#3692ff";
    } else {
      loginButton.disabled = true;
      loginButton.style.backgroundColor = "#9ca3af";
    }
  }

  // 이메일 유효성 검사 함수
  // 정규식을 활용하여 이메일 형식 검사 및 value값 유무 확인
  function validateEmail() {
    const emailValue = inputEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 정규식

    if (!emailValue) {
      emailErrorMessage.textContent = "이메일을 입력해주세요.";
      emailErrorMessage.style.display = "block";
      inputEmail.classList.add("error");
    } else if (!emailRegex.test(emailValue)) {
      emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
      emailErrorMessage.style.display = "block";
      inputEmail.classList.add("error");
    } else {
      emailErrorMessage.textContent = "";
      emailErrorMessage.style.display = "block";
      inputEmail.classList.remove("error");
    }

    disabledLoginButton();
  }

  // 비밀번호 8자리이상인지, 비밀번호의 value값 유무 확인하는 함수
  function validatePassword() {
    const passwordValue = inputPassword.value.trim();

    if (!passwordValue) {
      passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
      passwordErrorMessage.style.display = "block";
      inputPassword.classList.add("error");
    } else if (passwordValue.length < 8) {
      passwordErrorMessage.textContent = "비밀번호를 8자이상 입력해주세요.";
      passwordErrorMessage.style.display = "block";
      inputPassword.classList.add("error");
    } else {
      passwordErrorMessage.textContent = "";
      passwordErrorMessage.style.display = "none";
      inputPassword.classList.remove("error");
    }

    disabledLoginButton();
  }

  inputEmail.addEventListener("focusout", validateEmail);
  inputPassword.addEventListener("focusout", validatePassword);

  // loginButton 클릭 시 /items로 이동
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/items";
  });
});
