import { z } from "zod";
import { ARTICLE_VALIDATION_MESSAGE as MESSAGE } from "@constants/message";
import { ACCEPT_FILE_TYPES, MAX_FILE_SIZE } from "@constants/file";

export const ArticleFormSchema = z.object({
  image: z
    .union([z.instanceof(File), z.string()])
    .optional()
    .refine(
      (file) => {
        if (file instanceof File) {
          return file.size <= MAX_FILE_SIZE;
        }
        return true;
      },
      {
        message: `${MESSAGE.INVALID_IMAGE_SIZE} (${
          MAX_FILE_SIZE / 1024 / 1024
        }MB 초과)`,
      }
    )
    .refine(
      (file) => {
        if (file instanceof File) {
          return ACCEPT_FILE_TYPES.includes(file.type);
        }
        return true;
      },
      { message: MESSAGE.INVALID_IMAGE_TYPE }
    ),
  title: z.string().nonempty({ message: MESSAGE.ARTICLE_TITLE_REQUIRED }),
  content: z.string().nonempty({
    message: MESSAGE.ARTICLE_CONTENT_REQUIRED,
  }),
});

export type ArticleFormType = z.infer<typeof ArticleFormSchema>;
