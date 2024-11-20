document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm"); // 로그인 폼
  const signupForm = document.querySelector("#signupForm"); // 회원가입 폼
  const emailInput = document.querySelector("#email"); // 이메일 입력 필드
  const nicknameInput = document.querySelector("#nickname"); // 닉네임 입력 필드 (회원가입 전용)
  const passwordInput = document.querySelector("#password"); // 비밀번호 입력 필드
  const passwordCheckInput = document.querySelector("#password-check"); // 비밀번호 확인 입력 필드 (회원가입 전용)
  const submitButton = document.querySelector("#submit-btn"); // 제출 버튼

  const errorMsg = {
    email: {
      empty: "이메일을 입력해주세요.",
      invalid: "잘못된 이메일 형식입니다.",
    },
    nickname: {
      empty: "닉네임을 입력해주세요.",
    },
    password: {
      empty: "비밀번호를 입력해주세요.",
      invalid: "비밀번호를 8자 이상 입력해주세요.",
    },
    "password-check": {
      empty: "비밀번호 확인을 입력해주세요.",
      fail: "비밀번호가 일치하지 않습니다.",
    },
  };

  const touchedFields = {}; // 필드별로 사용자가 건드렸는지 여부를 저장

  // 입력 필드의 유효성을 검사하는 함수
  function validateInput(input, type) {
    const value = input.value.trim();
    const errorElement = input.closest(".form-group").querySelector(".error--msg");

    // 에러 초기화
    errorElement.style.display = "none";
    input.classList.remove("error");

    // 공백 입력 검사
    if (!value) {
      if (touchedFields[type]) showError(input, errorMsg[type].empty);
      return false;
    }

    // 이메일 형식 검사
    if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      if (touchedFields[type]) showError(input, errorMsg[type].invalid);
      return false;
    }

    // 비밀번호 길이 검사
    if (type === "password" && value.length < 8) {
      if (touchedFields[type]) showError(input, errorMsg[type].invalid);
      return false;
    }

    // 비밀번호 확인 검사
    if (type === "password-check" && value !== passwordInput.value.trim()) {
      if (touchedFields[type]) showError(input, errorMsg[type].fail);
      return false;
    }

    return true;
  }

  // 에러 메시지를 표시하는 함수
  function showError(input, message) {
    const errorElement = input.closest(".form-group").querySelector(".error--msg");
    errorElement.textContent = message; // 에러 메시지 설정
    errorElement.style.display = "block"; // 에러 메시지 표시
    input.classList.add("error"); // 입력 필드에 에러 스타일 추가
  }

  // 폼의 전체 유효성을 검사하여 제출 버튼 활성화 여부를 결정하는 함수
  function validateForm(showErrors = false) {
    let isFormValid;

    if (signupForm) {
      isFormValid =
        validateInput(emailInput, "email") &&
        validateInput(nicknameInput, "nickname") &&
        validateInput(passwordInput, "password") &&
        validateInput(passwordCheckInput, "password-check");
    } else if (loginForm) {
      isFormValid =
        validateInput(emailInput, "email") &&
        validateInput(passwordInput, "password");
    }

    submitButton.disabled = !isFormValid; // 모든 입력값이 유효하면 버튼 활성화

    if (showErrors) {
      // 모든 필드에 대해 에러 메시지 강제 표시
      [emailInput, nicknameInput, passwordInput, passwordCheckInput].forEach((input) => {
        if (input) validateInput(input, input.id);
      });
    }
  }

  // focusout 이벤트 리스너: 필드가 포커스를 벗어날 때 유효성 검사
  [emailInput, nicknameInput, passwordInput, passwordCheckInput].forEach((input) => {
    if (input) {
      input.addEventListener("focusout", () => {
        touchedFields[input.id] = true; // 필드가 포커스를 잃으면 touched 상태로 설정
        validateInput(input, input.id); // 개별 필드 유효성 검사
        validateForm(); // 폼 상태 업데이트
      });
    }
  });

  // input 이벤트 리스너: 실시간 폼 상태 업데이트
  [emailInput, nicknameInput, passwordInput, passwordCheckInput].forEach((input) => {
    if (input) {
      input.addEventListener("input", validateForm); // 입력값 변경 시 폼 상태 업데이트
    }
  });

  // 초기 상태에서 폼 검사: 에러 메시지는 표시하지 않음
  validateForm(false);
});