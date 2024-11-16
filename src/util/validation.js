export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "이메일을 입력해주세요",
  INVALID_EMAIL: "잘못된 이메일 형식입니다.",
  PASSWORD_REQUIRED: "비밀번호를 입력해주세요.",
  PASSWORD_MIN_LENGTH: "비밀번호를 8자 이상 입력해주세요.",
  PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다.",
  USERNAME_REQUIRED: "닉네임을 입력해주세요",
};

export const VALIDATION_REGEX = {
  EMAIL:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: /^.{8,}$/,
};

export function validate(name, value, formData) {
  switch (name) {
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    case "passwordConfirmation":
      return validatePasswordCheck(value, formData);
    case "nickname":
      return validateUsername(value);
    default:
      return { isValid: true, message: "" };
  }
}

function validateEmail(email) {
  if (!email) {
    return { isValid: false, message: VALIDATION_MESSAGES.EMAIL_REQUIRED };
  }
  if (!VALIDATION_REGEX.EMAIL.test(email)) {
    return { isValid: false, message: VALIDATION_MESSAGES.INVALID_EMAIL };
  }
  return { isValid: true, message: "" };
}

function validatePassword(password) {
  if (!password) {
    return { isValid: false, message: VALIDATION_MESSAGES.PASSWORD_REQUIRED };
  }
  if (!VALIDATION_REGEX.PASSWORD.test(password)) {
    return { isValid: false, message: VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH };
  }
  return { isValid: true, message: "" };
}

function validatePasswordCheck(passwordCheck, formData) {
  if (!passwordCheck) {
    return { isValid: false, message: VALIDATION_MESSAGES.PASSWORD_REQUIRED };
  }
  if (!VALIDATION_REGEX.PASSWORD.test(passwordCheck)) {
    return { isValid: false, message: VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH };
  }
  if (formData.password.value !== passwordCheck) {
    return { isValid: false, message: VALIDATION_MESSAGES.PASSWORD_MISMATCH };
  }
  return { isValid: true, message: "" };
}

function validateUsername(username) {
  if (!username) {
    return { isValid: false, message: VALIDATION_MESSAGES.USERNAME_REQUIRED };
  }
  return { isValid: true, message: "" };
}
