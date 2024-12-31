import { z } from "zod";
import { COMMENT_VALIDATION_MESSAGE as MESSAGE } from "@util/validation";

export const CommentFormSchema = z.object({
  content: z.string({ required_error: MESSAGE.COMMENT_REQUIRED }),
});

export type CommentFormType = z.infer<typeof CommentFormSchema>;
