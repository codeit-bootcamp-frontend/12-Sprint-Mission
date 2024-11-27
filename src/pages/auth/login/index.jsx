import { useNavigate } from "react-router-dom";
import { useAuth } from "@context/useAuth";
import useForm from "@hooks/useForm";
import AuthContainer from "../components/AuthContainer";
import { FieldItem, Input } from "@components/Field";
import Button from "@components/Button";
import { formSchema } from "./formSchema";

export default function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const { formError, isFormValid, isLoading, handleSubmit, register } =
    useForm(formSchema);

  async function onSubmit(data) {
    try {
      await handleLogin(data);
      alert("로그인에 성공했습니다.");
      navigate("/items");
    } catch (err) {
      throw err;
    }
  }

  return (
    <AuthContainer
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
    </AuthContainer>
  );
}
