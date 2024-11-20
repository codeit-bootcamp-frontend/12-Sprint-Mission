import { useNavigate } from "react-router-dom";
import { useAuth } from "@context/useAuth";
import useForm from "@hooks/useForm";
import AuthContainer from "@components/Auth";
import Input from "@components/Input";
import Button from "@components/Button";
import { VALIDATION_MESSAGES, VALIDATION_REGEX } from "@util/validation";

const formSchema = {
  email: {
    value: "",
    rule: {
      required: VALIDATION_MESSAGES.EMAIL_REQUIRED,
      patterns: [
        {
          regex: VALIDATION_REGEX.EMAIL,
          message: VALIDATION_MESSAGES.INVALID_EMAIL,
        },
      ],
    },
  },
  password: {
    value: "",
    rule: {
      required: VALIDATION_MESSAGES.PASSWORD_REQUIRED,
      patterns: [
        {
          regex: VALIDATION_REGEX.PASSWORD,
          message: VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH,
        },
      ],
    },
  },
};

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
    <AuthContainer isLoading={isLoading} error={formError}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <Button type="submit" size="xl" disabled={!isFormValid}>
          로그인
        </Button>
      </form>
    </AuthContainer>
  );
}
