"use client";

import { FieldItem, Form, Input } from "@components/Field";
import { Button } from "@components/ui";
import useFormWithError from "@hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinFormSchmea, SigninFormType } from "@schemas/auth";
import { FieldAdapter } from "@components/adaptor/rhf";
import { signIn } from "next-auth/react";

export default function LoginForm() {
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
    const response = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    // https://github.com/nextauthjs/next-auth/issues/9465
    // redirect false로 응답을 받아볼때, 로그인실패도 ok가 true 전달되고 있음
    // 임시로 message와 코드로 실패처리
    if (response?.error === "CredentialsSignin") {
      throw new Error(response.code);
    }

    // 기본 signIn의 locatio href를 'redirect:false'로 잠시 막아놔서
    // 직접 reload를 통해 각종 캐시(리액트쿼리, 세션등을 초기) 초기화.
    window.location.reload();
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
  );
}
