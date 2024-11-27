import {
  AUTH_VALIDATION_MESSAGES as MESSAGE,
  AUTH_VALIDATION_REGEX as REGEX,
} from "@util/validation";

export const formSchema = {
  email: {
    value: "",
    rule: {
      required: MESSAGE.EMAIL_REQUIRED,
      patterns: [
        {
          regex: REGEX.EMAIL,
          message: MESSAGE.INVALID_EMAIL,
        },
      ],
    },
  },
  password: {
    value: "",
    rule: {
      required: MESSAGE.PASSWORD_REQUIRED,
      patterns: [
        {
          regex: REGEX.PASSWORD,
          message: MESSAGE.PASSWORD_MIN_LENGTH,
        },
      ],
    },
  },
};
