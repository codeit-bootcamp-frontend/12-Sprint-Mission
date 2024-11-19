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

// 로그인 버튼 활성화
function updateSubmitButtonState() {
  const emailError = document.getElementById("emailError").innerText;
  const passwordError = document.getElementById("passwordError").innerText;
  const submitButton = document.getElementById("submitButton");

  if (!emailError && !passwordError) {
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
  const passwordError = document.getElementById("passwordError").innerText;
  const emailError = document.getElementById("emailError").innerText;

  // 에러가 없을 경우 페이지 이동
  if (!passwordError && !emailError) {
    window.location.href = "/items.html";
  }
}
