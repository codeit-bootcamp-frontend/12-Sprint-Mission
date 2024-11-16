import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../components/Auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuthForm } from "../../hooks/useAuthForm";
import { signUp } from "../../service/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { formData, isFormValid, handleChange } = useAuthForm({
    email: { value: "", error: null },
    nickname: { value: "", error: null },
    password: { value: "", error: null },
    passwordConfirmation: { value: "", error: null },
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) {
      alert("다시 한번 확인해주세요. 제출 할 수 없습니다.");
      return;
    }

    try {
      setIsLoading(true);
      await signUp({
        email: formData.email.value,
        nickname: formData.nickname.value,
        password: formData.password.value,
        passwordConfirmation: formData.passwordConfirmation.value,
      });

      alert("회원가입에 성공했습니다. \n로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContainer mode="signup" isLoading={isLoading}>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="이메일"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={formData.email.value}
          onChange={handleChange}
          error={formData.email.error}
          required
        />
        <Input
          type="text"
          label="닉네임"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          value={formData.nickname.value}
          onChange={handleChange}
          error={formData.nickname.error}
          required
        />
        <Input
          type="password"
          label="비밀번호"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={formData.password.value}
          onChange={handleChange}
          error={formData.password.error}
          required
        />
        <Input
          type="password"
          label="비밀번호 확인"
          id="passwordConfirmation"
          name="passwordConfirmation"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          value={formData.passwordConfirmation.value}
          onChange={handleChange}
          error={formData.passwordConfirmation.error}
          required
        />
        <Button type="submit" size="xl" disabled={!isFormValid}>
          회원가입
        </Button>
      </form>
    </AuthContainer>
  );
}
