document.addEventListener("DOMContentLoaded", function () {
  const favicon = document.getElementById("favicon"); // icon
  const passwordInput = document.getElementById("password"); // 비밀번호
  const emailInput = document.getElementById("email"); // 이메일
  const emailError = document.getElementById("emailError"); // 이메일 에러구문
  const passwordError = document.getElementById("passwordError"); // 비밀번호 에러구문
  const loginButton = document.getElementById("loginButton"); // 로그인 버튼

  // 이메일 포커스 아웃 시 유효성 검사
  emailInput.addEventListener('blur', function () {
    if (!emailInput.value) {
      emailInput.classList.add('error');
      emailInput.classList.remove("valid");
      emailError.textContent = "이메일을 입력해주세요";
    } else if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("error");
      emailInput.classList.remove("valid");
      emailError.textContent = "잘못된 이메일 형식입니다";
    } else {
      emailInput.classList.remove("error");
      emailInput.classList.add("valid");
      emailError.textContent = "";
    }
    checkFormValidity();
  });

  // 비밀번호 포커스 아웃 시 유효성 검사
  passwordInput.addEventListener("blur", function () {
    if (!passwordInput.value) {
      passwordInput.classList.add("error");
      passwordInput.classList.remove("valid");
      passwordError.textContent = "비밀번호를 입력해주세요";
    } else if (passwordInput.value.length < 8) {
      passwordInput.classList.add("error");
      passwordInput.classList.remove("valid");
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요";
    } else {
      passwordInput.classList.remove("error");
      passwordInput.classList.add("valid");
      passwordError.textContent = "";
    }
    checkFormValidity();
  });

  // 폼 유효성 검사
  function checkFormValidity() {
    // 이메일과 비밀번호 모두 유효해야 버튼을 활성화
    if (emailInput.value && !emailError.textContent && 
        passwordInput.value && !passwordError.textContent && 
        passwordInput.value.length >= 8) {
      loginButton.disabled = false;
    } else {
      loginButton.disabled = true;
    }
  }

  // 이메일 유효성 검사
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  // 로그인 버튼 클릭 시 /items로 이동
  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 제출 방지
    window.location.href = "/items"; // /items로 이동
  });

  //////////////////////////////////////////////////////////////////////////
  // 비밀번호 아이콘
  favicon.addEventListener("click", function () {
    if(passwordInput.type === "password") {
      passwordInput.type = "text";
      favicon.classList.remove("fa-eye-slash");
      favicon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      favicon.classList.remove("fa-eye");
      favicon.classList.add("fa-eye-slash");
    }
  });
});
