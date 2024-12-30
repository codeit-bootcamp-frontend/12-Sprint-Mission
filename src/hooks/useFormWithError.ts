import { useState } from "react";
import { FieldPath, FieldValues, useForm, UseFormProps } from "react-hook-form";

export default function useFormWithError<TFieldValues extends FieldValues>(
  options: UseFormProps<TFieldValues>
) {
  const [formError, setFormError] = useState<Error | null>(null);
  const form = useForm<TFieldValues>(options);
  const { handleSubmit, getFieldState, register, formState } = form;

  function registerWithError<TFieldName extends FieldPath<TFieldValues>>(
    name: TFieldName
  ) {
    const { error, invalid, isTouched } = getFieldState(name, formState);

    return {
      ...register(name),
      error: error?.message,
      isValid: !invalid,
      isTouched,
    };
  }

  function handleSumbitWithError(
    submitFn: (data: TFieldValues) => Promise<void>
  ) {
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
