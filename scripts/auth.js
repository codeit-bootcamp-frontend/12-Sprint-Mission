document.addEventListener("DOMContentLoaded", () => {
  let isEmailValid = false;
  let isNicknameValid = false;
  let isPasswordValid = false;
  let isPasswordConfirmationValid = false;

  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const emailInput = document.querySelector('#email');
  const nicknameInput = document.querySelector('#nickname');
  const passwordInput = document.querySelector('#password');
  const passwordConfirmationInput = document.querySelector('#passwordConfirmation');
  const submitButton = document.querySelector('button[type="submit"]');

  // 오류 메세지 노출 함수
  function showError(input, errorClass) {
    const errorElement = document.getElementsByClassName(errorClass)[0];
    errorElement.style.display = "block";
    input.style.border = "1px solid #f74747";
  }
  
  // 오류 메세지 숨김 함수
  function hideError(input, errorClass) {
    const errorElement = document.getElementsByClassName(errorClass)[0];
    errorElement.style.display = "none";
    input.style.border = "none";
  }

  // 이메일 형식 유효성 검사
  function validateEmailString(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }
  
  // 이메일 필드 유효성 검사
  function checkEmailValidity() {
    // 입력 필드 선택 후 아무것도 입력 안 하고 필드 focus out하는 경우 걸러내기 위함
    const emailValue = emailInput.value.trim();

    // 오류 메세지 및 입력 필드 상태 초기화
    isEmailValid = false;
    hideError(emailInput, "email-empty-error");
    hideError(emailInput, "email-invalid-error");

    if (!emailValue) {
      showError(emailInput, "email-empty-error");
    } else if (!validateEmailString(emailValue)) {
      showError(emailInput, "email-invalid-error");
    } else {
      isEmailValid = true;
      hideError(emailInput, "email-empty-error");
      hideError(emailInput, "email-invalid-error");
    }

    updateSubmitButtonState();
  }

  // 닉네임 필드 유효성 검사
  function checkNicknameValidity() {
    const nicknameValue = nicknameInput.value.trim();

    isNicknameValid = false;
    hideError(nicknameInput, "nickname-empty-error");

    if (!nicknameValue) {
      showError(nicknameInput, "nickname-empty-error");
    } else {
      isNicknameValid = true;
      hideError(nicknameInput, "nickname-empty-error");
    }

    updateSubmitButtonState();
  }

  // 비밀번호 필드 유효성 검사
  function checkPasswordValidity() {
    const passwordValue = passwordInput.value.trim();

    isPasswordValid = false;
    hideError(passwordInput, "password-empty-error");
    hideError(passwordInput, "password-invalid-error");

    if (!passwordValue) {
      showError(passwordInput, "password-empty-error");
    } else if (passwordValue.length < 8) {
      showError(passwordInput, "password-invalid-error");
    } else {
      isPasswordValid = true;
      hideError(passwordInput, "password-empty-error");
      hideError(passwordInput, "password-invalid-error");
    }

    updateSubmitButtonState();
  }

  // 비밀번호 확인 필드 유효성 검사
  function checkPasswordConfirmationValidity() {
    const passwordConfirmationValue = passwordConfirmationInput.value.trim();

    isPasswordConfirmationValid = false;
    hideError(passwordConfirmationInput, "password-confirmation-error");

    if (!passwordConfirmationValue) {
      showError(passwordConfirmationInput, "password-confirmation-error");
    } else if (passwordConfirmationValue !== passwordInput.value.trim()) {
      showError(passwordConfirmationInput, "password-confirmation-error");
    } else {
      isPasswordConfirmationValid = true;
      hideError(passwordConfirmationInput, "password-confirmation-error");
    }

    updateSubmitButtonState();
  }


  // 페이지 로드 시 제출 버튼 비활성화 상태로 설정
  updateSubmitButtonState();

  // form submit button 활성화 여부 체크
  function updateSubmitButtonState() {
    let isFormValid = isEmailValid && isPasswordValid;

    if (signupForm) {
      isFormValid = isFormValid && isNicknameValid && isPasswordConfirmationValid;
    }

    submitButton.disabled = !isFormValid;
  }


  // 입력 필드에 이벤트 리스너 추가
  if (emailInput) {
    emailInput.addEventListener("focusout", checkEmailValidity);
  }
  if (nicknameInput) {
    nicknameInput.addEventListener("focusout", checkNicknameValidity);
  }
  if (passwordInput) {
    passwordInput.addEventListener("focusout", checkPasswordValidity);
    passwordInput.addEventListener("input", checkPasswordValidity);
  }
  if (passwordConfirmationInput) {
    passwordConfirmationInput.addEventListener("focusout", checkPasswordConfirmationValidity);
    passwordConfirmationInput.addEventListener("input", checkPasswordConfirmationValidity);
  }

  // 이후 기능 추가 후 수정 (현재는 단순히 특정 페이지로 이동)
  // 로그인 폼 처리
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "/index.html";
    });
  }
  // 회원가입 폼 처리
  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "/login.html";
    });
  }
})
