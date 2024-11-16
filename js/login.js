(function () {
  const emailInput = document.querySelector("#login--id");
  const emailError = document.querySelector(".form__email-error");

  const passwordInput = document.querySelector("#login--password");
  const passwordError = document.querySelector(".form__password-error");

  const hidePassword = document.querySelector(".form__password-hidden");

  const loginBtn = document.querySelector(".form__button");

  // 이메일 유효성 검사
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email); // true or false 반환
  }

  // 이메일 체크
  emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();

    if (email === "") {
      emailError.textContent = "이메일을 입력해주세요.";
      emailError.parentElement.classList.add("form-error");
    } else if (!isValidEmail(email)) {
      emailError.textContent = "잘못된 이메일 형식입니다.";
      emailError.parentElement.classList.add("form-error");
    } else {
      emailError.textContent = "";
      emailError.parentElement.classList.remove("form-error");
    }
  });


  //비밀번호 체크
  passwordInput.addEventListener('input', () => {
    const password = passwordInput.value.trim();
    if (password === "") {
      passwordError.textContent = "비밀번호를 입력해주세요.";
      passwordError.parentElement.classList.add("form-error");
      return false;
    }
    if (password.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordError.parentElement.classList.add("form-error");
      return false;
    } else {
      passwordError.textContent = "";
      passwordError.parentElement.classList.remove("form-error");
      return true;
    }
  });



  //로그인 버튼 활성화 / 비활성화
  function checkLogin() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const checkListLogin = (
      isValidEmail(email) === true &&
      password !== ""
    )
    if (checkListLogin) {
      loginBtn.disabled = false;
      loginBtn.classList.add("active");
    } else {
      loginBtn.disabled = true;
      loginBtn.classList.remove("active");
    }
  }

  emailInput.addEventListener("input", checkLogin);
  passwordInput.addEventListener("input", checkLogin);

  //로그인 버튼 클릭 시 페이지 이동
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/html/items.html";
  });

  //눈모양 버튼 클릭시 비밀번호&비밀번호 확인 보이기
  hidePassword.addEventListener("click", (e) => {
    e.preventDefault();
    const password = passwordInput;
    if (password.type == "password") {
      password.type = "text";
    } else if (password.type == "text") {
      password.type = "password";
    }
  });
})();
