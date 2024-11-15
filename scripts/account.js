import { ERROR_MESSAGE, VAILD_REGEX } from "./ACCOUNT_CONST.js";

const authForm = document.querySelector(".auth-form");

const addErrorMessage = (target, errorMessage) => {
  const nextNode = target.nextElementSibling;

  if (!errorMessage) return;
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

const changePasswordType = () => {
  document.querySelectorAll(".password-field").forEach((element) => {
    element.type = "password";
  });
};

const togglePassword = (target) => {
  target.classList.toggle("visible");
  if (target.classList.contains("visible")) {
    target.src = "./img/img_opend_eye.png";
    target.alt = "opend eye";
    target.parentNode.children[0].type = "text";
  } else {
    target.src = "./img/img_closed_eye.png";
    target.alt = "closed eye";
    target.parentNode.children[0].type = "password";
  }
};

const validCheck = {
  email: (target) => {
    const emailRegex = VAILD_REGEX.EMAIL_REGEX;
    if (target.value.length === 0) return ERROR_MESSAGE.NOT_INPUT_EMAIL;
    if (!emailRegex.test(target.value)) return ERROR_MESSAGE.INVALID_EMAIL;
    if (target.nextElementSibling) removeErrorMessage(target);
    return null;
  },
  nickname: (target) => {
    if (target.value.length === 0) return ERROR_MESSAGE.NOT_INPUT_NICKNAME;
    if (target.nextElementSibling) removeErrorMessage(target);
    return null;
  },
  password: (target) => {
    if (target.value.length === 0) return ERROR_MESSAGE.NOT_INPUT_PASSWORD;
    if (target.value.length < 8) return ERROR_MESSAGE.MORE_THEN_8DIGIT;
    if (document.querySelector("#password-confirm"))
      validCheck["password-confirm"](
        document.querySelector("#password-confirm")
      );
    if (target.nextElementSibling) removeErrorMessage(target);
    return null;
  },
  "password-confirm": (target) => {
    if (target.value.length === 0) return ERROR_MESSAGE.NOT_INPUT_PASSWORD;
    if (target.value.length < 8) return ERROR_MESSAGE.MORE_THEN_8DIGIT;
    if (!comparePassword(target)) return ERROR_MESSAGE.NOT_MATCH_PASSWORD;
    if (target.nextElementSibling) removeErrorMessage(target);
    return null;
  },
};

const focusoutHandler = ({ target }) => {
  if (validCheck[target.name]) {
    addErrorMessage(target, validCheck[target.name](target));
  }

  const result = Object.values(validCheck).map((validFunc) => {
    const element = document.querySelector(`#${validFunc.name}`);
    if (element === null) return null;
    return validFunc(element);
  });

  if (result.every((value) => value === null)) {
    const submitButton = document.querySelector(".submitButton");
    submitButton.disabled = false;
  }
};

const clickHandler = ({ target }) => {
  if (target.classList.contains("toggle-password")) togglePassword(target);
};

authForm.addEventListener("focusout", focusoutHandler);
authForm.addEventListener("click", clickHandler);
authForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    changePasswordType();
    authForm.removeEventListener("focusout", focusoutHandler);
    authForm.removeEventListener("click", clickHandler);
    authForm.submit();
  },
  { once: true }
);
