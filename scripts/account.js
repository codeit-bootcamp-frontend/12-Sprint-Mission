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
  if (nextNode && nextNode.classList.contains("error-message"))
    nextNode.remove();
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

const activatedButton = (validCheckResults) => {
  const submitButton = document.querySelector(".submitButton");
  validCheckResults.every((value) => value === true)
    ? (submitButton.disabled = false)
    : (submitButton.disabled = true);
};

const validCheckForm = () => {
  return Object.entries(validCheckInput).map(
    ([validInputName, validCheckFunc]) => {
      const inputElement = document.querySelector(`#${validInputName}`);
      if (inputElement === null) return true;
      return validCheckFunc(inputElement);
    }
  );
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

const validCheckInput = {
  email: (target) => {
    const emailRegex = VAILD_REGEX.EMAIL_REGEX;
    if (target.value.length === 0) return ERROR_MESSAGE.NOT_INPUT_EMAIL;
    if (!emailRegex.test(target.value)) return ERROR_MESSAGE.INVALID_EMAIL;
    removeErrorMessage(target);
    return true;
  },
  nickname: (target) => {
    if (target.value.length === 0) return ERROR_MESSAGE.NOT_INPUT_NICKNAME;
    removeErrorMessage(target);
    return true;
  },
  password: (target) => {
    if (target.value.length === 0) return ERROR_MESSAGE.NOT_INPUT_PASSWORD;
    if (target.value.length < 8) return ERROR_MESSAGE.MORE_THEN_8DIGIT;
    //비밀번호 확인을 기준으로 비밀번호 란을 채울 경우 고려
    if (document.querySelector("#password-confirm"))
      validCheckInput["password-confirm"](
        document.querySelector("#password-confirm")
      );
    removeErrorMessage(target);
    return true;
  },
  "password-confirm": (target) => {
    if (target.value.length === 0) return ERROR_MESSAGE.NOT_INPUT_PASSWORD;
    if (target.value.length < 8) return ERROR_MESSAGE.MORE_THEN_8DIGIT;
    if (!comparePassword(target)) return ERROR_MESSAGE.NOT_MATCH_PASSWORD;
    removeErrorMessage(target);
    return true;
  },
};

const focusoutHandler = ({ target }) => {
  if (validCheckInput[target.name]) {
    addErrorMessage(target, validCheckInput[target.name](target));
    const result = validCheckForm();
    activatedButton(result);
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
