"use client";

import { FieldItem, Input } from "@components/Field";
import { Button } from "@components/ui";
import useFormWithError from "@hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinFormSchmea, SigninFormType } from "@schemas/auth";
import { FieldAdapter } from "@components/adaptor/rhf";
import { ServerForm } from "@/components/Field/ServerForm";
import { useActionState } from "react";
import action from "../login/action";

export default function LoginForm() {
  const [formStatus, formAction, isPending] = useActionState(action, {
    message: "",
  });
  const {
    control,
    formState: { isValid },
  } = useFormWithError<SigninFormType>({
    mode: "onBlur",
    resolver: zodResolver(signinFormSchmea),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <ServerForm
      action={formAction}
      isLoading={isPending}
      error={formStatus?.message}
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
    </ServerForm>
  );
}
