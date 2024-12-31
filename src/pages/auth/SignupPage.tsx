import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { Form, FieldItem, Input } from "@components/Field";
import { Button } from "@components/ui";
import AuthContainer from "./components/AuthContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormWithError from "@hooks/useFormWithError";
import { signupFormSchema, SignupFormType } from "@schemas/auth";

export default function SignupPage() {
  const navigate = useNavigate();
  const {
    auth: { accessToken },
    handleSignup,
  } = useAuth();

  if (accessToken) {
    return <Navigate to="/items" />;
  }

  const {
    formError,
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<SignupFormType>({
    resolver: zodResolver(signupFormSchema),
  });

  async function onSubmit(data: SignupFormType) {
    try {
      await handleSignup(data);
      alert("회원가입에 성공했습니다. \n로그인 페이지로 이동합니다.");
      navigate("/login", { replace: true });
    } catch (err) {
      throw err;
    }
  }

  return (
    <AuthContainer mode="signup">
      <Form
        isLoading={isSubmitting}
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
        <Button type="submit" size="xl" disabled={!isValid}>
          회원가입
        </Button>
      </Form>
    </AuthContainer>
  );
}
