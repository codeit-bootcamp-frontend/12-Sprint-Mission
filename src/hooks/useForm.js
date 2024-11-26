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
  const [formError, setFormError] = useState(null);
  const isFormValid = Object.entries(formState).every(([key, item]) =>
    isValidField(rules[key], item)
  );

  function isValidField(rule, item) {
    if (item.error !== null) return false;

    if (rule?.required) {
      const value = item.value;

      if (typeof value === "string" && value.trim().length === 0) {
        return false;
      }

      if (typeof value === "number" && isNaN(value)) {
        return false;
      }

      if (value === null || value === undefined) return false;
    }

    return true;
  }

  function handleInputChange(e) {
    const { type, name, value } = e.target;
    let nextValue;

    if (type === "number") {
      nextValue = value === "" ? "" : Number(value);
    } else {
      nextValue = value;
    }

    handleChange(name, nextValue);
  }

  function trigger(name) {
    const value = formState[name].value;
    handleChange(name, value);
  }

  function handleChange(name, value) {
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

    if (rule.required) {
      const isEmpty =
        value === null || (typeof value === "string" && !value.trim());

      if (isEmpty) {
        return {
          isValid: false,
          message:
            typeof rule.required === "string" ? rule.required : "필수값입니다.",
        };
      }
    }

    if (rule.patterns) {
      for (const pattern of rule.patterns) {
        if (!pattern.regex.test(value)) {
          return {
            isValid: false,
            message: pattern.message || "유효하지 않은 형식입니다.",
          };
        }
      }
    }

    if (rule.match) {
      const targetValue = formState[rule.match.field].value || "";
      if (value !== targetValue) {
        return {
          isValid: false,
          message: rule.match.message || "값이 일치하지 않습니다.",
        };
      }
    }

    return { isValid: true, message: null };
  }

  function handleSubmit(submitFn) {
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

      setFormError(null);
      setIsLoading(true);

      try {
        return await submitFn(getValues());
      } catch (err) {
        setFormError(err);
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
      onChange: handleInputChange,
      required: rules[name]?.required ? true : false,
    };
  }

  return {
    formState,
    formError,
    isFormValid,
    isLoading,
    handleChange,
    trigger,
    handleSubmit,
    getValues,
    register,
  };
}
