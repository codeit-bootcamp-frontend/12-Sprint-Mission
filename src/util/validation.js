export const AUTH_VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "이메일을 입력해주세요",
  INVALID_EMAIL: "잘못된 이메일 형식입니다.",
  PASSWORD_REQUIRED: "비밀번호를 입력해주세요.",
  PASSWORD_MIN_LENGTH: "비밀번호를 8자 이상 입력해주세요.",
  PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다.",
  USERNAME_REQUIRED: "닉네임을 입력해주세요",
};

export const AUTH_VALIDATION_REGEX = {
  EMAIL:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: /^.{8,}$/,
};

export const PRODUCT_VALIDATION_MESSAGE = {
  PRODUCT_IMAGE_REQUIRED: "이미지를 업로드해주세요",
  PRODUCT_TAGS_REQUIRED: "태그를 입력해주세요",
  PRODUCT_NAME_REQUIRED: "상품명을 입력해주세요",
  PRODUCT_DESCRIPTION_REQUIRED: "상품소개를 입력해주세요",
  PRODUCT_PRICE_REQUIRED: "판매 가격을 입력해주세요",
  INVALID_STRING: "특수문자는 사용할 수 없습니다.",
  INVALID_NUMBER: "숫자만 입력해주세요",
};

export const COMMENT_VALIDATION_MESSAGE = {
  COMMENT_REQUIRED: "내용을 적어주세요",
};
