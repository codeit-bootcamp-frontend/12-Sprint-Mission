import { PRODUCT_VALIDATION_MESSAGE as MESSAGE } from "@util/validation";

export const addItemSchema = {
  images: {
    value: undefined,
    rule: {
      required: MESSAGE.PRODUCT_IMAGE_REQUIRED,
    },
  },
  tags: {
    value: [],
    rule: {
      required: MESSAGE.PRODUCT_TAGS_REQUIRED,
      patterns: [
        {
          regex: /^[^!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/`~';]*$/,
          message: MESSAGE.INVALID_STRING,
        },
      ],
    },
  },
  name: {
    value: "",
    rule: {
      required: MESSAGE.PRODUCT_NAME_REQUIRED,
    },
  },
  description: {
    value: "",
    rule: {
      required: MESSAGE.PRODUCT_DESCRIPTION_REQUIRED,
    },
  },
  price: {
    value: undefined,
    rule: {
      required: MESSAGE.PRODUCT_PRICE_REQUIRED,
      patterns: [
        {
          regex: /^[0-9]*$/,
          message: MESSAGE.INVALID_NUMBER,
        },
      ],
      custom: {
        validate: (value) => value >= 100,
        message: "최소 100원이상 작성해주세요.",
      },
    },
  },
};

export const commentSchema = {
  content: {
    value: "",
    rule: {
      required: MESSAGE.COMMENT_REQUIRED,
    },
  },
};
