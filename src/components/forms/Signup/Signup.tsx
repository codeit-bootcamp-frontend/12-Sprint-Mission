import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "@/components/ui/forms/InputField/InputField";
import FormButton from "@/components/ui/forms/FormButton/FormButton";
import styles from "@/pages/login/index.module.scss";
import { useAuth } from "@/hooks/useAuth";


type Inputs = {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  term?: boolean;
};

export default function SignupForm() {
  const { handleSignUp, loading, error } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
    getValues,
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordCheck:'',
      term: false,


    }
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await handleSignUp(data.email, data.nickname,data.password, data.passwordCheck);
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
          className={`${errors.email ? styles.errorInput : ""}`}
        />
         {errors.email && <span className={styles.errorMessage}>{errors.email?.message}</span>}
         <InputField
          id="nickName"
          label="닉네임"
          type="text"
          placeholder="닉네임 입력해주세요"
          register={register("nickname", {
            required: true,
          })}
          errors={errors.nickname}
          // className={`${errors.email ? styles.errorInput : ""}`}
        />
         

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

         <InputField
          id="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요"
          register={register("passwordCheck", {
            required: true,
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다'
                }
              }
          })}
          errors={errors.passwordCheck}
        />
         {errors.passwordCheck && <span className={styles.errorMessage}>{errors.passwordCheck?.message}</span>}
        <FormButton disabled={isSubmitting} className={styles.formButton} type="submit">
          회원가입
        </FormButton>
      </form>
    </div>
  );
}


