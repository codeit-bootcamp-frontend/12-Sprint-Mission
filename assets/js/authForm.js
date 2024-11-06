import { VALIDATION_MESSAGES, VALIDATION_REGEX } from "./authConstants.js";

/**
 * 폼내부 필드의 벨리데이션 검사와 폼의 제출 이벤트를 관리합니다.
 */
export default class AuthForm {
  /**
   * @param {string} form - 벨리데이션을 실행할 폼의 선택자
   */
  constructor(form) {
    this.form = document.querySelector(form);
    this.submitButton = this.form.querySelector('[type="submit"]');
    this.errors = {};
  }

  init() {
    this.form.addEventListener("focusout", (e) => {
      this.validate(e);
    });

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

    // valid,error 초기화
    input.classList.remove("valid");
    let errorBlock = formItem.querySelector(".item-error");
    if (errorBlock) {
      errorBlock.remove();
    }

    if (errorMessage) {
      errorBlock = document.createElement("div");
      errorBlock.classList.add("item-error");
      errorBlock.textContent = errorMessage;
      formItem.appendChild(errorBlock);
    } else {
      input.classList.add("valid");
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

    this.password = password;
    delete this.errors.password;
  }

  validatePasswordCheck(passwordCheck) {
    if (!passwordCheck) {
      this.errors["password-check"] = VALIDATION_MESSAGES.PASSWORD_REQUIRED;
      return;
    }

    if (!VALIDATION_REGEX.PASSWORD.test(passwordCheck)) {
      this.errors["password-check"] = VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH;
      return;
    }

    if (passwordCheck !== this.password) {
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
