const authForm = document.querySelector(".auth-form");

const addErrorMessage = (target, errorMessage) => {
  const nextNode = target.nextElementSibling;
  target.classList.add("error-input-border");

  if (!nextNode || nextNode.classList.contains("toggle-password")) {
    const errorElement = document.createElement("span");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("error-message");
    target.after(errorElement);
    return;
  }
  if (nextNode.textContent !== errorMessage) {
    nextNode.textContent = errorMessage;
  }
};

const removeErrorMessage = (target) => {
  const nextNode = target.nextElementSibling;
  if (nextNode.classList.contains("error-message")) nextNode.remove();
  target.classList.remove("error-input-border");
};

const comparePassword = (target) => {
  const prevPassword = document.querySelector("#password");
  return prevPassword.value === target.value;
};

const validCheck = {
  email: (target) => {
    /**
     * ^ : 문자열의 시작 명시
     * [A-Za-z0-9._%-] : 대문자 알파벳, 소문자 알파벳, 숫자 0~9, 마침표, 퍼센트, 하이픈 허용
     * @[A-Za-z0-9.-] : @ 뒤에 대문자 알파벳, 소문자 알파벳, 숫자 0~9, 마침표, 하이픈 허용
     * \. : 마침표 의미
     * [A-Za-z]{2,4} : 대문자 알파벳, 소문자 알파벳의 개수를 2개~4개 범위 내에 허용
     * $ : 문자열의 끝 명시
     */
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (target.value.length === 0) {
      const errorMessage = "이메일을 입력해 주세요";
      addErrorMessage(target, errorMessage);
      return false;
    } else if (!emailRegex.test(target.value)) {
      const errorMessage = "잘못된 이메일입니다.";
      addErrorMessage(target, errorMessage);
      return false;
    }
    if (target.nextElementSibling) removeErrorMessage(target);

    return true;
  },
  nickname: (target) => {
    if (target.value.length === 0) {
      const errorMessage = "닉네임을 입력해 주세요";
      addErrorMessage(target, errorMessage);
      return false;
    }
    if (target.nextElementSibling) removeErrorMessage(target);
    return true;
  },
  password: (target) => {
    if (target.value.length === 0) {
      const errorMessage = "비밀번호를 입력해 주세요";
      addErrorMessage(target, errorMessage);
      return false;
    } else if (target.value.length < 8) {
      const errorMessage = "비밀번호를 8자리 이상 입력해 주세요";
      addErrorMessage(target, errorMessage);
      return false;
    }
    if (document.querySelector("#password-confirm"))
      validCheck["password-confirm"](
        document.querySelector("#password-confirm")
      );
    if (target.nextElementSibling) removeErrorMessage(target);
    return true;
  },
  "password-confirm": (target) => {
    if (target.value.length === 0) {
      const errorMessage = "비밀번호를 입력해 주세요";
      addErrorMessage(target, errorMessage);
      return false;
    } else if (target.value.length < 8) {
      const errorMessage = "비밀번호를 8자리 이상 입력해 주세요";
      addErrorMessage(target, errorMessage);
      return false;
    }
    if (!comparePassword(target)) {
      const errorMessage = "비밀번호가 일치하지 않습니다.";
      addErrorMessage(target, errorMessage);
      return false;
    }
    if (target.nextElementSibling) removeErrorMessage(target);
    return true;
  },
};

authForm.addEventListener("focusout", ({ target }) => {
  if (validCheck[target.name]) validCheck[target.name](target);

  const result = Object.values(validCheck).map((validFunc) => {
    const element = document.querySelector(`#${validFunc.name}`);
    if (element === null) return true;
    return false;
  });

  if (!result.includes(false)) {
    const submitButton = document.querySelector(".submitButton");
    submitButton.disabled = false;
  }
});

//form의 유효성 검사, 눈 모양 아이콘 클릭 이벤트
authForm.addEventListener("click", ({ target }) => {});
