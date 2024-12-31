import { z } from "zod";
import { PRODUCT_VALIDATION_MESSAGE as MESSAGE } from "@util/validation";

export const ProductFormSchema = z.object({
  images: z
    .array(z.union([z.instanceof(File), z.string()]))
    .min(1, { message: MESSAGE.PRODUCT_IMAGE_REQUIRED }),
  tags: z.array(
    z
      .string()
      .regex(/^[^!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/`~';]*$/, {
        message: MESSAGE.INVALID_STRING,
      })
      .nonempty({ message: MESSAGE.PRODUCT_TAGS_REQUIRED })
  ),
  name: z.string().nonempty({ message: MESSAGE.PRODUCT_NAME_REQUIRED }),
  description: z.string().nonempty({
    message: MESSAGE.PRODUCT_DESCRIPTION_REQUIRED,
  }),
  price: z.coerce
    .number()
    .min(100, { message: 100 + MESSAGE.PRODUCT_PRICE_MIN })
    .optional(),
});

export type ProductFormType = z.infer<typeof ProductFormSchema>;
