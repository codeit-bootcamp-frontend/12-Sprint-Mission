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
  const { handleSubmit, getFieldState, register, formState, watch } = form;

  function registerWithError<U extends FieldPath<T>>(
    name: U,
    options?: RegisterOptions<T, U>
  ) {
    const { error, isDirty, isTouched, invalid } = getFieldState(
      name,
      formState
    );

    return {
      ...register(name, options),
      error,
      isDirty,
      isTouched,
      isValid: !invalid,
      value: watch(name),
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
