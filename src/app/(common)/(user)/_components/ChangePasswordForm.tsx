"use client";

import { useRouter } from "next/navigation";
import { FieldItem, Form, Input } from "@components/Field";
import { Button } from "@components/ui";
import useFormWithError from "@hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldAdapter } from "@components/adaptor/rhf";
import {
  changePasswordFormSchema,
  ChangePasswordFormType,
} from "@/schemas/user";
import action from "../changePassword/action";

export default function ChangePasswordForm() {
  const {
    control,
    formError,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<ChangePasswordFormType>({
    mode: "onBlur",
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
  });
  const router = useRouter();

  async function onSubmit(data: ChangePasswordFormType) {
    const response = await action(data);
    if (response.success) {
      router.replace("/mypage");
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
        <FieldItem.Label htmlFor="password">이전 비밀번호</FieldItem.Label>
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
        <FieldItem.Label htmlFor="newPassword">새 비밀번호</FieldItem.Label>
        <FieldAdapter
          name="newPassword"
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
        <FieldItem.Label htmlFor="newPasswordConfirmation">
          새 비밀번호 확인
        </FieldItem.Label>
        <FieldAdapter
          name="newPasswordConfirmation"
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
        변경하기
      </Button>
    </Form>
  );
}
