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
