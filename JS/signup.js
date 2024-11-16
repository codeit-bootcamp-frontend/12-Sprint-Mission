// 이메일 유효성 검사
function validateEmail() {
  const emailElement = document.getElementById("email");
  const emailError = document.getElementById("emailError");

// 이메일 정규 표현식
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // 이메일 형식 검사
  if (!emailElement.value.trim()) {
      emailError.innerText = "이메일을 입력해주세요.";
      emailElement.classList.add("input-error");
  } else if (!emailRegex.test(emailElement.value)) {
      emailError.innerText = "잘못된 이메일 형식입니다.";
      emailElement.classList.add("input-error");
  } else {
      emailError.innerText = "";
      emailElement.classList.remove("input-error");
  }

  updateSubmitButtonState();
}

// 닉네임 유효성 검사
function validateNickname() {
  const nickNameElement = document.getElementById("nickname");
  const nicknameError = document.getElementById("nicknameError");

  if (!nickNameElement.value.trim()) {
    nicknameError.innerText = "닉네임을 입력해주세요.";
    nickNameElement.classList.add("input-error");
  } else {
    nicknameError.innerText = "";
    nickNameElement.classList.remove("input-error");
  }

  updateSubmitButtonState();
}

// 비밀번호 유효성 검사
function validatePassword() {
  const passwordElement = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");

  // 비밀번호 길이 검사
  if (!passwordElement.value.trim()) {
      passwordError.innerText = "비밀번호를 입력해주세요.";
      passwordElement.classList.add("input-error");
  } else if (passwordElement.value.length < 8) {
      passwordError.innerText = "비밀번호를 8자 이상 입력해주세요.";
      passwordElement.classList.add("input-error");
  } else {
      passwordError.innerText = "";  
      passwordElement.classList.remove("input-error");
  }

  updateSubmitButtonState();
}

// 비밀번호 일치 검사
function validatePasswordCheck() {
  const passwordElement = document.getElementById("password");
  const confirmPasswordElement = document.getElementById("password-check");
  const confirmPasswordError = document.getElementById("passwordCheckError");

  if (confirmPasswordElement.value.trim() && confirmPasswordElement.value !== passwordElement.value) {
      confirmPasswordError.innerText = "비밀번호가 일치하지 않습니다.";
      confirmPasswordElement.classList.add("input-error");
  } else {
      confirmPasswordError.innerText = "";
      confirmPasswordElement.classList.remove("input-error");
  }
  updateSubmitButtonState();
}

// 비밀번호 표시, 숨김
const pwBtn = document.querySelectorAll('.password-btn');

function passwordToggle (e) {
  const target = e.currentTarget;
  const inputElement = target.previousElementSibling;
  const inputType = inputElement.type;
  const buttonImage = target.firstElementChild;

  if (inputType === 'password') {
    target.classList.add('show');
    inputElement.type = 'text';
    buttonImage.alt = '비밀번호 표시';
  } else {
    target.classList.remove('show');
    inputElement.type = 'password';
    buttonImage.alt = '비밀번호 숨김';
  }
}

pwBtn.forEach((el) =>
  el.addEventListener("click", passwordToggle)
);

// 회원가입 버튼 활성화
function updateSubmitButtonState() {
  const emailError = document.getElementById("emailError").innerText;
  const nicknameError = document.getElementById("nicknameError").innerText;
  const passwordError = document.getElementById("passwordError").innerText;
  const passwordCheckError = document.getElementById("passwordCheckError").innerText;
  const submitButton = document.getElementById("submitButton");

  if (!emailError && !nicknameError && !passwordError && !passwordCheckError) {
      submitButton.disabled = false;
      submitButton.classList.remove("disabled-button");
      submitButton.classList.add("abled-button");
  } else {
      submitButton.disabled = true;
      submitButton.classList.remove("abled-button");
      submitButton.classList.add("disabled-button");
  }
}

// 제출
function submitForm() {
  const emailError = document.getElementById("emailError").innerText;
  const nicknameError = document.getElementById("nicknameError").innerText;
  const passwordError = document.getElementById("passwordError").innerText;
  const passwordCheckError = document.getElementById("passwordCheckError").innerText;

  // 에러가 없을 경우 페이지 이동
  if (!emailError && !nicknameError && !passwordError && !passwordCheckError) {
    window.location.href = "/signin.html";
  }
}
