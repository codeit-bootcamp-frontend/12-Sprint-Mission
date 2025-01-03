import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { Form, FieldItem, Input } from "@components/Field";
import { Button } from "@components/ui";
import AuthContainer from "./components/AuthContainer";
import useFormWithError from "@hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinFormSchmea, SigninFormType } from "@schemas/auth";
import { FieldAdapter } from "@components/adaptor/rhf";

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    auth: { accessToken },
    handleLogin,
  } = useAuth();

  if (accessToken) {
    return <Navigate to="/items" />;
  }

  const {
    control,
    formError,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<SigninFormType>({
    mode: "onBlur",
    resolver: zodResolver(signinFormSchmea),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: SigninFormType) {
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
        isLoading={isSubmitting}
        error={formError}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FieldItem>
          <FieldItem.Label htmlFor="email">이메일</FieldItem.Label>
          <FieldAdapter
            name="email"
            control={control}
            render={(props) => (
              <Input
                type="email"
                placeholder="이메일을 입력해주세요"
                {...props}
              />
            )}
          />
        </FieldItem>
        <FieldItem>
          <FieldItem.Label htmlFor="password">비밀번호</FieldItem.Label>
          <FieldAdapter
            name="password"
            control={control}
            render={(props) => (
              <Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...props}
              />
            )}
          />
        </FieldItem>
        <Button type="submit" size="xl" disabled={!isValid}>
          로그인
        </Button>
      </Form>
    </AuthContainer>
  );
}
