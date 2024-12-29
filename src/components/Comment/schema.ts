import { COMMENT_VALIDATION_MESSAGE as MESSAGE } from "@util/validation";

export const commentSchema = {
  content: {
    value: "",
    rule: {
      required: MESSAGE.COMMENT_REQUIRED,
    },
  },
};
