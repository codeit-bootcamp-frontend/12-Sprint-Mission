document.addEventListener("DOMContentLoaded", function () {
  const favicon = document.getElementById("favicon"); // icon
  const checkFavicon = document.getElementById("checkFavicon"); // icon
  const passwordInput = document.getElementById("password"); // 비밀번호
  const passwordCheckInput = document.getElementById("passwordCheck"); // 비밀번호 확인
  const emailInput = document.getElementById("email"); // 이메일
  const nicknameInput = document.getElementById("nickname"); // 닉네임
  const emailError = document.getElementById("emailError"); // 이메일 에러구문
  const passwordError = document.getElementById("passwordError"); // 비밀번호 에러구문
  const passwordCheckError = document.getElementById("passwordCheckError"); // 비밀번호확인 에러구문
  const nicknameError = document.getElementById("nicknameError"); // 닉네임 에러구문
  const loginButton = document.getElementById("loginButton");
  const signupButton = document.getElementById("signupButton"); // 회원가입 버튼

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

  // 비밀번호 일치 유효성 검사
  passwordCheckInput.addEventListener("blur", function () {
    if(!passwordCheckInput.value) {
      passwordCheckInput.classList.add("error");
      passwordCheckInput.classList.remove("valid");
      passwordCheckError.textContent = "비밀번호를 입력해주세요";
    } else if (passwordCheckInput.value.length < 8) {
      passwordCheckInput.classList.add("error");
      passwordCheckInput.classList.remove("valid");
      passwordCheckError.textContent = "비밀번호를 8자 이상 입력해주세요";
    } else if (passwordInput.value !== passwordCheckInput.value) {
      passwordCheckInput.classList.add("error");
      passwordCheckInput.classList.remove("valid");
      passwordCheckError.textContent = "비밀번호가 일치하지 않습니다";
    } else {
      passwordCheckInput.classList.remove("error");
      passwordCheckInput.classList.add("valid");
      passwordCheckError.textContent = "";
    }
    checkFormValidity();
  });

  // 닉네임 포커스 아웃 시 유효성 검사
  nicknameInput.addEventListener("blur", function () {
    if (!nicknameInput.value) {
      nicknameInput.classList.add("error");
      nicknameInput.classList.remove("valid");
      nicknameError.textContent = "닉네임을 입력해주세요";
    } else {
      nicknameInput.classList.remove("error");
      nicknameInput.classList.add("valid");
      nicknameError.textContent = "";
    }
    checkFormValidity();
  });

  // 폼 유효성 검사
  function checkFormValidity() {
    // 이메일과 비밀번호 모두 유효해야 버튼을 활성화
    if (emailInput.value && !emailError.textContent && 
        passwordInput.value && !passwordError.textContent && 
        passwordInput.value.length >= 8 && nicknameInput.value &&
        !nicknameError.value && !passwordCheckError.value &&
        passwordCheckInput.value === passwordInput.value) {
      signupButton.disabled = false;
    } else {
      signupButton.disabled = true;
    }
  }

  // 이메일 유효성 검사
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  // 회원가입 버튼 클릭 시 /signin 이동
  signupButton.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 제출 방지
    window.location.href = "/signin"; // /signin 이동
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

  // 비밀번호 확인 아이콘
  checkFavicon.addEventListener("click", function() {
    if(passwordCheckInput.type === "password") {
      passwordCheckInput.type = "text";
      checkFavicon.classList.remove("fa-eye-slash");
      checkFavicon.classList.add("fa-eye");
    } else {
      passwordCheckInput.type = "password";
      checkFavicon.classList.remove("fa-eye");
      checkFavicon.classList.add("fa-eye-slash");
    }
  });
});
