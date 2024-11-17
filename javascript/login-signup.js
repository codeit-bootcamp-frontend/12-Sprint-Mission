// 이메일함수
function emailCheck () {
  const email = document.getElementById("email").value;
  const emailChecking = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorMessage = document.getElementById("email-error-message");
  const inputError = document.getElementById("email");

  if (email === "") {
    errorMessage.innerText = "이메일을 입력해주세요."
    inputError.classList.add("error")
  } else if (emailChecking.test(email)) {
    errorMessage.innerText = "";
    inputError.classList.remove("error")
  } else {
    errorMessage.innerText = "잘못된 이메일 형식입니다.";
    inputError.classList.add("error")
  }
}

// 닉네임 함수
function nickNameCheck () {
  const nickName = document.getElementById("nick-name").value;
  const errorMessage = document.getElementById("nickname-error-message");
  const inputError = document.getElementById("nick-name");

  if (nickName === "") {
    errorMessage.innerText = "닉네임을 입력해주세요."
    inputError.style.borderColor = '1px solid #f74747';
  } else {
    errorMessage.innerText = ""
  }
}

// 비밀번호함수
function pwdCheck () {
  const pwd = document.getElementById("password").value;
  const pwdChecking =  /^.{8,}$/;;
  const errorMessage = document.getElementById("pwd-error-message");
  const inputError = document.getElementById("password");

  if (pwd === "") {
    errorMessage.innerText = "비밀번호를 입력해주세요."
    inputError.style.borderColor = "1px solid #f74747";
  } else if (pwdChecking.test(pwd)) {
    errorMessage.innerText = "";
  } else {
    errorMessage.innerText = "비밀번호를 8자 이상 입력해주세요.";
  }
}

// 비밀번호 확인 함수
function pwdCrossCheck () {
  const pwdCheck = document.getElementById("password-check").value;
  const pwd = document.getElementById("password").value;
  const errorMessage = document.getElementById("pwdd-error-message");

  if (pwd!=pwdCheck) {
    errorMessage.innerText = "비밀번호가 일치하지 않습니다."
  } else {
    errorMessage.innerText = ""
  }
}

document.getElementById("login-button").addEventListener("click", function () {
  alert("축하합니다! 회원가입이 완료되었습니다.");
  window.location.href = "login.html"; // 로그인 페이지로 이동
});