import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../components/Auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuthForm } from "../../hooks/useAuthForm";
import { useAuth } from "../../context/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { handleLogin } = useAuth();
  const { formData, isFormValid, handleChange } = useAuthForm({
    email: { value: "", error: null },
    password: { value: "", error: null },
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) {
      alert("다시 한번 확인해주세요. 제출 할 수 없습니다.");
      return;
    }

    try {
      setIsLoading(true);
      const res = await handleLogin({
        email: formData.email.value,
        password: formData.password.value,
      });
      if (res) {
        alert("로그인에 성공했습니다.");
        navigate("/items");
      }
    } catch (err) {
      console.log(err);
      alert("로그인에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContainer isLoading={isLoading}>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="이메일"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={formData["email"].value}
          onChange={handleChange}
          error={formData["email"].error}
          required
        />
        <Input
          type="password"
          label="비밀번호"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={formData["password"].value}
          onChange={handleChange}
          error={formData["password"].error}
          required
        />
        <Button type="submit" size="xl" disabled={!isFormValid}>
          로그인
        </Button>
      </form>
    </AuthContainer>
  );
}
