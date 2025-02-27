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
} from "@/service/user.schema";
import FormControl from "./FormControl";
import { useChangePassword } from "@/service/user.queries";
import { isAxiosError } from "axios";

export default function ChangePasswordForm() {
  const { mutateAsync: changePassword } = useChangePassword();
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
    try {
      await changePassword(data);
      router.replace("/mypage");
    } catch (error) {
      throw new Error(
        isAxiosError(error)
          ? error.response?.data.message
          : "알 수 없는 에러가 발생했습니다."
      );
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
      <FormControl>
        <Button
          type="button"
          variant="text"
          color="secondary"
          onClick={() => router.back()}
        >
          취소
        </Button>
        <Button type="submit" disabled={!isValid}>
          변경하기
        </Button>
      </FormControl>
    </Form>
  );
}
