import { useEffect, useState } from "react";
import { validate } from "../util/validation";

export function useAuthForm(initialFormState) {
  const [formData, setFormData] = useState(initialFormState);

  const isFormValid = Object.values(formData).every(
    (item) => item.error === null && item.value.length
  );

  useEffect(() => {
    if (!formData.password.value || !formData.passwordConfirmation?.value)
      return;

    //패스워드체크가 작성되어있는데, 패스워드가 변경되면 한번더 validation
    const { isValid, message } = validate(
      "passwordConfirmation",
      formData.passwordConfirmation.value,
      formData
    );

    setFormData((prev) => ({
      ...prev,
      passwordConfirmation: {
        ...prev.passwordConfirmation,
        error: isValid ? null : message,
      },
    }));
  }, [formData.password.value, formData.passwordConfirmation?.value]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const { isValid, message } = validate(name, value, formData);

    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: isValid ? null : message,
      },
    }));
  }

  return { formData, isFormValid, handleChange };
}
