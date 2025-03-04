import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "@/components/ui/forms/InputField/InputField";
import FormButton from "@/components/ui/forms/FormButton/FormButton";
import styles from "@/pages/login/index.module.scss";
import { useAuth } from "@/hooks/useAuth";





type Inputs = {
  email: string;
  password: string;
};

export default function Form() {
  
  const { handleLogin, loading, error } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await handleLogin(data.email, data.password);
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="email"
          label="이메일"
          type="text"
          placeholder="이메일을 입력해주세요"
          register={register("email", {
            required: true,
            pattern: {
              value: emailPattern,
              message: "이메일 형식으로 입력해주세요",
            },
          })}
          errors={errors.email}
          // className={`${errors.email ? styles.errorInput : ""}`}
        />
         {errors.email && <span className={styles.errorMessage}>{errors.email?.message}</span>}

        <InputField
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          register={register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해주세요",
            },
          })}
          errors={errors.password}
        />
        
         {errors.password && <span className={styles.errorMessage}>{errors.password?.message}</span>}

        <FormButton disabled={isSubmitting} className={styles.loginButton} type="submit">
          로그인
        </FormButton>
      </form>
    </div>
  );
}


