document.addEventListener("DOMContentLoaded", function () {
  // signin.html
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const loginEmailError = document.getElementById("loginEmailError");
  const loginPasswordError = document.getElementById("loginPasswordError");

  // signup.html
  const email = document.getElementById("email");
  const nickname = document.getElementById("nickname");
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("passwordConfirmation");
  const emailError = document.getElementById("emailError");
  const nicknameError = document.getElementById("nicknameError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // 이메일 유효성 검사
  if (loginEmail) {
    loginEmail.addEventListener("focusout", function () {
      if (loginEmail.value === "") {
        loginEmailError.innerHTML = "이메일을 입력해 주세요.";
        loginEmail.classList.add("error-border");
      } else if (!loginEmail.checkValidity()) {
        loginEmailError.innerHTML = "잘못된 이메일 형식입니다.";
        loginEmail.classList.add("error-border");
      } else {
        loginEmailError.innerHTML = "";
        loginEmail.classList.remove("error-border");
      }
    });
  }

  // 비밀번호 유효성 검사
  if (loginPassword) {
    loginPassword.addEventListener("focusout", function () {
      if (loginPassword.value === "") {
        loginPasswordError.innerHTML = "비밀번호를 입력해 주세요.";
        loginPassword.classList.add("error-border");
      } else if (loginPassword.value.length < 8) {
        loginPasswordError.innerHTML = "비밀번호를 8자 이상 입력해 주세요.";
        loginPassword.classList.add("error-border");
      } else {
        loginPasswordError.innerHTML = "";
        loginPassword.classList.remove("error-border");
      }
    });
  }

  // signin.html 폼 제출 유효성 검사
  const signinForm = document.getElementById("signinForm");
  if (signinForm) {
    signinForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (
        loginEmail.value === "" ||
        !loginEmail.checkValidity() ||
        loginPassword.value === "" ||
        loginPassword.value.length < 8
      ) {
        alert("이메일과 비밀번호를 올바르게 입력해 주세요.");
      } else {
        window.location.href = "./items.html"; //폼 유효성 통과 후 페이지 이동
      }
    });
  }

  // 이메일 유효성 검사
  if (email) {
    email.addEventListener("focusout", function () {
      if (email.value === "") {
        emailError.innerHTML = "이메일을 입력해 주세요.";
        email.classList.add("error-border");
      } else if (!email.checkValidity()) {
        emailError.innerHTML = "잘못된 이메일 형식입니다.";
        email.classList.add("error-border");
      } else {
        emailError.innerHTML = "";
        email.classList.remove("error-border");
      }
    });
  }

  // 닉네임 유효성 검사
  if (nickname) {
    nickname.addEventListener("focusout", function () {
      if (nickname.value === "") {
        nicknameError.innerHTML = "닉네임을 입력해 주세요.";
        nickname.classList.add("error-border");
      } else {
        nicknameError.innerHTML = "";
        nickname.classList.remove("error-border");
      }
    });
  }

  // 비밀번호 유효성 검사
  if (password) {
    password.addEventListener("focusout", function () {
      if (password.value === "") {
        passwordError.innerHTML = "비밀번호를 입력해 주세요.";
        password.classList.add("error-border");
      } else if (password.value.length < 8) {
        passwordError.innerHTML = "비밀번호를 8자 이상 입력해 주세요.";
        password.classList.add("error-border");
      } else {
        passwordError.innerHTML = "";
        password.classList.remove("error-border");
      }
    });
  }

  // 비밀번호 확인 유효성 검사
  if (passwordConfirmation) {
    passwordConfirmation.addEventListener("focusout", function () {
      if (passwordConfirmation.value !== password.value) {
        confirmPasswordError.innerHTML = "비밀번호가 일치하지 않습니다.";
        passwordConfirmation.classList.add("error-border");
      } else {
        confirmPasswordError.innerHTML = "";
        passwordConfirmation.classList.remove("error-border");
      }
    });
  }

  // signup.html 폼 제출 유효성 검사
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (
        email.value === "" ||
        !email.checkValidity() ||
        nickname.value === "" ||
        password.value === "" ||
        password.value.length < 8 ||
        passwordConfirmation.value !== password.value
      ) {
        alert("회원 정보를 올바르게 입력해 주세요.");
      } else {
        window.location.href = "./signin.html"; // 폼 유효성 통과 후 페이지 이동
      }
    });
  }

  // 비밀번호 보이기/숨기기 기능 추가
  const togglePasswordIcons = document.querySelectorAll(".toggle-password");

  togglePasswordIcons.forEach((icon) => {
    //.toggle-password 요소 순회
    icon.addEventListener("click", function () {
      const input = icon.previousElementSibling;
      if (input.type === "password") {
        input.type = "text"; // 비밀번호를 보이도록 설정
        icon.src = "images/icons/eye-visible.svg"; // 사선 없는 이미지로 변경
      } else {
        input.type = "password"; // 비밀번호를 숨기도록 설정
        icon.src = "images/icons/eye-invisible.svg"; // 사선 있는 이미지로 변경
      }
    });
  });
});
