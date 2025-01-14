import { useState } from "react";
import { FieldValues, useForm, UseFormProps } from "react-hook-form";

export default function useFormWithError<T extends FieldValues>(
  options: UseFormProps<T>
) {
  const [formError, setFormError] = useState<Error | null>(null);
  const form = useForm<T>(options);
  const { handleSubmit } = form;

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
    formError,
    handleSubmit: handleSumbitWithError,
  };
}
