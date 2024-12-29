import { ChangeEvent, FormEvent, useState } from "react";

type FieldValue = string | number | File | undefined;
type FieldValues = {
  [key: string]: FieldValue;
};

type Rule = {
  required?: boolean | string;
  patterns?: {
    regex: RegExp;
    message: string;
  }[];
  custom?: {
    validate: (value: FieldValue) => boolean;
    message: string;
  };
  match?: {
    field: string;
    message: string;
  };
};

type FormState<T extends FieldValues> = {
  [K in keyof T]: {
    value: T[K];
    error: string | null;
  };
};

type FormSchema<T extends FieldValues> = {
  [K in keyof T]: {
    value: T[K];
    rule: Rule;
  };
};

export default function useForm<T extends FieldValues>(
  formSchema: FormSchema<T>,
  defaultValues: Partial<T> = {}
) {
  //rule은 따로 보관하기
  const rules = Object.fromEntries(
    Object.entries(formSchema)
      .filter(([_, value]) => value.rule)
      .map(([key, value]) => [key, value.rule])
  ) as Record<keyof T, Rule>;

  //상태관리할 벨류값만 추려서 초기state만들기
  const initialState = Object.fromEntries(
    Object.entries(formSchema).map(([key, value]) => [
      key,
      { value: defaultValues[key] ?? value.value, error: null },
    ])
  ) as FormState<T>;

  const [formState, setFormState] = useState<FormState<T>>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<Error | null>(null);
  const isFormValid = Object.entries(formState).every(([key, item]) =>
    isValidField(rules[key], item)
  );

  function isValidField(
    rule: Rule,
    item: { value: FieldValue; error: string | null }
  ) {
    if (item.error !== null) return false;

    if (rule?.required) {
      const value = item.value;

      if (typeof value === "string" && value.trim().length === 0) {
        return false;
      }

      if (typeof value === "number" && isNaN(value)) {
        return false;
      }

      if (Array.isArray(value) && value.length === 0) {
        return false;
      }

      if (value === null || value === undefined) return false;
    }

    return true;
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { type, name, value } = e.target;
    let nextValue;

    if (type === "number") {
      nextValue = value === "" ? undefined : Number(value);
    } else {
      nextValue = value;
    }

    handleChange(name, nextValue);
  }

  function trigger(name: keyof T) {
    const value = formState[name].value;
    handleChange(name, value);
  }

  function handleChange(name: keyof T, value: FieldValue) {
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

  function validate(name: keyof T, value: FieldValue) {
    const rule = rules[name];

    if (!rule) {
      return { isValid: true, message: null };
    }

    if (rule.required) {
      const isEmpty =
        value === null ||
        value === undefined ||
        (typeof value === "string" && !value.trim()) ||
        (typeof value === "number" && isNaN(value)) ||
        (Array.isArray(value) && value.length === 0);

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
        if (
          Array.isArray(value) &&
          value.every((item) => typeof item === "string")
        ) {
          const isArrayValid = value.every((item) => pattern.regex.test(item));
          if (!isArrayValid) {
            return {
              isValid: false,
              message:
                pattern.message || "배열 요소에 유효하지 않은 형식이 있습니다.",
            };
          }
        } else {
          if (typeof value === "string" && !pattern.regex.test(value)) {
            return {
              isValid: false,
              message: pattern.message || "유효하지 않은 형식입니다.",
            };
          }
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

    if (rule.custom) {
      const validateFunc = rule.custom.validate;
      if (Array.isArray(value)) {
        const isArrayValid = value.every((item) => validateFunc(item));
        if (!isArrayValid) {
          return {
            isValid: false,
            message:
              rule.custom.message ||
              "배열 요소에 유효하지 않은 값이 있습니다..",
          };
        }
      } else {
        if (!validateFunc(value)) {
          return {
            isValid: false,
            message: rule.custom.message || "유효하지 않은 값입니다.",
          };
        }
      }
    }

    return { isValid: true, message: null };
  }

  function handleSubmit(submitFn: (submitData: T) => Promise<void>) {
    //다른곳에서 submit과 관련된 비동기코드만 넣으면 되도록
    //공통적으로 사용되는 코드를 모아두기
    return async function (e: FormEvent) {
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
        if (err instanceof Error) {
          setFormError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
  }

  function getValues(): T {
    return Object.fromEntries(
      Object.entries(formState).map(([key, value]) => [key, value.value])
    ) as T;
  }

  function register<K extends keyof T>(name: K) {
    return {
      id: name,
      name,
      value: formState[name].value,
      error: formState[name].error,
      onChange: handleInputChange,
      required: rules[name]?.required ? true : false,
    };
  }

  function reset() {
    setFormState(initialState);
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
    reset,
  };
}
