import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import AuthContainer from "../../components/Auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { signUp } from "../../service/auth";
import { VALIDATION_MESSAGES, VALIDATION_REGEX } from "../../util/validation";

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
  nickname: {
    value: "",
    rule: {
      required: VALIDATION_MESSAGES.USERNAME_REQUIRED,
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
  passwordConfirmation: {
    value: "",
    rule: {
      required: VALIDATION_MESSAGES.PASSWORD_REQUIRED,
      patterns: [
        {
          regex: VALIDATION_REGEX.PASSWORD,
          message: VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH,
        },
      ],
      match: {
        field: "password",
        message: VALIDATION_MESSAGES.PASSWORD_MISMATCH,
      },
    },
  },
};

export default function Signup() {
  const navigate = useNavigate();
  const {
    formState,
    isFormValid,
    isLoading,
    handleChange,
    trigger,
    handleSubmit,
    getValues,
  } = useForm(formSchema);

  //비밀번호 변경시 비밀번호확인 필드 trigger
  useEffect(() => {
    if (!formState.password.value || !formState.passwordConfirmation.value)
      return;

    trigger("passwordConfirmation");
  }, [formState.password.value, formState.passwordConfirmation.value]);

  async function onSubmit(e) {
    try {
      await signUp(getValues());
      alert("회원가입에 성공했습니다. \n로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContainer mode="signup" isLoading={isLoading}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          label="이메일"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={formState.email.value}
          onChange={handleChange}
          error={formState.email.error}
          required
        />
        <Input
          type="text"
          label="닉네임"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          value={formState.nickname.value}
          onChange={handleChange}
          error={formState.nickname.error}
          required
        />
        <Input
          type="password"
          label="비밀번호"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={formState.password.value}
          onChange={handleChange}
          error={formState.password.error}
          required
        />
        <Input
          type="password"
          label="비밀번호 확인"
          id="passwordConfirmation"
          name="passwordConfirmation"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          value={formState.passwordConfirmation.value}
          onChange={handleChange}
          error={formState.passwordConfirmation.error}
          required
        />
        <Button type="submit" size="xl" disabled={!isFormValid}>
          회원가입
        </Button>
      </form>
    </AuthContainer>
  );
}
