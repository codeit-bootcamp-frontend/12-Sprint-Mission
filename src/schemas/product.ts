import { z } from "zod";
import { PRODUCT_VALIDATION_MESSAGE as MESSAGE } from "@constants/message";

export const MAX_FILE_SIZE = 2 * 1024 * 1024;
export const ACCEPT_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];

export const ProductFormSchema = z.object({
  images: z
    .array(z.union([z.instanceof(File), z.string()]))
    .min(1, { message: MESSAGE.PRODUCT_IMAGE_REQUIRED })
    .max(1, { message: MESSAGE.INVALID_IMAGE_COUNT })
    .refine(
      (files) => {
        if (files[0] instanceof File) {
          return files[0].size <= MAX_FILE_SIZE;
        }
        return true; // string일 경우는 size 체크 스킵
      },
      { message: `${MESSAGE.INVALID_IMAGE_SIZE}` }
    )
    .refine(
      (files) => {
        if (files[0] instanceof File) {
          return ACCEPT_FILE_TYPES.includes(files[0].type);
        }
        return true; // string일 경우는 type 체크 스킵
      },
      { message: MESSAGE.INVALID_IMAGE_TYPE }
    ),
  name: z.string().nonempty({ message: MESSAGE.PRODUCT_NAME_REQUIRED }),
  description: z.string().nonempty({
    message: MESSAGE.PRODUCT_DESCRIPTION_REQUIRED,
  }),
  price: z.coerce
    .number()
    .min(100, { message: 100 + MESSAGE.PRODUCT_PRICE_MIN }),
  tags: z
    .array(z.string())
    .min(1, { message: MESSAGE.PRODUCT_TAGS_REQUIRED })
    .refine(
      (tags) =>
        tags.every((tag) =>
          /^[^!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/`~';]*$/.test(tag)
        ),
      { message: MESSAGE.INVALID_STRING }
    ),
});

export type ProductFormType = z.infer<typeof ProductFormSchema>;
