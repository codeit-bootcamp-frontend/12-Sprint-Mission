import { useState } from "react";
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useForm,
  UseFormProps,
} from "react-hook-form";

export default function useFormWithError<T extends FieldValues>(
  options: UseFormProps<T>
) {
  const [formError, setFormError] = useState<Error | null>(null);
  const form = useForm<T>(options);
  const { handleSubmit, getFieldState, register, formState } = form;

  function registerWithError<U extends FieldPath<T>>(
    name: U,
    options?: RegisterOptions<T, U>
  ) {
    return {
      ...register(name, options),
      ...getFieldState(name, formState),
    };
  }

  function handleSumbitWithError(submitFn: (data: T) => Promise<void>) {
    return handleSubmit(async function (data) {
      try {
        setFormError(null);
        await submitFn(data);
      } catch (error) {
        setFormError(error as Error);
      }
    });
  }

  return {
    ...form,
    register: registerWithError,
    formError,
    handleSubmit: handleSumbitWithError,
  };
}
