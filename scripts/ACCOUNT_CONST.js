const ERROR_MESSAGE = {
  NOT_INPUT_EMAIL: "이메일을 입력해 주세요",
  INVALID_EMAIL: "잘못된 이메일입니다.",
  NOT_INPUT_NICKNAME: "닉네임을 입력해 주세요",
  NOT_INPUT_PASSWORD: "비밀번호를 입력해 주세요",
  MORE_THEN_8DIGIT: "비밀번호를 8자리 이상 입력해 주세요",
  NOT_MATCH_PASSWORD: "비밀번호가 일치하지 않습니다.",
};

const VAILD_REGEX = {
  EMAIL_REGEX: /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
};

export { ERROR_MESSAGE, VAILD_REGEX };
