"use client";

import { useRouter } from "next/navigation";
import { FieldItem, Form, Input } from "@components/Field";
import { Button } from "@components/ui";
import useFormWithError from "@hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema, SignupFormType } from "@schemas/auth";
import { FieldAdapter } from "@components/adaptor/rhf";
import { signUp } from "@/service/auth";
import { isAxiosError } from "axios";

export default function SignupForm() {
  const {
    control,
    formError,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<SignupFormType>({
    mode: "onBlur",
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirmation: "",
    },
  });
  const router = useRouter();

  async function onSubmit(data: SignupFormType) {
    try {
      await signUp(data);
      alert("가입에 성공했습니다. 로그인을 해주세요");
      router.replace("/login");
    } catch (error) {
      const message = isAxiosError(error)
        ? error.response?.data.message
        : "알 수 없는 에러가 발생했어요.";

      throw new Error(message);
    }
  }

  return (
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
        <FieldItem.Label htmlFor="nickname">닉네임</FieldItem.Label>
        <FieldAdapter
          name="nickname"
          control={control}
          render={(props) => (
            <Input type="text" placeholder="닉네임을 입력해주세요" {...props} />
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
      <FieldItem>
        <FieldItem.Label htmlFor="passwordConfirmation">
          비밀번호 확인
        </FieldItem.Label>
        <FieldAdapter
          name="passwordConfirmation"
          control={control}
          render={(props) => (
            <Input
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              {...props}
            />
          )}
        />
      </FieldItem>
      <Button type="submit" size="xl" disabled={!isValid}>
        회원가입
      </Button>
    </Form>
  );
}
