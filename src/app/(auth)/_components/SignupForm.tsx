"use client";

import { useRouter } from "next/navigation";
import { FieldItem, Form, Input } from "@components/Field";
import { Button } from "@components/ui";
import useFormWithError from "@hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema, SignupFormType } from "@schemas/auth";
import { FieldAdapter } from "@components/adaptor/rhf";
import action from "../signup/action";

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
    const response = await action(data);
    if (response.success) {
      router.replace("/login");
    } else {
      throw new Error(response.message);
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
