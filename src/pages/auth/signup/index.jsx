import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "@hooks/useForm";
import { signUp } from "@service/auth";
import AuthContainer from "../components/AuthContainer";
import { Form, FieldItem, Input } from "@components/Field";
import Button from "@components/Button";
import { formSchema } from "./formSchema";

export default function Signup() {
  const navigate = useNavigate();
  const {
    formState,
    formError,
    isFormValid,
    isLoading,
    trigger,
    handleSubmit,
    register,
  } = useForm(formSchema);

  //비밀번호 변경시 비밀번호확인 필드 trigger
  useEffect(() => {
    if (!formState.password.value || !formState.passwordConfirmation.value)
      return;

    trigger("passwordConfirmation");
  }, [formState.password.value]);

  async function onSubmit(data) {
    try {
      await signUp(data);
      alert("회원가입에 성공했습니다. \n로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (err) {
      throw err;
    }
  }

  return (
    <AuthContainer mode="signup">
      <Form
        isLoading={isLoading}
        error={formError}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FieldItem>
          <FieldItem.Label htmlFor="email">이메일</FieldItem.Label>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register("email")}
          />
        </FieldItem>
        <FieldItem>
          <FieldItem.Label htmlFor="nickname">닉네임</FieldItem.Label>
          <Input
            type="text"
            placeholder="닉네임을 입력해주세요"
            {...register("nickname")}
          />
        </FieldItem>
        <FieldItem>
          <FieldItem.Label htmlFor="password">비밀번호</FieldItem.Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password")}
          />
        </FieldItem>
        <FieldItem>
          <FieldItem.Label htmlFor="passwordConfirmation">
            비밀번호 확인
          </FieldItem.Label>
          <Input
            type="password"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            {...register("passwordConfirmation")}
          />
        </FieldItem>
        <Button type="submit" size="xl" disabled={!isFormValid}>
          회원가입
        </Button>
      </Form>
    </AuthContainer>
  );
}
