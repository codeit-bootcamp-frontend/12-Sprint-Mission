import { useState } from "react";

export default function useForm(formSchema) {
  //rule은 따로 보관하기
  const rules = Object.fromEntries(
    Object.entries(formSchema)
      .filter(([key, value]) => value.rule)
      .map(([key, value]) => [key, value.rule])
  );

  //상태관리할 벨류값만 추려서 초기state만들기
  const initialState = Object.fromEntries(
    Object.entries(formSchema).map(([key, value]) => [
      key,
      { value: value.value, error: null },
    ])
  );

  const [formState, setFormState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const isFormValid = Object.values(formState).every(
    (item) => item.error === null && item.value.length
  );

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    updateFormFieldState(name, value);
  }

  function trigger(name) {
    const value = formState[name].value || "";
    updateFormFieldState(name, value);
  }

  function updateFormFieldState(name, value) {
    const { isValid, message } = validate(name, value);

    setFormState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: isValid ? null : message,
      },
    }));
  }

  function validate(name, value) {
    const rule = rules[name];
    if (!rule) {
      return { isValid: true, message: null };
    }

    if (!value.trim()) {
      return { isValid: false, message: rule.required };
    }

    if (rule.patterns) {
      for (const pattern of rule.patterns) {
        if (!pattern.regex.test(value)) {
          return { isValid: false, message: pattern.message };
        }
      }
    }

    if (rule.match) {
      const targetValue = formState[rule.match.field].value || "";
      if (value !== targetValue) {
        return { isValid: false, message: rule.match.message };
      }
    }

    return { isValid: true, message: null };
  }

  function handleSubmit(onSubmit) {
    //다른곳에서 submit과 관련된 비동기코드만 넣으면 되도록
    //공통적으로 사용되는 코드를 모아두기
    return async function (e) {
      e.preventDefault();

      //전체적으로 field들을 다시한번 trigger를 호출해서 재점검
      Object.keys(formState).forEach((name) => trigger(name));

      if (!isFormValid) {
        alert("제출할 수 없습니다. 확인을 해주세요.");
        return;
      }
      setIsLoading(true);

      try {
        await onSubmit(getValues());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
  }

  function getValues() {
    return Object.fromEntries(
      Object.entries(formState).map(([key, value]) => [key, value.value])
    );
  }

  function register(name) {
    return {
      id: name,
      name,
      value: formState[name].value,
      error: formState[name].error,
      onChange: handleChange,
      required: rules[name].required ? true : false,
    };
  }

  return {
    formState,
    isFormValid,
    isLoading,
    handleChange,
    trigger,
    handleSubmit,
    getValues,
    register,
  };
}
