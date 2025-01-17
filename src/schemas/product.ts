import { z } from "zod";
import { PRODUCT_VALIDATION_MESSAGE as MESSAGE } from "@constants/message";
import { ACCEPT_FILE_TYPES, MAX_FILE_SIZE } from "@constants/file";

const imageFile = z
  .instanceof(File)
  .refine(
    (file) => {
      return file.size <= MAX_FILE_SIZE;
    },
    {
      message: `${MESSAGE.INVALID_IMAGE_SIZE} (${
        MAX_FILE_SIZE / 1024 / 1024
      }MB 초과)`,
    }
  )
  .refine(
    (file) => {
      return ACCEPT_FILE_TYPES.includes(file.type);
    },
    { message: MESSAGE.INVALID_IMAGE_TYPE }
  );

export const ProductFormSchema = z.object({
  images: z
    .array(z.union([imageFile, z.string()]))
    .min(1, { message: MESSAGE.PRODUCT_IMAGE_REQUIRED }),
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
