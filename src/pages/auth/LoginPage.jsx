import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import useForm from "@hooks/useForm";
import { Form, FieldItem, Input } from "@components/Field";
import { Button } from "@components/ui";
import AuthContainer from "./components/AuthContainer";
import { loginFormSchema } from "./components/schema";

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    auth: { accessToken },
    handleLogin,
  } = useAuth();

  if (accessToken) {
    return <Navigate to="/items" />;
  }

  const { formError, isFormValid, isLoading, handleSubmit, register } =
    useForm(loginFormSchema);

  async function onSubmit(data) {
    try {
      await handleLogin(data);
      alert("로그인에 성공했습니다.");
      navigate("/items", { replace: true });
    } catch (err) {
      throw err;
    }
  }

  return (
    <AuthContainer>
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
          <FieldItem.Label htmlFor="password">비밀번호</FieldItem.Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password")}
          />
        </FieldItem>
        <Button type="submit" size="xl" disabled={!isFormValid}>
          로그인
        </Button>
      </Form>
    </AuthContainer>
  );
}
