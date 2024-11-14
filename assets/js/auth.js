document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  // 에러메시지 요소 생성 함수
  const createErrorMsg = (message) => {
    const errMsg = document.createElement("p");
    errMsg.classList.add("error-message");
    errMsg.textContent = message;
    return errMsg;
  };

  // 이메일 유효성 검사 함수
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  emailInput.addEventListener("blur", () => {
    // 기존의 에러메시지가 존재할 경우 삭제
    const existingError = emailInput.parentElement.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
    // email값을 입력하지 않은 경우 에러메시지 출력
    if (!emailInput.value) {
      const errMsg = createErrorMsg(`이메일을 입력해주세요`);
      emailInput.parentElement.appendChild(errMsg);
      emailInput.classList.add("error-border");
    } else if (!isValidEmail(emailInput.value)) {
      const errMsg = createErrorMsg(`잘못된 이메일 형식입니다`);
      emailInput.parentElement.appendChild(errMsg);
      emailInput.classList.add("error-border");
    } else {
      emailInput.classList.remove("error-border");
    }
  });
});
