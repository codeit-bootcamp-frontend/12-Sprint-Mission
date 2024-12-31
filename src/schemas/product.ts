import { z } from "zod";
import { PRODUCT_VALIDATION_MESSAGE as MESSAGE } from "@util/validation";

export const ItemFormSchema = z.object({
  images: z
    .string()
    .array()
    .nonempty({ message: MESSAGE.PRODUCT_IMAGE_REQUIRED }),
  tags: z
    .string()
    .regex(/^[^!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/`~';]*$/)
    .array()
    .nonempty({ message: MESSAGE.PRODUCT_TAGS_REQUIRED }),
  name: z.string({ required_error: MESSAGE.PRODUCT_NAME_REQUIRED }),
  description: z.string({
    required_error: MESSAGE.PRODUCT_DESCRIPTION_REQUIRED,
  }),
  price: z.number().min(100).optional(),
});

export type ItemFormType = z.infer<typeof ItemFormSchema>;
