import { VALIDATION_MESSAGES, VALIDATION_REGEX } from "./constants.js";

export default class Auth {
  constructor(form) {
    this.form = document.querySelector(form);
    this.submitButton = this.form.querySelector('[type="submit"]');
    this.errors = {};
  }

  init() {
    //강의에서 들었던 이벤트위임 실습
    this.form.addEventListener("focusout", (e) => {
      this.validate(e);
    });

    //폼 제출 임시 막기
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  validate(e) {
    if (!e.target.matches("input")) return;

    const name = e.target.name;
    const value = e.target.value.trim();
    switch (name) {
      case "email":
        this.validateEmail(value);
        break;
      case "password":
        this.validatePassword(value);
        break;
      case "password-check":
        this.validatePasswordCheck(value);
        break;
      case "username":
        this.validateUsername(value);
        break;
      default:
        return;
    }

    this.updateError(name);
    this.updateSumbitButton();
  }

  updateSumbitButton() {
    const unfilled = [...this.form.querySelectorAll("input[required]")].filter(
      (input) => !input.checkValidity()
    );
    const errors = Object.keys(this.errors);

    this.submitButton.disabled = unfilled.length || errors.length;
  }

  updateError(name) {
    const input = this.form.querySelector(`[name=${name}]`);
    const formItem = input.closest(".form-item");
    const errorMessage = this.errors[name];

    let errorBlock = formItem.querySelector(".item-error");
    if (errorBlock) {
      errorBlock.remove();
    }

    if (errorMessage) {
      errorBlock = document.createElement("div");
      errorBlock.classList.add("item-error");
      errorBlock.textContent = errorMessage;
      formItem.appendChild(errorBlock);
    }
  }

  validateEmail(email) {
    if (!email) {
      this.errors.email = VALIDATION_MESSAGES.EMAIL_REQUIRED;
      return;
    }

    if (!VALIDATION_REGEX.EMAIL.test(email)) {
      this.errors.email = VALIDATION_MESSAGES.INVALID_EMAIL;
      return;
    }

    delete this.errors.email;
  }

  validatePassword(password) {
    if (!password) {
      this.errors.password = VALIDATION_MESSAGES.PASSWORD_REQUIRED;
      return;
    }

    if (!VALIDATION_REGEX.PASSWORD.test(password)) {
      this.errors.password = VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH;
      return;
    }

    delete this.errors.password;
  }

  validatePasswordCheck(password) {
    if (!password) {
      this.errors["password-check"] = VALIDATION_MESSAGES.PASSWORD_REQUIRED;
      return;
    }

    // <<Question>>
    // 비밀번호 확인을 위해서 "this.form.querySelector('[type="password"]').value"로 들고오게 했는데
    // 해당 input이 없을수도 있는 경우때문에
    // 이 부분을 validatePassword를 할때 this.password로 내부에 잠시 저장했다가 비교해도 될까요 (보안??)
    if (password !== this.form.querySelector('[type="password"]').value) {
      this.errors["password-check"] = VALIDATION_MESSAGES.PASSWORD_MISMATCH;
      return;
    }

    delete this.errors["password-check"];
  }

  validateUsername(username) {
    if (!username) {
      this.errors.username = VALIDATION_MESSAGES.USERNAME_REQUIRED;
      return;
    }

    delete this.errors.username;
  }
}

/**
 * 폼내부 password type 요소의 visibility를 토글하는 함수입니다.
 *
 * @param {string} form  - 폼의 선택자 (기본값: "body", 예: ".form").
 */
export function toggleVisibility(form = "body") {
  document.querySelector(form).addEventListener("click", (e) => {
    if (!e.target.classList.contains("visibility-btn")) return;

    const button = e.target;
    const input = button.closest(".form-item").querySelector("input");
    const isPasswordType = input.type === "password";

    input.type = isPasswordType ? "text" : "password";
    button.querySelector(".a11y").textContent = isPasswordType
      ? "비밀번호 가리기"
      : "비밀번호 표시";
    button.classList.toggle("on");
  });
}
